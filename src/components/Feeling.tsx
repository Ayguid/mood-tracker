import { useMemo } from 'react';
import type { Feeling as FeelingType } from '../types';

type LimitBehavior = 'hide' | 'disable';

interface FeelingProps {
  feeling: FeelingType;
  selectedFeelings: FeelingType[];
  onChange: (selected: FeelingType[]) => void;
  allFeelings: FeelingType[];
  childLimit: number;
  limitBehavior?: LimitBehavior;
  level?: number;
}

export const Feeling = ({
  feeling,
  selectedFeelings,
  onChange,
  allFeelings,
  childLimit,
  limitBehavior = 'hide',
  level = 0,
}: FeelingProps) => {
  const isSelected = selectedFeelings.some(f => f.id === feeling.id);

  const children = useMemo(
    () => allFeelings.filter(f => f.parent_id === feeling.id),
    [allFeelings, feeling.id]
  );

  const selectedChildren = useMemo(
    () => selectedFeelings.filter(f => f.parent_id === feeling.id),
    [selectedFeelings, feeling.id]
  );

  const siblingsSelected = useMemo(() => {
    if (feeling.parent_id === null) return 0;
    return selectedFeelings.filter(f => f.parent_id === feeling.parent_id).length;
  }, [selectedFeelings, feeling.parent_id]);

  const isSelectable = () => {
    if (feeling.parent_id === null) return true;
    const parentSelected = selectedFeelings.some(f => f.id === feeling.parent_id);
    if (!parentSelected) return false;
    if (isSelected) return true;
    return siblingsSelected < childLimit;
  };

  const canSelect = isSelectable();

  const shouldShow = () => {
    if (feeling.parent_id === null) return true;
    const parentSelected = selectedFeelings.some(f => f.id === feeling.parent_id);
    if (!parentSelected) return false;
    if (isSelected) return true;
    if (limitBehavior === 'hide') return siblingsSelected < childLimit;
    return true;
  };

  const toggleFeeling = () => {
    if (isSelected) {
      // Obtener todos los IDs de descendientes (incluyendo el propio)
      const getDescendantIds = (nodeId: string | number): (string | number)[] => {
        const directChildren = allFeelings.filter(f => f.parent_id === nodeId);
        let descendantIds = directChildren.map(c => c.id);
        for (const child of directChildren) {
          descendantIds = descendantIds.concat(getDescendantIds(child.id));
        }
        return descendantIds;
      };
      const idsToRemove = [feeling.id, ...getDescendantIds(feeling.id)];
      const newSelected = selectedFeelings.filter(f => !idsToRemove.includes(f.id));
      onChange(newSelected);
    } else {
      if (!canSelect) return;
      onChange([...selectedFeelings, feeling]);
    }
  };

  if (!shouldShow()) return null;

  const containerStyle = {
    marginLeft: level > 0 ? '1.5rem' : '0',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    borderLeft: level > 0 ? '2px solid #e0e0e0' : 'none',
    paddingLeft: level > 0 ? '1rem' : '0',
  };

  const buttonStyle = {
    backgroundColor: isSelected ? '#c8e6c9' : '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '24px',
    padding: '0.3rem 1rem',
    cursor: canSelect ? 'pointer' : 'not-allowed',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    transition: 'all 0.2s',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    opacity: (!canSelect && limitBehavior === 'disable') ? 0.5 : 1,
  };

  return (
    <div style={containerStyle}>
      <button
        type="button"
        onClick={toggleFeeling}
        style={buttonStyle}
        disabled={!canSelect && limitBehavior === 'disable'}
      >
        {feeling.emoji} {feeling.label}
        {isSelected && selectedChildren.length > 0 && (
          <span
            style={{
              fontSize: '0.7rem',
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '0 6px',
              marginLeft: '4px',
            }}
          >
            {selectedChildren.length}/{childLimit}
          </span>
        )}
        {isSelected && <span> ✓</span>}
      </button>
      {isSelected && children.length > 0 && (
        <div style={{ marginTop: '0.25rem' }}>
          {children.map((child) => (
            <Feeling
              key={child.id}
              feeling={child}
              selectedFeelings={selectedFeelings}
              onChange={onChange}
              allFeelings={allFeelings}
              childLimit={childLimit}
              limitBehavior={limitBehavior}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};