import useFieldStyles from '@/Hooks/useFieldStyles';
import { Frame, FrameEdge, FrameMaterial } from '@/types';
import {
  Group,
  Select,
  Stack,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DataTable } from 'mantine-datatable';

interface Props {
  frames: Frame[];
  edges: FrameEdge[];
  materials: FrameMaterial[];
}

export default function FramePanel({ frames, edges, materials }: Props) {
  const fieldStyles = useFieldStyles({ horizontal: true });

  return (
    <>
      <DataTable
        columns={[
          { accessor: 'fr_eyesize', title: 'Eye' },
          { accessor: 'fr_bridge', title: 'Bridge' },
          { accessor: 'fr_temple_type', title: 'Temple Type' },
          { accessor: 'fr_temple_size', title: 'Temple Size' },
          { accessor: 'fr_frame_color', title: 'Color' },
          { accessor: 'fr_A', title: 'A' },
          { accessor: 'fr_B', title: 'B' },
          { accessor: 'fr_ED', title: 'ED' },
          { accessor: 'fr_DBL', title: 'DBL' },
          {
            accessor: 'fr_non_dig_default_seg',
            title: 'Non Digital Default Seg',
          },
          {
            accessor: 'fr_dig_default_seg',
            title: 'Digital Default Seg',
          },
        ]}
        records={frames}
      />
      <Group component="form" align="flex-start">
        <Stack gap="xs">
          <Select
            label="Edge"
            styles={fieldStyles}
            data={edges.map((edge) => edge.fe_edge)}
          />
          <Select
            label="Material"
            styles={fieldStyles}
            data={materials.map((material) => material.fm_material)}
          />
          <TextInput label="Min Edge" styles={fieldStyles} />
          <TextInput label="Base Curve Min" styles={fieldStyles} />
          <TextInput label="Base Curve Max" styles={fieldStyles} />
          <TextInput label="Minimum Near PD" styles={fieldStyles} />
          <TextInput label="Edge" styles={fieldStyles} />
          <Switch defaultChecked label="Non-Conductive" ml={166} />
          <Switch defaultChecked label="Tight Fit" ml={166} />
          <Switch defaultChecked label="Wrap" ml={166} />
        </Stack>
        <Textarea label="Notes" styles={fieldStyles} rows={4} miw={580} />
      </Group>
    </>
  );
}
