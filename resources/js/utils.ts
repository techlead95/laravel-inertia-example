import { modals } from '@mantine/modals';

export const includesIgnoreCase = (str: string, search: string) =>
  (str ?? '').toLowerCase().includes(search.toLowerCase());

export const openDeleteConfirmModal = (
  payload: Parameters<typeof modals.openConfirmModal>[0],
) => {
  modals.openConfirmModal({
    labels: { confirm: 'Delete', cancel: 'Cancel' },
    centered: true,
    confirmProps: { color: 'red' },
    ...payload,
  });
};

export const showErrorNotification = (error: string) => {
  alert(error);
};
