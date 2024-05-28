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
  const [addingNew, setAddingNew] = useState(false);

  const handleDelete = (index: number) => {
    const deletingId = items[index].id!;

    openDeleteConfirmModal({
      title: 'Are you sure to delete this item?',
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
      setAddingNew(true);
      axios
        .post(storeUrl, updated)
        .then((res) => {
          setItems([...items.slice(0, -1), res.data, {}]);
        })
        .finally(() => {
          setAddingNew(false);
        });
    } else {
      axios.put(getUpdateUrl(updated.id), updated);
    }
  };

  const getRowKey = (item: Partial<T>, index: number) => {
    return item.id ?? `index-${index}`;
  };

  const getRowDisabled = (item: Partial<T>) => {
    return !item.id && addingNew;
  };

  return {
    items,
    setItems,
    handleDelete,
    handleDebouncedUpdate,
    getRowDisabled,
    getRowKey,
  };
}
