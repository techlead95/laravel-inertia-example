import { Box, Group, GroupProps, Stack, Table, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends GroupProps {
  headers: string[];
  hasRL?: boolean;
  hasEditable?: boolean;
  children?: ReactNode;
}

export default function OrderTable({
  headers,
  hasRL,
  hasEditable,
  children,
  ...props
}: Props) {
  return (
    <Group align="flex-end" {...props}>
      {hasRL && (
        <Stack mb={hasEditable ? 12 : 4} gap={hasEditable ? 28 : undefined}>
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
