import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLocalStorageTags } from '../hooks/useLocalStorageTags';

export const Feed = () => {
  const { memories, setMemories } = useLocalStorage();
  const { tags } = useLocalStorageTags();
  const navigate = useNavigate();
  const sorted = [...memories].sort((a, b) => b.date.getTime() - a.date.getTime());

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this memory? This cannot be undone.')) {
      const newMemories = memories.filter(m => m.id !== id);
      setMemories(newMemories);
    }
  };

  if (sorted.length === 0) {
    return <p>No memories yet. <a href="/new">Create one</a></p>;
  }

  return (
    <div>
      <h2>Your memories</h2>
      {sorted.map(m => {
        // Resolver los nombres de los tags a partir de los IDs guardados
        const memoryTags = m.tags.map(tagId => tags.find(t => t.id === tagId)).filter(Boolean);
        return (
          <div key={m.id} className="card">
            <div className="card-title">{m.date.toLocaleDateString()}</div>
            <div className="card-text">{m.text}</div>
            {m.feelings.length > 0 && (
              <div><strong>Feelings:</strong> {m.feelings.map(f => `${f.emoji} ${f.label}`).join(', ')}</div>
            )}
            {memoryTags.length > 0 && (
              <div style={{ marginTop: '0.5rem' }}>
                <strong>Tags:</strong> {memoryTags.map(tag => `#${tag!.label}`).join(' ')}
              </div>
            )}
            <div className="card-footer">
              <button onClick={() => navigate(`/edit/${m.id}`)} className="btn btn-edit">Edit</button>
              <button onClick={() => handleDelete(m.id)} className="btn btn-delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};