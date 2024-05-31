import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

import notificationClasses from '../css/notification.module.css';

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
  notifications.show({
    message: error,
    color: 'red',
    classNames: notificationClasses,
  });
};
