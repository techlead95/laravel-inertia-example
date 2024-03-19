import BaseDataTable from '@/Components/BaseDataTable';
import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { FrameEdge, FrameMaterial, FrameType, FrameVariation } from '@/types';
import {
  Group,
  Select,
  Stack,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';

interface Props {
  frameVariations: FrameVariation[];
  edges: FrameEdge[];
  materials: FrameMaterial[];
  form: ReturnType<typeof useBaseForm<Partial<FrameType>>>;
}

export default function FramePanel({
  frameVariations,
  edges,
  materials,
  form,
}: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps } = form;

  return (
    <>
      <BaseDataTable
        columns={[
          { accessor: 'fv_eyesize', title: 'Eye' },
          { accessor: 'fv_bridge', title: 'Bridge' },
          { accessor: 'fv_temple_type', title: 'Temple Type' },
          { accessor: 'fv_temple_size', title: 'Temple Size' },
          { accessor: 'fv_frame_color', title: 'Color' },
          { accessor: 'fv_A', title: 'A' },
          { accessor: 'fv_B', title: 'B' },
          { accessor: 'fv_ED', title: 'ED' },
          { accessor: 'fv_DBL', title: 'DBL' },
          {
            accessor: 'fv_non_dig_default_seg',
            title: 'Non Digital Default Seg',
          },
          {
            accessor: 'fv_dig_default_seg',
            title: 'Digital Default Seg',
          },
        ]}
        records={frameVariations}
      />
      <Group align="flex-start">
        <Stack gap="xs">
          <Select
            label="Edge"
            styles={getFieldStyles({ horizontal: true })}
            data={edges.map((edge) => edge.fe_edge)}
            {...getFieldProps('fr_edge')}
          />
          <Select
            label="Material"
            styles={getFieldStyles({ horizontal: true })}
            data={materials.map((material) => material.fm_material)}
            {...getFieldProps('fr_material')}
          />
          <TextInput
            label="Min Edge"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('fr_min_edge')}
          />
          <TextInput
            label="Base Curve Min"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('fr_base_curve_min')}
          />
          <TextInput
            label="Base Curve Max"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('fr_base_curve_max')}
          />
          <TextInput
            label="Minimum Near PD"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('fr_min_near_pd')}
          />
          <Switch
            label="Non-Conductive"
            ml={166}
            {...getFieldProps('fr_non_conductive', { type: 'checkbox' })}
          />
          <Switch
            label="Tight Fit"
            ml={166}
            {...getFieldProps('fr_tight_fit', { type: 'checkbox' })}
          />
          <Switch
            label="Wrap"
            ml={166}
            {...getFieldProps('fr_wrap', { type: 'checkbox' })}
          />
        </Stack>
        <Textarea
          label="Notes"
          styles={getFieldStyles({ horizontal: true })}
          rows={4}
          miw={580}
          {...getFieldProps('fr_notes')}
        />
      </Group>
    </>
  );
}
