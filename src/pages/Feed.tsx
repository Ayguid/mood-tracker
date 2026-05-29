import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Feed = () => {
  const { memories, setMemories } = useLocalStorage();
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
      {sorted.map(m => (
        <div key={m.id} style={{ border: '1px solid #ddd', marginBottom: '1rem', padding: '1rem' }}>
          <small>{m.date.toLocaleDateString()}</small>
          <p>{m.text}</p>
          {m.feelings.length > 0 && (
            <div>
              <strong>Feelings:</strong> {m.feelings.map(f => `${f.emoji} ${f.label}`).join(', ')}
            </div>
          )}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button onClick={() => navigate(`/edit/${m.id}`)}>Edit</button>
            <button onClick={() => handleDelete(m.id)} style={{ backgroundColor: '#ff4444', color: 'white' }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};