import { useState } from 'react';
import { useLocalStorageTags } from '../hooks/useLocalStorageTags';

export const Tags = () => {
  const { tags, setTags } = useLocalStorageTags();
  const [newTagLabel, setNewTagLabel] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState('');

  const addTag = () => {
    const label = newTagLabel.trim();
    if (label === '') return;
    const newTag = { id: crypto.randomUUID(), label };
    setTags([...tags, newTag]);
    setNewTagLabel('');
  };

  const startEdit = (id: string, currentLabel: string) => {
    setEditingId(id);
    setEditLabel(currentLabel);
  };

  const saveEdit = (id: string) => {
    const newLabel = editLabel.trim();
    if (newLabel === '') return;
    setTags(tags.map(t => t.id === id ? { ...t, label: newLabel } : t));
    setEditingId(null);
  };

  const deleteTag = (id: string) => {
    if (window.confirm('Delete this tag? It will be removed from all memories.')) {
      setTags(tags.filter(t => t.id !== id));
    }
  };

  return (
    <div>
      <h2>Manage Tags</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTagLabel}
          onChange={e => setNewTagLabel(e.target.value)}
          placeholder="New tag name"
        />
        <button onClick={addTag}>Add Tag</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tags.map(tag => (
          <li key={tag.id} style={{ marginBottom: '0.5rem' }}>
            {editingId === tag.id ? (
              <>
                <input
                  type="text"
                  value={editLabel}
                  onChange={e => setEditLabel(e.target.value)}
                  autoFocus
                />
                <button onClick={() => saveEdit(tag.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ marginRight: '0.5rem' }}>{tag.label}</span>
                <button onClick={() => startEdit(tag.id, tag.label)}>Edit</button>
                <button onClick={() => deleteTag(tag.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};