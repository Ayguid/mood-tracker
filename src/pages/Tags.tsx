import { useState } from 'react';
import { useLocalStorageTags } from '../hooks/useLocalStorageTags';

export const Tags = () => {
  const { tags, setTags } = useLocalStorageTags();
  const [newTagLabel, setNewTagLabel] = useState('');
  const [editingTag, setEditingTag] = useState<{ id: string; label: string } | null>(null);

  const addTag = () => {
    const label = newTagLabel.trim();
    if (label === '') return;
    const newTag = { id: crypto.randomUUID(), label };
    setTags([...tags, newTag]);
    setNewTagLabel('');
  };

  const startEdit = (tag: { id: string; label: string }) => {
    setEditingTag({ id: tag.id, label: tag.label });
  };

  const saveEdit = () => {
    if (!editingTag) return;
    const newLabel = editingTag.label.trim();
    if (newLabel === '') return;
    setTags(tags.map(t => t.id === editingTag.id ? { ...t, label: newLabel } : t));
    setEditingTag(null);
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
            {editingTag?.id === tag.id ? (
              <>
                <input
                  type="text"
                  value={editingTag.label}
                  onChange={e => setEditingTag({ ...editingTag, label: e.target.value })}
                  autoFocus
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditingTag(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ marginRight: '0.5rem' }}>{tag.label}</span>
                <button onClick={() => startEdit(tag)}>Edit</button>
                <button onClick={() => deleteTag(tag.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};