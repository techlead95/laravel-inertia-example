import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { ShipTo, User } from '@/types';
import { Button, Grid, Group, TextInput, Stack, Switch, Select } from '@mantine/core';
import { Head, Link, router } from '@inertiajs/react';
import { uniqBy } from "lodash";

export default function CreateUser() {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps, post } = useBaseForm<User>();


  //var shipToList = shipTos.map((shipTo) => ({ value: shipTo.st_account, label: shipTo.st_account + ' ' + shipTo.st_name }));

  //var filteredShipTo = uniqBy(shipToList, 'value');

  //var filteredShipTo = [];

  /*
  var shipToList = shipTos.map((shipTo) => (shipTo.st_account));
  var filteredShipTo = [...new Set(shipToList)];
  */
  //console.log(filteredShipTo);

  return (
    <>
      <PageTitle title="Create User" showBackButton />
      {/*</><form
        onSubmit={(e) => {
          e.preventDefault();
          put(route('admin.users.update', { id: user.id }));
        }}
      >*/ }


      <Stack
        component="form"
        gap="xl"
        onSubmit={(e) => {
          e.preventDefault();
          post(route('admin.users.store'));
        }}
      >
        <Group>
          <Stack>
            <TextInput label="Email Address" {...getFieldProps('email')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="First Name" {...getFieldProps('first_name')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="Last Name" {...getFieldProps('last_name')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="Salesforce Contact ID" {...getFieldProps('salesforce_id')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput
              label="Business Name"
              {...getFieldProps('business_name')}
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput label="PO Box" {...getFieldProps('po_box')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="Address 1" {...getFieldProps('address1')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="Address 2" {...getFieldProps('address2')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="City" {...getFieldProps('city')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="State" {...getFieldProps('state')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="Zip" {...getFieldProps('zip')}
              styles={getFieldStyles({ horizontal: true })} />
            <TextInput label="Country" {...getFieldProps('country')}
              styles={getFieldStyles({ horizontal: true })} />
          </Stack>

        </Group >
        <Group mt="xl">
          <Button miw={120} type="submit">
            Save
          </Button>
          <Button miw={120} variant="default" onClick={() => history.back()}>
            Cancel
          </Button>
        </Group>
      </Stack >
    </>
  );
}
