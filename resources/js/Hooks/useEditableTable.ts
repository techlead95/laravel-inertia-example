import { openDeleteConfirmModal, showErrorNotification } from '@/utils';
import axios from 'axios';
import { useState } from 'react';

interface Props<T> {
  initialItems: T[];
  getDestoryUrl: (id: number) => string;
  getUpdateUrl: (id: number) => string;
  storeUrl: string;
}

export default function useEditableTable<T extends { id: number }>({
  initialItems,
  getDestoryUrl,
  getUpdateUrl,
  storeUrl,
}: Props<T>) {
  const [items, setItems] = useState<Partial<T>[]>(
    !storeUrl ? initialItems : [...initialItems, {}],
  );

  const handleDelete = (index: number) => {
    const deletingId = items[index].id!;

    openDeleteConfirmModal({
      title: 'Are you sure to delete this add-on?',
      onConfirm() {
        axios
          .delete(getDestoryUrl(deletingId))
          .then(() => {
            setItems(items.filter((variation) => variation.id !== deletingId));
          })
          .catch((r) => {
            showErrorNotification(r.data.error);
          });
      },
    });
  };

  const handleDebouncedUpdate = (updated: Partial<T>) => {
    if (!updated.id) {
      axios.post(storeUrl, updated).then((res) => {
        setItems([...items.slice(0, -1), res.data, {}]);
      });
    } else {
      axios.put(getUpdateUrl(updated.id), updated);
    }
  };

  const getRowKey = (item: Partial<T>, index: number) => {
    return item.id ?? `index-${index}`;
  };

  return {
    items,
    setItems,
    handleDelete,
    handleDebouncedUpdate,
    getRowKey,
  };
}
