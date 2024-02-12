import PageTitle from '@/Components/PageTitle';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';

export default function LensCatalog() {
  return (
    <>
      <PageTitle title="Lens Catalog" backUrl="/admin/lens" />
      <Stack mt="xl">
        <Group>
          <TextInput placeholder="Filter by Style" />
          <TextInput placeholder="Filter by Material" />
          <TextInput placeholder="Filter by Color" />
          <Button variant="outline" leftSection={<Search />}>
            Search
          </Button>
        </Group>
        <DataTable
          style={{ flex: 1 }}
          withTableBorder
          borderRadius="md"
          columns={[
            { accessor: 'style', title: 'Style' },
            { accessor: 'material', title: 'Material' },
            { accessor: 'color', title: 'Color' },
          ]}
          records={[
            {
              id: 1,
              style: 'Single Vision',
              material: 'Polycarbonate',
              color: 'Clear',
            },
            {
              id: 2,
              style: 'Single Vision',
              material: 'Polycarbonate',
              color: 'Grey',
            },
            {
              id: 3,
              style: 'Single Vision',
              material: 'Trivex\\Phoenix',
              color: 'Clear',
            },
            {
              id: 4,
              style: 'Single Vision',
              material: 'Trivex\\Phoenix',
              color: 'Grey',
            },
            {
              id: 5,
              style: 'Single Vision',
              material: 'Plastic',
              color: 'Clear',
            },
            {
              id: 6,
              style: 'Single Vision',
              material: 'Hi Index',
              color: 'Clear',
            },
          ]}
        />
      </Stack>
    </>
  );
}