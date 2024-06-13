import BaseDataTable from '@/Components/BaseDataTable';
import PageTitle from '@/Components/PageTitle';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { includesIgnoreCase } from '@/utils';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
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
  const getFieldStyles = useGetFieldStyles();

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
          <BaseDataTable
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
          <TextInput
            label="Ship to Account"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="Ship to Name"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="Dispensing Type"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Dispensing Amount"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future1"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future2"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future3"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future4"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future5"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future6"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future7"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
          <TextInput
            label="Future8"
            styles={getFieldStyles({ horizontal: true })}
            disabled
          />
        </Stack>
      </Group>
    </>
  );
}
