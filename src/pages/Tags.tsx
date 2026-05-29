import { useState } from 'react';
import { useTagStore } from '../store/tagStore';

export const Tags = () => {
  const { tags, addTag, editTag, deleteTag } = useTagStore();
  const [newTagLabel, setNewTagLabel] = useState('');
  const [editingTag, setEditingTag] = useState<{ id: string; label: string } | null>(null);

  const handleAddTag = () => {
    addTag(newTagLabel);
    setNewTagLabel('');
  };

  const startEdit = (tag: { id: string; label: string }) => {
    setEditingTag({ id: tag.id, label: tag.label });
  };

  const saveEdit = () => {
    if (!editingTag) return;
    editTag(editingTag.id, editingTag.label);
    setEditingTag(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this tag? It will be removed from all memories.')) {
      deleteTag(id);
    }
  };

  return (
    <div>
      <h2>Manage Tags</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTagLabel}
          onChange={(e) => setNewTagLabel(e.target.value)}
          placeholder="New tag name"
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tags.map((tag) => (
          <li key={tag.id} style={{ marginBottom: '0.5rem' }}>
            {editingTag?.id === tag.id ? (
              <>
                <input
                  type="text"
                  value={editingTag.label}
                  onChange={(e) =>
                    setEditingTag({ ...editingTag, label: e.target.value })
                  }
                  autoFocus
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditingTag(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ marginRight: '0.5rem' }}>{tag.label}</span>
                <button onClick={() => startEdit(tag)}>Edit</button>
                <button onClick={() => handleDelete(tag.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};