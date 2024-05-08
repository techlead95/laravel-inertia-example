import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { FrameVariation, LensStyleLimitation } from '@/types';
import { Table, TextInput } from '@mantine/core';

interface Props {
  frameVariation: Partial<FrameVariation>;
  onUpdate: (frameVariation: Partial<FrameVariation>) => void;
  onDebouncedUpdate: (
    lensStyleLimitation: Partial<LensStyleLimitation>,
  ) => void;
}

export default function OpticLegacyTranslationRow({
  frameVariation,
  onUpdate,
  onDebouncedUpdate,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: frameVariation,
    onUpdate,
    onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>{frameVariation.fv_eyesize}</Table.Td>
      <Table.Td>{frameVariation.fv_front_bridge}</Table.Td>
      <Table.Td>{frameVariation.fv_temple_type}</Table.Td>
      <Table.Td>{frameVariation.fv_temple_size}</Table.Td>
      <Table.Td>{frameVariation.fv_frame_color}</Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_optic_legacy')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_o1_add_code')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_o1_stock_code')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_o2_add_code')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_o2_stock_code')} />
      </Table.Td>
    </Table.Tr>
  );
}
