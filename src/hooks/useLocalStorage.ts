import { useState, useEffect } from 'react';
import type { Memory } from '../types';

const STORAGE_KEY = 'memories';

export function useLocalStorage() {
  const [memories, setMemories] = useState<Memory[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convertir fechas de string a Date
      return parsed.map((m: any) => ({ ...m, date: new Date(m.date) }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  }, [memories]);

  return { memories, setMemories };
}