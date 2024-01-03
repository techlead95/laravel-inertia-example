import { CSSProperties } from 'react';

export const inputHorizontalStyles: Record<string, CSSProperties> = {
  root: { display: 'flex', alignItems: 'center', gap: 16 },
  label: { width: 150, fontWeight: 'bold', textAlign: 'right' },
  wrapper: { flex: 1 },
};
