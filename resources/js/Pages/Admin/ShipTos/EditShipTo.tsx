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
  shipTo: ShipTo;
  user: User;
}

export default function ShipToEdit({ shipTo, user }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { data, getFieldProps, put } = useBaseForm(shipTo);

  console.log(shipTo);
  return (
    <>
      <PageTitle title={"Ship To Account for " + user.first_name + ' ' + user.last_name} />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start" mt="xl">
        <Stack
          component="form"
          gap="xl"
          onSubmit={(e) => {
            e.preventDefault();
            put(route('admin.users.shiptos.update', [user.id, { id: data.id }]));
          }}
        >
          <Group ml={166}>
            <Button miw={120} type="submit">Update</Button>
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
            label="Order By Account Name"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('st_order_by_name')}
          />
          <TextInput
            label="Bill to Account"
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
