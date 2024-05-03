import useEditableTable from '@/Hooks/useEditableTable';
import { LensMaterial, LensMaterialLimitation } from '@/types';
import { Stack, Table, Text } from '@mantine/core';
import { produce } from 'immer';
import { keyBy } from 'lodash';
import { useMemo } from 'react';

import LensMaterialLimitationRow from './LensMaterialLimitationRow';

interface Props {
  frameId: number;
  lensMaterialLimitations: LensMaterialLimitation[];
  materials: LensMaterial[];
}

export default function LensMaterialLimitations({
  frameId,
  lensMaterialLimitations,
  materials,
}: Props) {
  const initialItems = useMemo(() => {
    const normalizedLimitations = keyBy(lensMaterialLimitations, 'id');

    return materials.map((material) => ({
      ...normalizedLimitations[material.id],
      id: material.id,
      lm_lens_material: material.lm_lens_material,
    }));
  }, [lensMaterialLimitations, materials]);

  const { items, setItems, handleDebouncedUpdate, getRowKey } =
    useEditableTable({
      initialItems,
      getDestoryUrl: () => '',
      getUpdateUrl: (id) =>
        route('admin.frames.lens-materials.save-limitation', {
          frame: frameId,
          lens_material: id,
        }),
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
              onUpdate={(updatedLimitation) => {
                setItems(
                  produce((draft) => {
                    draft[index] = updatedLimitation;
                  }),
                );
              }}
              onDebouncedUpdate={handleDebouncedUpdate}
            />
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}
