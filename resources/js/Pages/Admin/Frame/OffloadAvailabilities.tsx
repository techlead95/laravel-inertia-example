import BaseDataTable from '@/Components/BaseDataTable';
import { FrameOffloadAvailability } from '@/types';
import { Stack, Text } from '@mantine/core';

interface Props {
  offloadAvailabilities: FrameOffloadAvailability[];
}

export default function OffloadAvailabilities({
  offloadAvailabilities,
}: Props) {
  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Offload Availability
      </Text>
      <BaseDataTable
        columns={[
          { accessor: 'fo_vendor', title: 'Vendor' },
          { accessor: 'fo_vendor_allowed', title: 'Allowed' },
          { accessor: 'fo_auto_offload', title: 'Automatic Offload' },
        ]}
        records={offloadAvailabilities}
      />
    </Stack>
  );
}
