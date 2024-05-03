import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { YES_NO_OPTIONS } from '@/constants';
import { LensStyleLimitation } from '@/types';
import { Select, Table, TextInput } from '@mantine/core';

interface Props {
  lensStyleLimitation: Partial<LensStyleLimitation>;
  onUpdate: (lensStyleLimitation: Partial<LensStyleLimitation>) => void;
  onDebouncedUpdate: (
    lensStyleLimitation: Partial<LensStyleLimitation>,
  ) => void;
}

export default function LensStyleLimitationRow({
  lensStyleLimitation,
  onUpdate,
  onDebouncedUpdate,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: lensStyleLimitation,
    onUpdate,
    onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>{lensStyleLimitation.ls_lenstyl_lens_style}</Table.Td>
      <Table.Td>
        <Select {...getFieldProps('allowed')} data={YES_NO_OPTIONS} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('minimum_pd')} />
      </Table.Td>
    </Table.Tr>
  );
}
