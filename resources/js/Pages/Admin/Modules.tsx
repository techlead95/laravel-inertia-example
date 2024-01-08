import PageTitle from '@/Components/PageTitle';
import { Button, Group, Stack, Switch } from '@mantine/core';

export default function Modules() {
  return (
    <>
      <PageTitle title="Modules" backUrl="/admin" />
      <Group mt="xl">
        <Stack miw={300}>
          <Switch defaultChecked label="New RX Orders" />
          <Switch label="New Stock Orders" />
          <Switch label="New Repair Orders" />
          <Switch label="Private Pay" />
          <Switch label="Out of Office" />
          <Switch label="Optic 2 Messaging" />
          <Switch label="Notifications" />
          <Switch label="Reports" />
          <Switch label="Dispensing Details" />
        </Stack>
        <Stack>
          <Switch label="Future 1" />
          <Switch label="Future 2" />
          <Switch label="Future 3" />
          <Switch label="Future 4" />
          <Switch label="Future 5" />
          <Switch label="Future 6" />
          <Switch label="Future 7" />
          <Switch label="Future 8" />
          <Switch label="Future 9" />
        </Stack>
      </Group>
      <Group mt="xl">
        <Button miw={120}>Save Changes</Button>
      </Group>
    </>
  );
}
