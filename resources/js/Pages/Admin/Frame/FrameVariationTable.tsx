import { FrameVariation } from '@/types';
import { Table } from '@mantine/core';
import { useState } from 'react';

import FrameVariationRow from './FrameVariationRow';

interface Props {
  frameVariations: FrameVariation[];
}

export default function FrameVariationTable({ frameVariations }: Props) {
  const [variations, setVariations] = useState<Partial<FrameVariation>[]>([
    ...frameVariations,
    {},
  ]);

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
            onUpdate={() => {}}
            onDebouncedUpdate={() => {}}
            onDelete={() => {}}
          />
        ))}
      </Table.Tbody>
    </Table>
  );
}
