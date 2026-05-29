import { useParams, useNavigate } from 'react-router-dom';
import { MoodForm } from '../components/MoodForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Feeling } from '../types';

export const EditMemory = () => {
  const { id } = useParams<{ id: string }>();
  const { memories, setMemories } = useLocalStorage();
  const navigate = useNavigate();

  const memory = memories.find(m => m.id === id);
  if (!memory) {
    return <p>Memory not found. <a href="/feed">Go back</a></p>;
  }

  const handleSave = (id: string | undefined, text: string, date: Date, feelings: Feeling[]) => {
    if (!id) return;
    const updatedMemory = { ...memory, text, date, feelings };
    const newMemories = memories.map(m => m.id === id ? updatedMemory : m);
    setMemories(newMemories);
    navigate('/feed');
  };

  return (
    <MoodForm
      memoryId={memory.id}
      initialText={memory.text}
      initialDate={memory.date}
      initialFeelings={memory.feelings}
      submitLabel="Update Memory"
      onSave={handleSave}
    />
  );
};