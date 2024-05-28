import BaseDataTable from '@/Components/BaseDataTable';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { User } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, Stack, Switch, TextInput } from '@mantine/core';
import { produce } from 'immer';
import { useState } from 'react';

import ApproveUserCheckbox from './ApproveUserCheckbox';

interface Props {
  users: User[];
  search: string;
}

export default function AdminHome({ search, ...props }: Props) {
  const [users, setUsers] = useState(props.users);

  return (
    <>
      <Head title="Admin Home" />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start">
        <Stack style={{ flex: 3 }} h="100%" gap={0}>
          <MultiSearchForm
            initialValues={{ search }}
            onSearch={(newValues) => {
              router.get(route('admin.users.index', newValues ?? {}));
            }}
            mb="lg"
          >
            {({ getFieldProps }) => (
              <TextInput placeholder="Search" {...getFieldProps('search')} />
            )}
          </MultiSearchForm>
          <BaseDataTable
            style={{ flex: 1 }}
            striped
            withTableBorder
            borderRadius="md"
            columns={[
              { accessor: 'id', title: 'ID' },
              { accessor: 'email', title: 'Email' },
              { accessor: 'last_name', title: 'Last Name' },
              { accessor: 'first_name', title: 'First Name' },
              { accessor: 'ship_to_account', title: 'Ship to Account' },
              {
                accessor: 'approved',
                title: 'Approved',
                render(user) {
                  return (
                    <ApproveUserCheckbox
                      userId={user.id}
                      approved={user.approved ?? false}
                      onApprovedChange={(newApproved) => {
                        setUsers(
                          produce((draft) => {
                            draft.forEach((draftUser) => {
                              if (draftUser.id === user.id) {
                                draftUser.approved = newApproved;
                              }
                            });
                          }),
                        );
                      }}
                    />
                  );
                },
              },
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
        <Stack style={{ flex: 1 }} gap="xs" mt={56}>
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
