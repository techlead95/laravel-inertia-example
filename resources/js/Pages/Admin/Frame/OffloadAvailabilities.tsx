import BaseDataTable from '@/Components/BaseDataTable';
import useEditableTable from '@/Hooks/useEditableTable';
import { FrameOffloadAvailability } from '@/types';
import { Stack, Table, Text } from '@mantine/core';
import { produce } from 'immer';

import OffloadAvailabilityRow from './OffloadAvailabilityRow';

interface Props {
  frameId: number;
  offloadAvailabilities: FrameOffloadAvailability[];
}

export default function OffloadAvailabilities({
  frameId,
  offloadAvailabilities,
}: Props) {
  const {
    items,
    setItems,
    handleDebouncedUpdate,
    handleDelete,
    getRowKey,
    getRowDisabled,
  } = useEditableTable({
    initialItems: offloadAvailabilities,
    storeUrl: route('admin.frames.offload-availabilities.store', frameId),
    getDestoryUrl: (id) =>
      route('admin.frames.offload-availabilities.destroy', {
        frame: frameId,
        offload_availability: id,
      }),
    getUpdateUrl: (id) =>
      route('admin.frames.offload-availabilities.update', {
        frame: frameId,
        offload_availability: id,
      }),
  });

  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Offload Availability
      </Text>
      <Table bg="white">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Vendor</Table.Th>
            <Table.Th>Allowed</Table.Th>
            <Table.Th>Automatic Offload</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {items.map((item, index) => (
            <OffloadAvailabilityRow
              key={getRowKey(item, index)}
              disabled={getRowDisabled(item)}
              offloadAvailability={item}
              onUpdate={(updatedItem) => {
                setItems(
                  produce((draft) => {
                    draft[index] = updatedItem;
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
