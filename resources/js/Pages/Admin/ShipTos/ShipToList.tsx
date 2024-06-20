import PageTitle from '@/Components/PageTitle';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { ShipTo, User } from '@/types';
import { includesIgnoreCase } from '@/utils';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';
import useBaseForm from '@/Hooks/useBaseForm';



interface Props {
  shiptos: ShipTo[];
  user: User;
}

export default function ShipToAccountMaintenance({ shiptos, user }: Props) {
  const [filter, setFilter] = useState('');
  const getFieldStyles = useGetFieldStyles();
  const { data, getFieldProps, post } = useBaseForm<ShipTo>()

  console.log(shiptos);
  return (
    <>
      <PageTitle title="Ship To Account Maintenance" />
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
            <Button miw={120} type="submit">Save</Button>
          </Group>
          <TextInput
            label="Ship to Account"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_account')}
          />
          <TextInput
            label="Ship to Name"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_name')}
          />
          <TextInput
            label="Order By Account"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_order_by')}
          />
          <TextInput
            label="Bill to Account"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_bill_to')}
          />
        </Stack>
      </Group>
    </>
  );
}
