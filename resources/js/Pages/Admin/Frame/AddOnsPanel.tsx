import { FrameAddon, Shield, ShieldColor } from '@/types';
import { openDeleteConfirmModal, showErrorNotification } from '@/utils';
import { Table } from '@mantine/core';
import axios from 'axios';
import { produce } from 'immer';
import { useMemo, useState } from 'react';

import AddOnRow from './AddOnRow';

interface Props {
  shields: Shield[];
  shieldColors: ShieldColor[];
  addons: FrameAddon[];
}

export default function AddOnsPanel({ shields, shieldColors, addons }: Props) {
  const shieldOptions = useMemo(() => {
    return shields.map((shield) => ({
      value: String(shield.id),
      label: shield.sh_ss_desc,
    }));
  }, [shields]);

  const shieldColorOptions = useMemo(
    () => shieldColors.map((color) => color.ss_color),
    [shieldColors],
  );

  const [frameAddons, setFrameAddons] = useState<Partial<FrameAddon>[]>([
    ...addons,
    {},
  ]);

  const handleDebouncedUpdate = (updatedAddOn: Partial<FrameAddon>) => {
    if (!updatedAddOn.id) {
      axios.post(route('admin.frame-addon.store'), updatedAddOn).then((res) => {
        setFrameAddons([...frameAddons.slice(0, -1), res.data, {}]);
      });
    } else {
      axios.put(
        route('admin.frame-addon.update', updatedAddOn.id),
        updatedAddOn,
      );
    }
  };

  const handleDelete = (index: number) => {
    const deletingId = frameAddons[index].id;

    openDeleteConfirmModal({
      title: 'Are you sure to delete this add-on?',
      onConfirm() {
        axios
          .delete(route('admin.frame-addon.destroy', deletingId))
          .then(() => {
            setFrameAddons(
              frameAddons.filter((addon) => addon.id !== deletingId),
            );
          })
          .catch((r) => {
            showErrorNotification(r.data.error);
          });
      },
    });
  };

  return (
    <Table bg="white">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>UPC</Table.Th>
          <Table.Th>Side Shield Type</Table.Th>
          <Table.Th>Side Shield Color</Table.Th>
          <Table.Th>Legacy CLC</Table.Th>
          <Table.Th>Legacy SS Code</Table.Th>
          <Table.Th>DVI Services Code</Table.Th>
          <Table.Th>DVI Service Code</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {frameAddons.map((addon, index) => (
          <AddOnRow
            key={index}
            addon={addon}
            shieldOptions={shieldOptions}
            shieldColorOptions={shieldColorOptions}
            onUpdateAddon={(updatedAddon) =>
              setFrameAddons(
                produce((draft) => {
                  draft[index] = updatedAddon;
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
