import { useFrameVariationsTable } from '@/Contexts/FrameVariationsTableContext';
import { Stack, Table, Text } from '@mantine/core';
import { produce } from 'immer';

import DviTranslationRow from './DviTranslationRow';

export default function DviTranslations() {
  const { nonEmptyItems, setItems, handleDebouncedUpdate, getRowKey } =
    useFrameVariationsTable();

  return (
    <Stack>
      <Text fw="bold" size="lg">
        DVI
      </Text>
      <Table bg="white">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Eye</Table.Th>
            <Table.Th>Bridge</Table.Th>
            <Table.Th>Temple Type</Table.Th>
            <Table.Th>Temple Size</Table.Th>
            <Table.Th>Color</Table.Th>
            <Table.Th>DVI FRM MFR</Table.Th>
            <Table.Th>DVI FRM Style</Table.Th>
            <Table.Th>DVI FRM Color</Table.Th>
            <Table.Th>DVI FRM Eye</Table.Th>
            <Table.Th>DVI FRM Bridge</Table.Th>
            <Table.Th>DVI FRM Temple</Table.Th>
            <Table.Th>DVI FRM TPL Type</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {nonEmptyItems.map((item, index) => (
            <DviTranslationRow
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
