import BaseDataTable from '@/Components/BaseDataTable';
import SearchForm from '@/Components/SearchForm';
import { User } from '@/types';
import { openDeleteConfirmModal } from '@/utils';
import { Head, Link, router } from '@inertiajs/react';
import { ActionIcon, Button, Group, Stack, Switch } from '@mantine/core';
import { modals, openConfirmModal } from '@mantine/modals';
import { Delete, Edit } from '@mui/icons-material';

interface Props {
  editUrl: string;
  deleteConfirmMessage?: string;
  onDelete: () => void;
}

export default function EditDeleteActions({
  editUrl,
  deleteConfirmMessage = 'Are you sure to remove this item?',
  onDelete,
}: Props) {
  return (
    <Group justify="flex-end">
      <Link href={editUrl}>
        <ActionIcon variant="subtle">
          <Edit />
        </ActionIcon>
      </Link>
      <ActionIcon
        variant="subtle"
        color="red"
        onClick={() => {
          openDeleteConfirmModal({
            title: deleteConfirmMessage,
            onConfirm: onDelete,
          });
        }}
      >
        <Delete />
      </ActionIcon>
    </Group>
  );
}