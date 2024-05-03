import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { YES_NO_OPTIONS } from '@/constants';
import { LensMaterialLimitation } from '@/types';
import { Select, Table } from '@mantine/core';

interface Props {
  lensMaterialLimitation: Partial<LensMaterialLimitation>;
  onUpdate: (lensMaterialLimitation: Partial<LensMaterialLimitation>) => void;
  onDebouncedUpdate: (
    lensMaterialLimitation: Partial<LensMaterialLimitation>,
  ) => void;
}

export default function LensMaterialLimitationRow({
  lensMaterialLimitation,
  onUpdate,
  onDebouncedUpdate,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: lensMaterialLimitation,
    onUpdate,
    onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>{lensMaterialLimitation.lm_lens_material}</Table.Td>
      <Table.Td>
        <Select {...getFieldProps('allowed')} data={YES_NO_OPTIONS} />
      </Table.Td>
    </Table.Tr>
  );
}
