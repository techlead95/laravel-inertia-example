import DeleteIconCell from '@/Components/DeleteIconCell';
import useEditableTableRow from '@/Hooks/useEditableTableRow';
import { FrameAddon } from '@/types';
import { ActionIcon, Select, Table, TextInput } from '@mantine/core';
import { Delete } from '@mui/icons-material';

interface Props {
  addon: Partial<FrameAddon>;
  shieldOptions: { value: string; label: string }[];
  shieldColorOptions: string[];
  onUpdateAddon: (addon: Partial<FrameAddon>) => void;
  onDebouncedUpdate: (addon: Partial<FrameAddon>) => void;
  onDelete: () => void;
}

export default function AddOnRow({
  addon,
  shieldOptions,
  shieldColorOptions,
  onUpdateAddon,
  onDebouncedUpdate,
  onDelete,
}: Props) {
  const { getFieldProps } = useEditableTableRow({
    item: addon,
    onUpdate: onUpdateAddon,
    onDebouncedUpdate: onDebouncedUpdate,
  });

  return (
    <Table.Tr>
      <Table.Td>
        <TextInput {...getFieldProps('fa_UPC')} />
      </Table.Td>
      <Table.Td>
        <Select
          data={shieldOptions}
          {...getFieldProps('fa_side_shield_type')}
        />
      </Table.Td>
      <Table.Td>
        <Select
          data={shieldColorOptions}
          {...getFieldProps('fa_side_shield_color')}
        />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fa_legacy_clc')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fa_legacy_ss_code')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fa_dvi_services_code')} />
      </Table.Td>
      <Table.Td>
        <TextInput {...getFieldProps('fa_dvi_service_code')} />
      </Table.Td>
      {addon.id && <DeleteIconCell onDelete={onDelete} />}
    </Table.Tr>
  );
}
