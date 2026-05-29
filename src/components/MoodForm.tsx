import { useState } from 'react';
import type { Feeling } from '../types';
import { baseFeelings } from '../data/feelings';
import { FeelingSelector } from './FeelingSelector';
import { useLocalStorageTags } from '../hooks/useLocalStorageTags';

interface MoodFormProps {
  onSave: (id: string | undefined, text: string, date: Date, feelings: Feeling[], tags: string[]) => void;
  memoryId?: string;
  initialText?: string;
  initialDate?: Date;
  initialFeelings?: Feeling[];
  initialTags?: string[];
  submitLabel?: string;
}

export const MoodForm = ({
  onSave,
  memoryId,
  initialText = '',
  initialDate = new Date(),
  initialFeelings = [],
  initialTags = [],
  submitLabel = 'Save Memory'
}: MoodFormProps) => {
  const [text, setText] = useState(initialText);
  const [date, setDate] = useState(initialDate.toISOString().split('T')[0]);
  const [selectedFeelings, setSelectedFeelings] = useState<Feeling[]>(initialFeelings);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>(initialTags);

  const { tags } = useLocalStorageTags();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Please describe your day');
      return;
    }
    onSave(memoryId, text, new Date(date), selectedFeelings, selectedTagIds);
    // Solo resetear si es creación (memoryId undefined)
    if (!memoryId) {
      setText('');
      setSelectedFeelings([]);
      setSelectedTagIds([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-group">
        <label className="form-label">Date</label>
        <input type="date" className="form-input" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="form-label">What happened today?</label>
        <textarea className="form-textarea" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Describe your day..." />
      </div>
      <FeelingSelector 
        selectedFeelings={selectedFeelings}
        onChange={setSelectedFeelings}
        allFeelings={baseFeelings}
        maxRoots={2}
        childLimit={2}
        limitBehavior="hide"
      />
      <div className="form-group">
        <label className="form-label">Tags</label>
        <select
          multiple
          value={selectedTagIds}
          onChange={(e) => {
            const options = e.target.options;
            const selected = Array.from(options)
              .filter(opt => opt.selected)
              .map(opt => opt.value);
            setSelectedTagIds(selected);
          }}
          className="form-input"
          style={{ minHeight: '80px' }}
        >
          {tags.map(tag => (
            <option key={tag.id} value={tag.id}>{tag.label}</option>
          ))}
        </select>
        <small className="form-hint">Hold Ctrl (Cmd) to select multiple tags</small>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit" className="btn btn-primary">{submitLabel}</button>
      </div>
    </form>
  );
};