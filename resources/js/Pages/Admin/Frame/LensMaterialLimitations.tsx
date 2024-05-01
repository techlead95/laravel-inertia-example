import useEditableTable from '@/Hooks/useEditableTable';
import { LensMaterial, LensMaterialLimitation } from '@/types';
import { Stack, Table, Text } from '@mantine/core';
import { produce } from 'immer';

import LensMaterialLimitationRow from './LensMaterialLimitationRow';

interface Props {
  lensMaterialLimitations: LensMaterialLimitation[];
  materials: LensMaterial[];
}

export default function LensMaterialLimitations({
  lensMaterialLimitations,
  materials,
}: Props) {
  const materialOptions = materials.map((material) => ({
    value: String(material.id),
    label: material.lm_lens_material,
  }));

  const { items, setItems, handleDelete, handleDebouncedUpdate, getRowKey } =
    useEditableTable({
      initialItems: lensMaterialLimitations,
      getDestoryUrl: (id) => '',
      getUpdateUrl: (id) => '',
      storeUrl: '',
    });

  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Lens Material Limitations
      </Text>
      <Table bg="white">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Lens Material</Table.Th>
            <Table.Th>Allowed</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {items.map((item, index) => (
            <LensMaterialLimitationRow
              key={getRowKey(item, index)}
              lensMaterialLimitation={item}
              materialOptions={materialOptions}
              onUpdate={(updatedLimitation) => {
                setItems(
                  produce((draft) => {
                    draft[index] = updatedLimitation;
                  }),
                );
              }}
              onDebouncedUpdate={handleDebouncedUpdate}
              onDelete={() => {
                handleDelete(index);
              }}
            />
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}
