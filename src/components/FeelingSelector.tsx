import type { Feeling as FeelingType } from '../types';
import { Feeling } from './Feeling';

type LimitBehavior = 'hide' | 'disable';

interface FeelingSelectorProps {
  selectedFeelings: FeelingType[];
  onChange: (selected: FeelingType[]) => void;
  allFeelings: FeelingType[];
  maxRoots?: number;
  childLimit?: number;
  limitBehavior?: LimitBehavior;
}

export const FeelingSelector = ({
  selectedFeelings,
  onChange,
  allFeelings,
  maxRoots = 2,
  childLimit = 1,
  limitBehavior = 'hide',
}: FeelingSelectorProps) => {
  const roots = allFeelings.filter(f => f.parent_id === null);
  const selectedRoots = selectedFeelings.filter(f => f.parent_id === null);
  const canSelectMoreRoots = selectedRoots.length < maxRoots;

  // Para 'hide': mostrar solo raíces seleccionadas o seleccionables.
  // Para 'disable': mostrar todas, pero deshabilitar las no seleccionables.
  const visibleRoots = roots.filter(root => {
    const isSelected = selectedRoots.some(sr => sr.id === root.id);
    if (isSelected) return true;
    if (limitBehavior === 'hide') return canSelectMoreRoots;
    return true; // en modo 'disable' se muestran todas
  });

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
        How do you feel? (max {maxRoots} roots, {childLimit} child per node)
        {limitBehavior === 'disable' && (
          <span style={{ fontSize: '0.75rem', marginLeft: '0.5rem', fontWeight: 'normal' }}>
            (disabled when limit reached)
          </span>
        )}
      </label>
      <div>
        {visibleRoots.map(root => {
          const handleRootToggle = (newSelected: FeelingType[]) => {
            // Verificar que no se exceda maxRoots
            const newRootCount = newSelected.filter(f => f.parent_id === null).length;
            if (newRootCount > maxRoots) return; // silenciosamente ignorar
            onChange(newSelected);
          };
          return (
            <Feeling
              key={root.id}
              feeling={root}
              selectedFeelings={selectedFeelings}
              onChange={handleRootToggle}
              allFeelings={allFeelings}
              childLimit={childLimit}
              limitBehavior={limitBehavior}
              level={0}
            />
          );
        })}
      </div>
      {selectedRoots.length > 0 && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#2e7d32' }}>
          Selected roots: {selectedRoots.map(r => r.label).join(', ')}
        </div>
      )}
      {!canSelectMoreRoots && selectedRoots.length === maxRoots && limitBehavior === 'hide' && (
        <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>
          (Maximum {maxRoots} roots reached)
        </div>
      )}
    </div>
  );
};