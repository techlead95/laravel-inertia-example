import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { User } from '@/types';
import { Button, Grid, Group, TextInput } from '@mantine/core';

interface Props {
  user: User;
}

export default function UserEdit({ user }: Props) {
  const { getFieldProps, put } = useBaseForm(user);

  return (
    <>
      <PageTitle title="Edit User" showBackButton />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          put(route('admin.users.update', { id: user.id }));
        }}
      >
        <Grid mt="xl">
          <Grid.Col span={4}>
            <TextInput label="Email Address" {...getFieldProps('email')} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="First Name" {...getFieldProps('first_name')} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="Last Name" {...getFieldProps('last_name')} />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Ship To Account"
              {...getFieldProps('ship_to_account')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput
              label="Business Name"
              {...getFieldProps('business_name')}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <TextInput label="PO Box" {...getFieldProps('po_box')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Address 1" {...getFieldProps('address1')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Address 2" {...getFieldProps('address2')} />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="City" {...getFieldProps('city')} />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="State" {...getFieldProps('state')} />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="Zip" {...getFieldProps('zip')} />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput label="Country" {...getFieldProps('country')} />
          </Grid.Col>
        </Grid>
        <Group mt="xl">
          <Button miw={120} type="submit">
            Save
          </Button>
          <Button miw={120} variant="default" onClick={() => history.back()}>
            Cancel
          </Button>
        </Group>
      </form>
    </>
  );
}
