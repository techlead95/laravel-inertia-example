import DeleteIconCell from '@/Components/DeleteIconCell';
import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { YES_NO_OPTIONS } from '@/constants';
import { FrameOffloadAvailability } from '@/types';
import { Select, Table, TextInput } from '@mantine/core';

interface Props {
  offloadAvailability: Partial<FrameOffloadAvailability>;
  onUpdate: (addon: Partial<FrameOffloadAvailability>) => void;
  onDebouncedUpdate: (addon: Partial<FrameOffloadAvailability>) => void;
  onDelete: () => void;
}

export default function OffloadAvailabilityRow({
  offloadAvailability,
  onUpdate,
  onDebouncedUpdate,
  onDelete,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: offloadAvailability,
    onUpdate,
    onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>
        <TextInput {...getFieldProps('fo_vendor')} />
      </Table.Td>
      <Table.Td>
        <Select {...getFieldProps('fo_vendor_allowed')} data={YES_NO_OPTIONS} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fo_auto_offload')} />
      </Table.Td>
      {offloadAvailability.id && <DeleteIconCell onDelete={onDelete} />}
    </Table.Tr>
  );
}
