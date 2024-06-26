import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { Paginated, User } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, Stack, Switch, TextInput } from '@mantine/core';
import { produce } from 'immer';
import { useState } from 'react';

import ApproveUserCheckbox from './ApproveUserCheckbox';

interface Props {
  users: Paginated<User>;
  search: string;
}

export default function AdminHome({ search, ...props }: Props) {
  const [users, setUsers] = useState(props.users.data);
  //console.log(users);

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
              { accessor: 'name', title: 'Full Name' },
              { accessor: 'ship_to_account', title: 'Default Ship to Account' },
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
          <BasePagination paginatedData={props.users} />
        </Stack>
      </Group>
    </>
  );
}
