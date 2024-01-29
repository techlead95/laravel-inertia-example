import { CSSProperties } from 'react';

export const inputHorizontalStyles: Record<string, CSSProperties> = {
  root: { display: 'flex', gap: 16 },
  label: { width: 150, fontWeight: 'bold', textAlign: 'right', paddingTop: 7 },
  wrapper: { flex: 1 },
};

export const includesIgnoreCase = (str: string, search: string) =>
  str.toLowerCase().includes(search.toLowerCase());
