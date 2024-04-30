import useEditableTable from '@/Hooks/useEditableTable';
import { FrameAddon, Shield, ShieldColor } from '@/types';
import { Table } from '@mantine/core';
import { produce } from 'immer';
import { useMemo } from 'react';

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

  const { items, setItems, handleDelete, handleDebouncedUpdate, getRowKey } =
    useEditableTable({
      initialItems: addons,
      getDestoryUrl: (id) => route('admin.frame-addon.destroy', id),
      getUpdateUrl: (id) => route('admin.frame-addon.update', id),
      storeUrl: route('admin.frame-addon.store'),
    });

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
        {items.map((item, index) => (
          <AddOnRow
            key={getRowKey(item, index)}
            addon={item}
            shieldOptions={shieldOptions}
            shieldColorOptions={shieldColorOptions}
            onUpdateAddon={(updatedAddon) =>
              setItems(
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
