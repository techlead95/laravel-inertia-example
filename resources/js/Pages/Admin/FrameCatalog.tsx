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
            { brand: 'HSD', style: '650 Brown Marble' },
            { brand: 'HSD', style: '650 Gray Marble' },
            { brand: 'HSD', style: 'A2000' },
            { brand: 'HSD', style: 'A2000 Pink Lo' },
            { brand: 'HSD', style: 'A2500' },
            { brand: 'HSD', style: 'Alpha Brown' },
            { brand: 'HSD', style: 'Alpha Gunmetal' },
            { brand: 'HSD', style: 'Alpha Olive Lo' },
            { brand: 'HSD', style: 'Attitude 3 Burg' },
            { brand: 'HSD', style: 'Attitude 3 Moss' },
          ]}
        />
      </Stack>
    </>
  );
}
