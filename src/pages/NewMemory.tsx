import { useNavigate } from 'react-router-dom';
import { MoodForm } from '../components/MoodForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Feeling } from '../types';

export const NewMemory = () => {
  const { memories, setMemories } = useLocalStorage();
  const navigate = useNavigate();

  const handleSave = (id: string | undefined, text: string, date: Date, feelings: Feeling[]) => {
    const newMemory = {
      id: crypto.randomUUID(),
      date,
      text,
      feelings,
      tags: [],
    };
    setMemories([...memories, newMemory]);
    navigate('/feed');
  };

  return <MoodForm onSave={handleSave} />;
};