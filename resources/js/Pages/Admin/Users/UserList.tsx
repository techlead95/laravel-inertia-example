import { User } from '@/types';
import { includesIgnoreCase } from '@/utils';
import { Head, Link, router } from '@inertiajs/react';
import {
  ActionIcon,
  Button,
  Group,
  Stack,
  Switch,
  TextInput,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { Search } from '@mui/icons-material';
import { Delete, Edit } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';

interface Props {
  users: User[];
}

export default function AdminHome({ users }: Props) {
  const [filter, setFilter] = useState('');

  const handleDelete = (user: User) => {
    modals.openConfirmModal({
      title: 'Are you sure to delete this user?',
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      centered: true,
      confirmProps: { color: 'red' },
      onConfirm() {
        router.delete(route('admin.users.destroy', { id: user.id }));
      },
    });
  };

  return (
    <>
      <Head title="Admin Home" />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start">
        <Stack style={{ flex: 3 }} h="100%">
          <TextInput
            placeholder="Search"
            w={280}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            rightSection={<Search />}
          />
          <DataTable
            style={{ flex: 1 }}
            striped
            withTableBorder
            borderRadius="md"
            columns={[
              { accessor: 'id', title: 'ID' },
              { accessor: 'email', title: 'Email' },
              { accessor: 'name', title: 'Name' },
              { accessor: 'ship_to_account', title: 'Ship to Account' },
              {
                accessor: 'actions',
                title: '',
                textAlign: 'right',
                render(user) {
                  return (
                    <Group justify="flex-end">
                      <Link href={route('admin.users.edit', { id: user.id })}>
                        <ActionIcon variant="subtle">
                          <Edit />
                        </ActionIcon>
                      </Link>
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        onClick={() => handleDelete(user)}
                      >
                        <Delete />
                      </ActionIcon>
                    </Group>
                  );
                },
              },
            ]}
            records={users.filter((user) =>
              includesIgnoreCase(user.name, filter),
            )}
          />
        </Stack>
        <Stack style={{ flex: 1 }} gap="xs" mt={52}>
          <Switch defaultChecked label="Portal Active" disabled />
          <Link href="/admin/ship-to-account-maintenance">
            <Button variant="outline" w="100%">
              Ship to Account Maintenance
            </Button>
          </Link>
          <Link href="/admin/modules">
            <Button variant="outline" w="100%">
              Modules
            </Button>
          </Link>
          <Button variant="outline" disabled>
            Default Settings
          </Button>
        </Stack>
      </Group>
    </>
  );
}