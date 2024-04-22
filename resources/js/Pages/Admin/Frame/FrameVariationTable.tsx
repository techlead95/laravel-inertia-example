import { FrameVariation } from '@/types';
import { openDeleteConfirmModal, showErrorNotification } from '@/utils';
import { Table } from '@mantine/core';
import axios from 'axios';
import { produce } from 'immer';
import { useState } from 'react';

import FrameVariationRow from './FrameVariationRow';

interface Props {
  frameId: number;
  frameVariations: FrameVariation[];
}

export default function FrameVariationTable({
  frameId,
  frameVariations,
}: Props) {
  const [variations, setVariations] = useState<Partial<FrameVariation>[]>([
    ...frameVariations,
    {},
  ]);

  const handleDelete = (index: number) => {
    const deletingId = variations[index].id;

    openDeleteConfirmModal({
      title: 'Are you sure to delete this add-on?',
      onConfirm() {
        axios
          .delete(
            route('admin.frames.frame-variations.destroy', {
              frame: frameId,
              frame_variation: deletingId,
            }),
          )
          .then(() => {
            setVariations(
              variations.filter((variation) => variation.id !== deletingId),
            );
          })
          .catch((r) => {
            showErrorNotification(r.data.error);
          });
      },
    });
  };

  const handleDebouncedUpdate = (updated: Partial<FrameVariation>) => {
    if (!updated.id) {
      axios
        .post(route('admin.frames.frame-variations.store', frameId), updated)
        .then((res) => {
          setVariations([...variations.slice(0, -1), res.data, {}]);
        });
    } else {
      axios.put(
        route('admin.frames.frame-variations.update', {
          frame: frameId,
          frame_variation: updated.id,
        }),
        updated,
      );
    }
  };

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
        {variations.map((variation, index) => (
          <FrameVariationRow
            key={index}
            variation={variation}
            onUpdate={(variation) =>
              setVariations(
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
