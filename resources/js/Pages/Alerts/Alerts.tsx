import PageTitle from '@/Components/PageTitle';
import { Button, Group, Stack } from '@mantine/core';
import { DateTime } from 'luxon';

import Alert from './Alert';

const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.';

export default function Alerts() {
  return (
    <>
      <Group align="center" justify="space-between">
        <PageTitle title="Alerts and System Messages" />
        <Button variant="outline">Archive</Button>
      </Group>
      <Stack pt={48} gap="xl">
        <Alert
          date={DateTime.fromISO('2023-09-19T08:00')}
          title="System Update Scheduled for 9-23-2023"
          body={loremText}
        />
        <Alert
          date={DateTime.fromISO('2023-09-11T11:00')}
          title="System Maintenance 9-11-2023 - COMPLETE"
          body={loremText}
        />
        <Alert
          date={DateTime.fromISO('2023-09-19T08:00')}
          title="System Maintenance 9-11-2023 - Begin"
          body={loremText}
        />
        <Alert
          date={DateTime.fromISO('2023-09-01')}
          title="System Maintenance Scheduled 9-11-2023"
          body={loremText}
        />
      </Stack>
    </>
  );
}
