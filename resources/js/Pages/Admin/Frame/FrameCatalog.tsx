import PageTitle from '@/Components/PageTitle';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';

export default function FrameCatalog() {
  return (
    <>
      <PageTitle title="Frame Catalog" backUrl="/admin/frame" />
      <Stack mt="xl">
        <Group>
          <TextInput placeholder="Filter by Brand" />
          <TextInput placeholder="Filter by Style" />
          <Button variant="outline" leftSection={<Search />}>
            Search
          </Button>
        </Group>
        <DataTable
          style={{ flex: 1 }}
          withTableBorder
          borderRadius="md"
          columns={[
            { accessor: 'brand', title: 'Brand' },
            { accessor: 'style', title: 'Style' },
          ]}
          records={[
            { id: 1, brand: 'HSD', style: '650 Brown Marble' },
            { id: 2, brand: 'HSD', style: '650 Gray Marble' },
            { id: 3, brand: 'HSD', style: 'A2000' },
            { id: 4, brand: 'HSD', style: 'A2000 Pink Lo' },
            { id: 5, brand: 'HSD', style: 'A2500' },
            { id: 6, brand: 'HSD', style: 'Alpha Brown' },
            { id: 7, brand: 'HSD', style: 'Alpha Gunmetal' },
            { id: 8, brand: 'HSD', style: 'Alpha Olive Lo' },
            { id: 9, brand: 'HSD', style: 'Attitude 3 Burg' },
            { id: 10, brand: 'HSD', style: 'Attitude 3 Moss' },
          ]}
        />
      </Stack>
    </>
  );
}
