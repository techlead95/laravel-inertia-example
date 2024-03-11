import { Box, Group, Stack, Table, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  headers: string[];
  hasRL?: boolean;
  children?: ReactNode;
}

export default function OrderTable({ headers, hasRL, children }: Props) {
  return (
    <Group align="flex-end">
      {hasRL && (
        <Stack mb={4}>
          <Text fw="bold" c="blue">
            R
          </Text>
          <Text fw="bold" c="blue">
            L
          </Text>
        </Stack>
      )}
      <Box flex={1}>
        <Table borderColor="gray.6" withColumnBorders withTableBorder>
          <Table.Thead>
            <Table.Tr>
              {headers.map((header) => (
                <Table.Th ta="center" c="blue" key={header}>
                  {header}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody bg="white">{children}</Table.Tbody>
        </Table>
      </Box>
    </Group>
  );
}
