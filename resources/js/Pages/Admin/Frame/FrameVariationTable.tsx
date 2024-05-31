import useEditableTable from '@/Hooks/useEditableTable';
import { FrameVariation } from '@/types';
import { Table } from '@mantine/core';
import { produce } from 'immer';

import FrameVariationRow from './FrameVariationRow';

interface Props {
  frameId: number;
  frameVariations: FrameVariation[];
}

export default function FrameVariationTable({
  frameId,
  frameVariations,
}: Props) {
  const {
    items,
    setItems,
    handleDelete,
    handleDebouncedUpdate,
    getRowKey,
    getRowDisabled,
  } = useEditableTable({
    initialItems: frameVariations,
    storeUrl: route('admin.frames.frame-variations.store', frameId),
    getDestoryUrl: (id) =>
      route('admin.frames.frame-variations.destroy', {
        frame: frameId,
        frame_variation: id,
      }),
    getUpdateUrl: (id) =>
      route('admin.frames.frame-variations.update', {
        frame: frameId,
        frame_variation: id,
      }),
  });

  return (
    <Table bg="white">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Eye</Table.Th>
          <Table.Th>Bridge</Table.Th>
          <Table.Th>Temple Type</Table.Th>
          <Table.Th>Temple Size</Table.Th>
          <Table.Th>Color</Table.Th>
          <Table.Th>A</Table.Th>
          <Table.Th>B</Table.Th>
          <Table.Th>ED</Table.Th>
          <Table.Th>DBL</Table.Th>
          <Table.Th>Non Digital Default Seg</Table.Th>
          <Table.Th>Digital Default Seg</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.map((item, index) => (
          <FrameVariationRow
            key={getRowKey(item, index)}
            disabled={getRowDisabled(item)}
            variation={item}
            onUpdate={(variation) =>
              setItems(
                produce((draft) => {
                  draft[index] = variation;
                }),
              )
            }
            onDebouncedUpdate={handleDebouncedUpdate}
            onDelete={() => {
              handleDelete(index);
            }}
          />
        ))}
      </Table.Tbody>
    </Table>
  );
}
