import { FrameVariation } from '@/types';
import { ActionIcon, Table, TextInput } from '@mantine/core';
import { Delete } from '@mui/icons-material';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  variation?: Partial<FrameVariation>;
  onUpdate: (variation: Partial<FrameVariation>) => void;
  onDebouncedUpdate: (variation: Partial<FrameVariation>) => void;
  onDelete: () => void;
}

export default function FrameVariationRow({
  variation,
  onUpdate,
  onDebouncedUpdate,
  onDelete,
}: Props) {
  const debouncedUpdate = useDebouncedCallback(
    (updated: Partial<FrameVariation>) => {
      onDebouncedUpdate(updated);
    },
    500,
  );

  const getFieldProps = (field: keyof FrameVariation) => {
    return {
      value: String(variation?.[field] ?? ''),
      onChange(e: ChangeEvent<HTMLInputElement>) {
        const updated = { ...variation, [field]: e.target.value };
        onUpdate(updated);
        debouncedUpdate(updated);
      },
    };
  };

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
      {variation?.id && (
        <Table.Td>
          <ActionIcon variant="subtle" color="red" onClick={onDelete}>
            <Delete />
          </ActionIcon>
        </Table.Td>
      )}
    </Table.Tr>
  );
}
