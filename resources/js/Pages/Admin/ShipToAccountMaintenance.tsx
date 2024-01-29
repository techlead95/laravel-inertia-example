import PageTitle from '@/Components/PageTitle';
import { includesIgnoreCase, inputHorizontalStyles } from '@/utils';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';
import { useState } from 'react';

interface ShipTo {
  id: number;
  shipToNumber: number;
  shipToName: string;
}

interface Props {
  shipTos: ShipTo[];
}

export default function ShipToAccountMaintenance({ shipTos }: Props) {
  const [filter, setFilter] = useState('');

  return (
    <>
      <PageTitle title="Ship To Account Maintenance" backUrl="/admin" />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start" mt="xl">
        <Stack h="100%" style={{ flex: 1 }}>
          <Group>
            <TextInput
              placeholder="Search by Ship to #"
              w={280}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <Button miw={120} variant="outline" leftSection={<Search />}>
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
            records={shipTos.filter((shipTo) =>
              includesIgnoreCase(String(shipTo.shipToNumber), filter),
            )}
          />
        </Stack>
        <Stack style={{ flex: 1 }}>
          <Group ml={166}>
            <Button miw={120}>Save</Button>
            <Button miw={120} variant="outline">
              Clear
            </Button>
            <Button miw={120} variant="outline" color="red">
              Remove
            </Button>
          </Group>
          <TextInput label="Ship to Account" styles={inputHorizontalStyles} />
          <TextInput label="Ship to Name" styles={inputHorizontalStyles} />
          <TextInput
            label="Dispensing Type"
            styles={inputHorizontalStyles}
            disabled
          />
          <TextInput
            label="Dispensing Amount"
            styles={inputHorizontalStyles}
            disabled
          />
          <TextInput label="Future1" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future2" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future3" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future4" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future5" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future6" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future7" styles={inputHorizontalStyles} disabled />
          <TextInput label="Future8" styles={inputHorizontalStyles} disabled />
        </Stack>
      </Group>
    </>
  );
}
