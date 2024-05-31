import DeleteIconCell from '@/Components/DeleteIconCell';
import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { FrameVariation } from '@/types';
import { Table, TextInput } from '@mantine/core';

interface Props {
  variation?: Partial<FrameVariation>;
  onUpdate: (variation: Partial<FrameVariation>) => void;
  onDebouncedUpdate: (variation: Partial<FrameVariation>) => void;
  onDelete: () => void;
  disabled?: boolean;
}

export default function FrameVariationRow({
  variation,
  onUpdate,
  onDebouncedUpdate,
  onDelete,
  disabled,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: variation,
    onUpdate,
    onDebouncedUpdate,
    disabled,
  });

  return (
    <Table.Tr>
      <Table.Td>
        <TextInput {...getFieldProps('fv_eyesize')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_front_bridge')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_temple_type')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_temple_size')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_frame_color')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_A')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_B')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_ED')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_DBL')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_non_dig_default_seg')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fv_dig_default_seg')} />
      </Table.Td>
      {variation?.id && <DeleteIconCell onDelete={onDelete} />}
    </Table.Tr>
  );
}
