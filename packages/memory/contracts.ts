export interface MemoryEntry {
  key: string;
  value: string;
  tags?: string[];
  updatedAtIso: string;
}

export interface MemoryStore {
  put(entry: MemoryEntry): Promise<void>;
  get(key: string): Promise<MemoryEntry | null>;
}
