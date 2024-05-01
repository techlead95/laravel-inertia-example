import BaseDataTable from '@/Components/BaseDataTable';
import { LensStyleLimitation } from '@/types';
import { Stack, Text } from '@mantine/core';

interface Props {
  lensStyleLimitations: LensStyleLimitation[];
}

export default function LensStyleLimitations({ lensStyleLimitations }: Props) {
  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Lens Style Limitations
      </Text>
      <BaseDataTable
        columns={[
          { accessor: 'ls_lenstyl_lens_style', title: 'Lens Style' },
          { accessor: 'pivot.allowed', title: 'Allowed' },
          { accessor: 'pivot.minimum_pd', title: 'Minimum PD' },
        ]}
        records={lensStyleLimitations}
      />
    </Stack>
  );
}
