import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface Props<T> {
  item?: Partial<T>;
  onUpdate: (item: Partial<T>) => void;
  onDebouncedUpdate: (item: Partial<T>) => void;
  disabled?: boolean;
}

export default function useEditableTableRow<T>({
  item,
  onUpdate,
  onDebouncedUpdate,
  disabled,
}: Props<T>) {
  const debouncedUpdate = useDebouncedCallback((updated: Partial<T>) => {
    onDebouncedUpdate(updated);
  }, 500);

  const getFieldProps = (field: keyof T) => {
    return {
      value: String(item?.[field] ?? ''),
      onChange(e: string | null | ChangeEvent<HTMLInputElement>) {
        let newValue = (() => {
          if (e === null) {
            return '';
          }

          return typeof e === 'string' ? e : e.target.value;
        })();

        const updated = { ...item, [field]: newValue };

        onUpdate(updated);
        debouncedUpdate(updated);
      },
      disabled,
    };
  };

  return { getFieldProps };
}
