import { useState, useEffect } from 'react';
import type { Tag } from '../types';

const STORAGE_KEY = 'tags';

export function useLocalStorageTags() {
  const [tags, setTags] = useState<Tag[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return []; // valor inicial vacío
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tags));
  }, [tags]);

  return { tags, setTags };
}