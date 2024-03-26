import { FrameAddon } from '@/types';
import { ActionIcon, Select, Table, TextInput } from '@mantine/core';
import { Delete } from '@mui/icons-material';
import { useDebouncedCallback } from 'use-debounce';

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
  const debouncedUpdate = useDebouncedCallback(
    (updatedAddon: Partial<FrameAddon>) => {
      onDebouncedUpdate(updatedAddon);
    },
    500,
  );

  const handleUpdate = (field: keyof FrameAddon, value: string | null) => {
    const updatedAddon = { ...addon, [field]: value };
    onUpdateAddon(updatedAddon);
    debouncedUpdate(updatedAddon);
  };

  return (
    <Table.Tr key={addon.id}>
      <Table.Td>
        <TextInput
          value={addon.fa_UPC ?? ''}
          onChange={(e) => handleUpdate('fa_UPC', e.target.value)}
        />
      </Table.Td>
      <Table.Td>
        <Select
          data={shieldOptions}
          value={addon.fa_side_shield_type}
          onChange={(newValue) => handleUpdate('fa_side_shield_type', newValue)}
        />
      </Table.Td>
      <Table.Td>
        <Select
          data={shieldColorOptions}
          value={addon.fa_side_shield_color}
          onChange={(newValue) =>
            handleUpdate('fa_side_shield_color', newValue)
          }
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          value={addon.fa_legacy_clc ?? ''}
          onChange={(e) => handleUpdate('fa_legacy_clc', e.target.value)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          value={addon.fa_legacy_ss_code ?? ''}
          onChange={(e) => handleUpdate('fa_legacy_ss_code', e.target.value)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          value={addon.fa_dvi_services_code ?? ''}
          onChange={(e) => handleUpdate('fa_dvi_services_code', e.target.value)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          value={addon.fa_dvi_service_code ?? ''}
          onChange={(e) => handleUpdate('fa_dvi_service_code', e.target.value)}
        />
      </Table.Td>
      {addon.id && (
        <Table.Td>
          <ActionIcon variant="subtle" color="red" onClick={onDelete}>
            <Delete />
          </ActionIcon>
        </Table.Td>
      )}
    </Table.Tr>
  );
}
