import { useNavigate } from 'react-router-dom';
import { MoodForm } from '../components/MoodForm';
import { useMemoryStore } from '../store/memoryStore';
import type { Feeling } from '../types';

export const NewMemory = () => {
  const { addMemory } = useMemoryStore();
  const navigate = useNavigate();

  const handleSave = (id: string | undefined, text: string, date: Date, feelings: Feeling[], tags: string[]) => {
    const newMemory = {
      id: crypto.randomUUID(),
      date,
      text,
      feelings,
      tags,
    };
    addMemory(newMemory);
    navigate('/feed');
  };

  return <MoodForm onSave={handleSave} />;
};