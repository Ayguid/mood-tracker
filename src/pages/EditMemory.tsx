import { useParams, useNavigate } from 'react-router-dom';
import { MoodForm } from '../components/MoodForm';
import { useMemoryStore } from '../store/memoryStore';
import type { Feeling } from '../types';

export const EditMemory = () => {
  const { id } = useParams<{ id: string }>();
  const { memories, updateMemory } = useMemoryStore();
  const navigate = useNavigate();

  const memory = memories.find(m => m.id === id);
  if (!memory) {
    return <p>Memory not found. <a href="/feed">Go back</a></p>;
  }

  const handleSave = (id: string | undefined, text: string, date: Date, feelings: Feeling[], tags: string[]) => {
    if (!id) return;
    const updatedMemory = { ...memory, text, date, feelings, tags };
    updateMemory(id, updatedMemory);
    navigate('/feed');
  };

  return (
    <MoodForm
      memoryId={memory.id}
      initialText={memory.text}
      initialDate={memory.date}
      initialFeelings={memory.feelings}
      initialTags={memory.tags}
      submitLabel="Update Memory"
      onSave={handleSave}
    />
  );
};