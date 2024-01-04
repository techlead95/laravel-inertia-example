import PageTitle from '@/Components/PageTitle';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { FaSearch } from 'react-icons/fa';

interface ShipTo {
  id: number;
  shipToNumber: number;
  shipToName: string;
}

interface Props {
  shipTos: ShipTo[];
}

export default function ShipToAccountMaintenance({ shipTos }: Props) {
  return (
    <>
      <PageTitle title="Ship To Account Maintenance" backUrl="/admin" />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start" mt="xl">
        <Stack h="100%">
          <Group>
            <TextInput placeholder="Search by Ship to #" w={280} />
            <Button variant="outline" leftSection={<FaSearch />}>
              Search
            </Button>
          </Group>
          <DataTable
            style={{ flex: 1 }}
            striped
            withTableBorder
            borderRadius="md"
            columns={[
              { accessor: 'id', title: 'ID' },
              { accessor: 'shipToNumber', title: 'SHIP TO #' },
              { accessor: 'shipToName', title: 'Ship to Name' },
              { accessor: 'dispensingType', title: 'Dispensing Type' },
              { accessor: 'dispensingAmount', title: 'Dispensing Amount' },
            ]}
            records={shipTos}
          />
        </Stack>
      </Group>
    </>
  );
}
