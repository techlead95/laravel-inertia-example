import BaseDataTable from '@/Components/BaseDataTable';
import { Group, Stack, Text } from '@mantine/core';

export default function LimitationsPanel() {
  return (
    <Group>
      <Stack flex={1}>
        <Text fw="bold" size="lg">
          Lens Material Limitations
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'lensMaterial', title: 'Lens Material' },
            { accessor: 'allowed', title: 'Allowed' },
          ]}
          records={[]}
        />
      </Stack>

      <Stack flex={1}>
        <Text fw="bold" size="lg">
          Lens Style Limitations
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'lensStyle', title: 'Lens Style' },
            { accessor: 'allowed', title: 'Allowed' },
            { accessor: 'minimumPd', title: 'Minimum PD' },
          ]}
          records={[]}
        />
      </Stack>

      <Stack flex={1}>
        <Text fw="bold" size="lg">
          Offload Availability
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'vendor', title: 'Vendor' },
            { accessor: 'allowed', title: 'Allowed' },
            { accessor: 'automaticOffload', title: 'Automatic Offload' },
          ]}
          records={[]}
        />
      </Stack>
    </Group>
  );
}
