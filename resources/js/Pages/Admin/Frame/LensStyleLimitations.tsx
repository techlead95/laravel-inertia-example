import useEditableTable from '@/Hooks/useEditableTable';
import { LensStyle, LensStyleLimitation } from '@/types';
import { Stack, Table, Text } from '@mantine/core';
import { produce } from 'immer';
import { keyBy } from 'lodash';
import { useMemo } from 'react';

import LensStyleLimitationRow from './LensStyleLimitationRow';

interface Props {
  frameId: number;
  lensStyleLimitations: LensStyleLimitation[];
  styles: LensStyle[];
}

export default function LensStyleLimitations({
  frameId,
  lensStyleLimitations,
  styles,
}: Props) {
  const initialItems = useMemo(() => {
    const normalizedLimitations = keyBy(lensStyleLimitations, 'id');

    return styles.map((style) => ({
      ...normalizedLimitations[style.id],
      id: style.id,
      ls_lenstyl_lens_style: style.ls_lenstyl_lens_style,
    }));
  }, [lensStyleLimitations, styles]);

  const { items, setItems, handleDebouncedUpdate, getRowKey } =
    useEditableTable({
      initialItems,
      getDestoryUrl: () => '',
      getUpdateUrl: (id) =>
        route('admin.frames.lens-styles.save-limitation', {
          frame: frameId,
          lens_style: id,
        }),
      storeUrl: '',
    });

  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Lens Style Limitations
      </Text>
      <Table bg="white">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Lens Style</Table.Th>
            <Table.Th>Allowed</Table.Th>
            <Table.Th>Minimum PD</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {items.map((item, index) => (
            <LensStyleLimitationRow
              key={getRowKey(item, index)}
              lensStyleLimitation={item}
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
