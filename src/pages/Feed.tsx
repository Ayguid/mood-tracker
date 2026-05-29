import { useNavigate } from 'react-router-dom';
import { useMemoryStore } from '../store/memoryStore';
import { useTagStore } from '../store/tagStore';

export const Feed = () => {
  const { memories, deleteMemory } = useMemoryStore();
  const { tags } = useTagStore();
  const navigate = useNavigate();

  const sorted = [...memories].sort((a, b) => b.date.getTime() - a.date.getTime());

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this memory? This cannot be undone.')) {
      deleteMemory(id);
    }
  };

  if (sorted.length === 0) {
    return <p>No memories yet. <a href="/new">Create one</a></p>;
  }

  return (
    <div>
      <h2>Your memories</h2>
      {sorted.map((memory) => {
        // Resolver nombres de tags a partir de los IDs guardados
        const memoryTags = memory.tags
          .map(tagId => tags.find(t => t.id === tagId))
          .filter(Boolean);

        return (
          <div key={memory.id} className="card">
            <div className="card-title">{memory.date.toLocaleDateString()}</div>
            <div className="card-text">{memory.text}</div>
            {memory.feelings.length > 0 && (
              <div>
                <strong>Feelings:</strong> {memory.feelings.map(f => `${f.emoji} ${f.label}`).join(', ')}
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