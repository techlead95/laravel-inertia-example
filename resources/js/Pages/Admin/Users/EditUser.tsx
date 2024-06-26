import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { ShipTo, User } from '@/types';
import { Button, Grid, Group, TextInput, Stack, Switch, Select } from '@mantine/core';
import { Head, Link, router } from '@inertiajs/react';
import { uniqBy } from "lodash";

interface Props {
  user: User;
  shipTos: ShipTo[];
}

export default function UserEdit({ user, shipTos }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps, put } = useBaseForm(user);


  var shipToList = shipTos.map((shipTo) => ({ value: shipTo.st_account, label: shipTo.st_account + ' ' + shipTo.st_name }));

  var filteredShipTo = uniqBy(shipToList, 'value');

  //var filteredShipTo = [];

  /*
  var shipToList = shipTos.map((shipTo) => (shipTo.st_account));
  var filteredShipTo = [...new Set(shipToList)];
  */
  console.log(filteredShipTo);

  return (
    <>
      <PageTitle title="Edit User" showBackButton />
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
          put(route('admin.users.update', { id: user.id }));
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
            <Select
              label="Default Ship To Account"
              //data={shipTos.map((shipTo) => "value: '" + shipTo.id + "', label: '" + shipTo.st_account + " " + shipTo.st_name + "'")}
              //data={shipTos.map((shipTo) => ({ value: shipTo.id.toString(), label: shipTo.st_account + ' ' + shipTo.st_name }))}
              //data={shipTos.map((shipTo) => ({ value: shipTo.st_account, label: shipTo.st_account + ' ' + shipTo.st_name }))}
              data={filteredShipTo}
              //data={shipToList}
              {...getFieldProps('ship_to_account')}
              styles={getFieldStyles({ horizontal: true })}
            />
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

          <Stack>
            <Switch defaultChecked label="Portal Active" disabled />
            <Link href={route('admin.users.shiptos.index', user.id)}>
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
