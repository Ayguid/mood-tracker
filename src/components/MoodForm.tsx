import { useState } from 'react';
import type { Feeling } from '../types';
import { baseFeelings } from '../data/feelings';
import { FeelingSelector } from './FeelingSelector';
import { useTagStore } from '../store/tagStore'; // Importar el store de tags

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
  const { tags: allTags } = useTagStore(); // Obtener tags globales desde Zustand

  const [formData, setFormData] = useState({
    text: initialText,
    date: initialDate.toISOString().split('T')[0],
    feelings: initialFeelings,
    tags: initialTags
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.text.trim()) {
      alert('Please describe your day');
      return;
    }
    onSave(memoryId, formData.text, new Date(formData.date), formData.feelings, formData.tags);
    if (!memoryId) {
      // Resetear formulario en creación
      setFormData({
        text: '',
        date: new Date().toISOString().split('T')[0],
        feelings: [],
        tags: []
      });
    }
  };

  const updateField = <K extends keyof typeof formData>(field: K, value: typeof formData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <div className="form-group">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-input"
          value={formData.date}
          onChange={(e) => updateField('date', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">What happened today?</label>
        <textarea
          className="form-textarea"
          rows={4}
          value={formData.text}
          onChange={(e) => updateField('text', e.target.value)}
          placeholder="Describe your day..."
        />
      </div>

      <FeelingSelector
        selectedFeelings={formData.feelings}
        onChange={(newFeelings) => updateField('feelings', newFeelings)}
        allFeelings={baseFeelings}
        maxRoots={2}
        childLimit={2}
        limitBehavior="hide"
      />

      <div className="form-group">
        <label className="form-label">Tags</label>
        <select
          multiple
          value={formData.tags}
          onChange={(e) => {
            const options = e.target.options;
            const selected = Array.from(options)
              .filter(opt => opt.selected)
              .map(opt => opt.value);
            updateField('tags', selected);
          }}
          className="form-input"
          style={{ minHeight: '80px' }}
        >
          {allTags.map(tag => (
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