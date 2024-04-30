import DeleteIconCell from '@/Components/DeleteIconCell';
import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { YES_NO_OPTIONS } from '@/constants';
import { LensMaterialLimitation } from '@/types';
import { ComboboxData, Select, Table } from '@mantine/core';

interface Props {
  lensMaterialLimitation: Partial<LensMaterialLimitation>;
  materialOptions: ComboboxData;
  onUpdate: (lensMaterialLimitation: Partial<LensMaterialLimitation>) => void;
  onDebouncedUpdate: (
    lensMaterialLimitation: Partial<LensMaterialLimitation>,
  ) => void;
  onDelete: () => void;
}

export default function LensMaterialLimitationRow({
  lensMaterialLimitation,
  materialOptions,
  onUpdate,
  onDebouncedUpdate,
  onDelete,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: lensMaterialLimitation,
    onUpdate,
    onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>
        <Select {...getFieldProps('id')} data={materialOptions} />
      </Table.Td>
      <Table.Td>
        <Select {...getFieldProps('allowed')} data={YES_NO_OPTIONS} />
      </Table.Td>
      {lensMaterialLimitation.id && <DeleteIconCell onDelete={onDelete} />}
    </Table.Tr>
  );
}
