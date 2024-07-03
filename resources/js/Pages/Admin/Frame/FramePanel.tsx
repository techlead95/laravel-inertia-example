import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Frame, FrameEdge, FrameMaterial, FrameVariation } from '@/types';
import {
  Group,
  Select,
  Stack,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';

import FrameVariationTable from './FrameVariationTable';

interface Props {
  edges: FrameEdge[];
  materials: FrameMaterial[];
  form: ReturnType<typeof useBaseForm<Frame>>;
}

export default function FramePanel({ edges, materials, form }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps, data } = form;

  return (
    <>
      <FrameVariationTable />
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
          w={600}
          {...getFieldProps('fr_notes')}
        />
      </Group>
    </>
  );
}
