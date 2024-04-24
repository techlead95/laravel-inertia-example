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
    <Group>
      <Stack flex={1}>
        <Text fw="bold" size="lg">
          Lens Material Limitations
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'fl_material', title: 'Lens Material' },
            { accessor: 'fl_material_allowed', title: 'Allowed' },
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
            { accessor: 'fl_lens_style', title: 'Lens Style' },
            { accessor: 'fl_lens_style_allowed', title: 'Allowed' },
            { accessor: 'fl_min_pd', title: 'Minimum PD' },
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
            { accessor: 'fl_vendor', title: 'Vendor' },
            { accessor: 'fl_vendor_allowed', title: 'Allowed' },
            { accessor: 'fl_auto_offload', title: 'Automatic Offload' },
          ]}
          records={offloadAvailabilities}
        />
      </Stack>
    </Group>
  );
}
