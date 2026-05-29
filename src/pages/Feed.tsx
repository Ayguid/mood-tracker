import { useNavigate } from 'react-router-dom';
import { useMemoryStore } from '../store/memoryStore';
import { useTagStore } from '../store/tagStore';

export const Feed = () => {
  const { memories, deleteMemory } = useMemoryStore();
  const { tags } = useTagStore();
  const navigate = useNavigate();

  // Asegurar que las fechas son objetos Date (solución temporal)
  const sorted = [...memories]
    .map(m => ({ ...m, date: new Date(m.date) }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this memory? This cannot be undone.')) {
      deleteMemory(id);
    }
  };

  // Función compacta para mostrar jerarquía con flechas
  const formatFeelings = (feelings: typeof memories[0]['feelings']) => {
    const roots = feelings.filter(f => f.parent_id === null);
    return roots.map(root => {
      let path = `${root.emoji} ${root.label}`;
      let current = root;
      while (true) {
        const child = feelings.find(f => f.parent_id === current.id);
        if (!child) break;
        path += ` → ${child.emoji} ${child.label}`;
        current = child;
      }
      return path;
    }).join(', ');
  };

  if (sorted.length === 0) {
    return <p>No memories yet. <a href="/new">Create one</a></p>;
  }

  return (
    <div>
      <h2>Your memories</h2>
      {sorted.map((memory) => {
        const memoryTags = memory.tags
          .map(tagId => tags.find(t => t.id === tagId))
          .filter(Boolean);

        return (
          <div key={memory.id} className="card">
            <div className="card-title">{memory.date.toLocaleDateString()}</div>
            <div className="card-text">{memory.text}</div>
            {memory.feelings.length > 0 && (
              <div>
                <strong>Feelings:</strong> {formatFeelings(memory.feelings)}
              </div>
            )}
            {memoryTags.length > 0 && (
              <div style={{ marginTop: '0.5rem' }}>
                <strong>Tags:</strong> {memoryTags.map(tag => `#${tag!.label}`).join(' ')}
              </div>
            )}
            <div className="card-footer">
              <button onClick={() => navigate(`/edit/${memory.id}`)} className="btn btn-edit">Edit</button>
              <button onClick={() => handleDelete(memory.id)} className="btn btn-delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};