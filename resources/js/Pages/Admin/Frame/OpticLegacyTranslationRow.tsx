import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { FrameVariation } from '@/types';
import { Table, TextInput } from '@mantine/core';

interface Props {
  variation: Partial<FrameVariation>;
  onUpdate: (variation: Partial<FrameVariation>) => void;
  onDebouncedUpdate: (lensStyleLimitation: Partial<FrameVariation>) => void;
}

export default function OpticLegacyTranslationRow({
  variation,
  onUpdate,
  onDebouncedUpdate,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: variation,
    onUpdate,
    onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>{variation.fv_eyesize}</Table.Td>
      <Table.Td>{variation.fv_front_bridge}</Table.Td>
      <Table.Td>{variation.fv_temple_type}</Table.Td>
      <Table.Td>{variation.fv_temple_size}</Table.Td>
      <Table.Td>{variation.fv_frame_color}</Table.Td>
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
