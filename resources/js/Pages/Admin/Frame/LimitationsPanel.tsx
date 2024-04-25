import BaseDataTable from '@/Components/BaseDataTable';
import {
  FrameOffloadAvailability,
  LensMaterialLimitation,
  LensStyleLimitation,
} from '@/types';
import { Group, Stack, Text } from '@mantine/core';

interface Props {
  lensMaterialLimitations: LensMaterialLimitation[];
  lensStyleLimitations: LensStyleLimitation[];
  offloadAvailabilities: FrameOffloadAvailability[];
}

export default function LimitationsPanel({
  lensMaterialLimitations,
  lensStyleLimitations,
  offloadAvailabilities,
}: Props) {
  return (
    <Group align="flex-start">
      <Stack flex={1}>
        <Text fw="bold" size="lg">
          Lens Material Limitations
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'lm_lens_material', title: 'Lens Material' },
            { accessor: 'pivot.allowed', title: 'Allowed' },
          ]}
          records={lensMaterialLimitations}
        />
      </Stack>

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
    </Group>
  );
}
