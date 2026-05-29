import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Tag } from '../types';

interface TagStore {
  tags: Tag[];
  addTag: (label: string) => void;
  editTag: (id: string, newLabel: string) => void;
  deleteTag: (id: string) => void;
}

export const useTagStore = create<TagStore>()(
  persist(
    (set) => ({
      tags: [],
      addTag: (label) => {
        const trimmed = label.trim();
        if (!trimmed) return;
        const newTag = { id: crypto.randomUUID(), label: trimmed };
        set((state) => ({ tags: [...state.tags, newTag] }));
      },
      editTag: (id, newLabel) => {
        const trimmed = newLabel.trim();
        if (!trimmed) return;
        set((state) => ({
          tags: state.tags.map((t) => (t.id === id ? { ...t, label: trimmed } : t)),
        }));
      },
      deleteTag: (id) => {
        set((state) => ({ tags: state.tags.filter((t) => t.id !== id) }));
      },
    }),
    {
      name: 'tags-storage', // clave en localStorage
    }
  )
);