import { CSSProperties } from 'react';

export const inputHorizontalStyles: Record<string, CSSProperties> = {
  root: { display: 'flex', gap: 16 },
  label: { width: 150, fontWeight: 'bold', textAlign: 'right', paddingTop: 7 },
  wrapper: { flex: 1 },
};

export const inputBlueLabel: Record<string, CSSProperties> = {
  label: { fontWeight: 'bold', color: "rgba(0, 84, 194, 1)" },
};

export const inputBlueLabelCentered: Record<string, CSSProperties> = {
  root: {margin:-10, display: 'flex'},
  label: { fontWeight: 'bold', color: "rgba(0, 84, 194, 1)", textAlign: 'right'},
};

export const inputNoMargin: Record<string, CSSProperties> = {
  root: {margin:-10,},
};

export const includesIgnoreCase = (str: string, search: string) =>
  (str ?? '').toLowerCase().includes(search.toLowerCase());

export const getFieldProps = <T>(
  key: keyof T,
  data: T,
  setData: <K extends keyof T>(key: K, value: T[K]) => void,
  errors: Partial<Record<keyof T, string>>,
) => {
  return {
    value: data[key] as string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(key, e.target.value as any);
    },
    error: errors[key],
  };
};
