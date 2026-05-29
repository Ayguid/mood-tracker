export interface Feeling {
  id: string | number;
  parent_id: string | number | null;
  label: string;
  emoji: string;
  color?: string;
}

export interface Memory {
  id: string;
  date: Date;
  text: string;
  feelings: Feeling[];
  tags: string[];
}