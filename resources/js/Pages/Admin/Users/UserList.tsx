import BaseDataTable from '@/Components/BaseDataTable';
import EditDeleteActions from '@/Components/EditDeleteActions';
import SearchForm from '@/Components/SearchForm';
import { User } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { ActionIcon, Button, Group, Stack, Switch } from '@mantine/core';
import { modals, openConfirmModal } from '@mantine/modals';
import { Delete, Edit } from '@mui/icons-material';

interface Props {
  users: User[];
  search: string;
}

export default function AdminHome({ users, search }: Props) {
  return (
    <>
      <Head title="Admin Home" />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start">
        <Stack style={{ flex: 3 }} h="100%">
          <SearchForm
            initialValue={search}
            onSearch={(newSearch) => {
              router.get(route('admin.users.index', { search: newSearch }));
            }}
          />
          <BaseDataTable
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
                    <EditDeleteActions
                      editUrl={route('admin.users.edit', { id: user.id })}
                      deleteConfirmMessage="Are you sure to delete this user?"
                      onDelete={() =>
                        router.delete(
                          route('admin.users.destroy', { id: user.id }),
                        )
                      }
                    />
                  );
                },
              },
            ]}
            records={users}
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
