import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { FrameVariation } from '@/types';
import { Table, TextInput } from '@mantine/core';

interface Props {
  variation: Partial<FrameVariation>;
  onUpdate: (variation: Partial<FrameVariation>) => void;
  onDebouncedUpdate: (variation: Partial<FrameVariation>) => void;
}

export default function DviTranslationRow({
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
        <TextInput {...getFieldProps('fv_dvi_frm_mfr')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dvi_frm_style')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dvi_frm_color')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dvi_frm_eye')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dvi_frm_bridge')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dvi_frm_temple')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dvi_frm_tpl_type')} />
      </Table.Td>
    </Table.Tr>
  );
}
