import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Memory } from '../types';

interface MemoryStore {
  memories: Memory[];
  addMemory: (memory: Memory) => void;
  updateMemory: (id: string, updatedMemory: Memory) => void;
  deleteMemory: (id: string) => void;
}

export const useMemoryStore = create<MemoryStore>()(
  persist(
    (set) => ({
      memories: [],
      addMemory: (memory) =>
        set((state) => ({ memories: [...state.memories, memory] })),
      updateMemory: (id, updatedMemory) =>
        set((state) => ({
          memories: state.memories.map((m) => (m.id === id ? updatedMemory : m)),
        })),
      deleteMemory: (id) =>
        set((state) => ({
          memories: state.memories.filter((m) => m.id !== id),
        })),
    }),
    {
      name: 'memories-storage',
      // Esto se ejecuta antes de hidratar el estado desde localStorage
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.memories = state.memories.map(m => ({
            ...m,
            date: new Date(m.date)
          }));
        }
      },
    }
  )
);