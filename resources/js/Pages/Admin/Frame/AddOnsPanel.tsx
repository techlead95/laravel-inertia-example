import { Select, Table } from '@mantine/core';

export default function AddOnsPanel() {
  return (
    <Table bg="white">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Eye</Table.Th>
          <Table.Th>Upc</Table.Th>
          <Table.Th>Side Shield Type</Table.Th>
          <Table.Th>Side Shield Color</Table.Th>
          <Table.Th>Legacy CLC</Table.Th>
          <Table.Th>Legacy SS Code</Table.Th>
          <Table.Th>DVI Service Code</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>68</Table.Td>
          <Table.Td />
          <Table.Td>
            <Select data={['Integrated', 'Detachable', 'Permanent']} />
          </Table.Td>
          <Table.Td>
            <Select data={['Clear', 'Grey']} />
          </Table.Td>
          <Table.Td />
          <Table.Td />
          <Table.Td />
          <Table.Td />
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
