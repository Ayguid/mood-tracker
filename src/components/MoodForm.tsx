import { useState } from 'react';
import type { Feeling } from '../types';
import { baseFeelings } from '../data/feelings';
import { FeelingSelector } from './FeelingSelector';

interface MoodFormProps {
  onSave: (id: string | undefined, text: string, date: Date, feelings: Feeling[]) => void;
  memoryId?: string;
  initialText?: string;
  initialDate?: Date;
  initialFeelings?: Feeling[];
  submitLabel?: string;
}

export const MoodForm = ({
  onSave,
  memoryId,
  initialText = '',
  initialDate = new Date(),
  initialFeelings = [],
  submitLabel = 'Save Memory'
}: MoodFormProps) => {
  const [text, setText] = useState(initialText);
  const [date, setDate] = useState(initialDate.toISOString().split('T')[0]);
  const [selectedFeelings, setSelectedFeelings] = useState<Feeling[]>(initialFeelings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Please describe your day');
      return;
    }
    onSave(memoryId, text, new Date(date), selectedFeelings);
    // Solo resetear si es creación (memoryId undefined)
    if (!memoryId) {
      setText('');
      setSelectedFeelings([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Describe your day..." style={{ width: '100%' }} />
      </div>
      <FeelingSelector
        selectedFeelings={selectedFeelings}
        onChange={setSelectedFeelings}
        allFeelings={baseFeelings}
        maxRoots={2}
        childLimit={1}
        limitBehavior="hide"
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
};