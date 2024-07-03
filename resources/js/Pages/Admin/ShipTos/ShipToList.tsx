import PageTitle from '@/Components/PageTitle';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { ShipTo, User } from '@/types';
import { includesIgnoreCase } from '@/utils';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';
import useBaseForm from '@/Hooks/useBaseForm';
import EditDeleteActions from '@/Components/EditDeleteActions';
import { router } from '@inertiajs/react';



interface Props {
  shiptos: ShipTo[];
  user: User;
}

export default function ShipToAccountMaintenance({ shiptos, user }: Props) {
  const [filter, setFilter] = useState('');
  const getFieldStyles = useGetFieldStyles();
  const { data, getFieldProps, post } = useBaseForm<ShipTo>()

  //console.log(shiptos);
  return (
    <>
      <PageTitle title={"Ship To Account Maintenance for " + user.first_name + ' ' + user.last_name} />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start" mt="xl">
        <Stack h="100%" style={{ flex: 1 }}>
          <Group>
            <TextInput
              placeholder="Search by Ship to #"
              w={280}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <Button miw={120} variant="outline" leftSection={<Search />}>
              Search
            </Button>
          </Group>
          <DataTable
            withTableBorder
            columns={[
              { accessor: 'id', title: 'ID' },
              { accessor: 'st_account', title: 'Ship To #' },
              { accessor: 'st_name', title: 'Ship To Name' },
              { accessor: 'st_order_by', title: 'Order By Account' },
              { accessor: 'st_bill_to', title: 'Bill To Account' },
              {
                accessor: 'actions',
                title: '',
                textAlign: 'right',
                render(shipto) {
                  return (
                    <EditDeleteActions
                      editUrl={route('admin.users.shiptos.edit', [user.id, { id: shipto.id }])}
                      deleteConfirmMessage="Are you sure to delete this misc?"
                      onDelete={() =>
                        router.delete(route('admin.users.shiptos.destroy', [user.id, { id: shipto.id }]))
                      }
                    />
                  );
                },
              },
            ]}
            records={shiptos}
          />
        </Stack>
        <Stack
          component="form"
          gap="xl"
          onSubmit={(e) => {
            e.preventDefault();
            post(route('admin.users.shiptos.store', user.id));
          }}
        >
          <Group ml={166}>
            <Button miw={120} type="submit">Add</Button>
          </Group>
          <TextInput
            label="Ship To Account"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_account')}
          />
          <TextInput
            label="Ship To Name"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_name')}
          />
          <TextInput
            label="Order By Account"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_order_by')}
          />
          <TextInput
            label="Order By Account Name"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_order_by_name')}
          />
          <TextInput
            label="Bill To Account"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_bill_to')}
          />
          <TextInput
            label="Bill To Account Name"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_bill_to_name')}
          />
        </Stack>
      </Group>
    </>
  );
}
