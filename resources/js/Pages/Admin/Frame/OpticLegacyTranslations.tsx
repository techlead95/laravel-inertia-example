import useEditableTable from '@/Hooks/useEditableTable';
import { FrameVariation } from '@/types';
import { Stack, Table, Text } from '@mantine/core';
import { produce } from 'immer';

import OpticLegacyTranslationRow from './OpticLegacyTranslationRow';

interface Props {
  frameId: number;
  frameVariations: FrameVariation[];
}

export default function OpticLegacyTranslations({
  frameId,
  frameVariations,
}: Props) {
  const { items, setItems, handleDebouncedUpdate, getRowKey } =
    useEditableTable({
      initialItems: frameVariations,
      storeUrl: '',
      getDestoryUrl: () => '',
      getUpdateUrl: (id) =>
        route('admin.frames.frame-variations.update', {
          frame: frameId,
          frame_variation: id,
        }),
    });

  return (
    <Stack>
      <Text fw="bold" size="lg">
        Optic Legacy
      </Text>
      <Table bg="white">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Eye</Table.Th>
            <Table.Th>Bridge</Table.Th>
            <Table.Th>Temple Type</Table.Th>
            <Table.Th>Temple Size</Table.Th>
            <Table.Th>Color</Table.Th>
            <Table.Th>Optic Legacy</Table.Th>
            <Table.Th>Legacy Add Code</Table.Th>
            <Table.Th>Legacy Stock Code</Table.Th>
            <Table.Th>O2 Add Code</Table.Th>
            <Table.Th>O2 Stock Code</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {items.map((item, index) => (
            <OpticLegacyTranslationRow
              key={getRowKey(item, index)}
              variation={item}
              onUpdate={(variation) =>
                setItems(
                  produce((draft) => {
                    draft[index] = variation;
                  }),
                )
              }
              onDebouncedUpdate={handleDebouncedUpdate}
            />
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}
