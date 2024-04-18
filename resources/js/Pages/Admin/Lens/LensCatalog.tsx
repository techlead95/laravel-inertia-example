import PageTitle from '@/Components/PageTitle';
import EditDeleteActions from '@/Components/EditDeleteActions';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';
import { Lens } from '@/types';
import { Link, router } from '@inertiajs/react';

interface Props {
  lenses: Lens[];
}

export default function LensCatalog({ lenses }: Props) {
  return (
    <>
      <PageTitle title="Lens Catalog" />
      <Group justify="flex-end" mb="lg">
        <Link href={route('admin.lens.create')}>
          <Button>New Lens</Button>
        </Link>
      </Group>
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
            { accessor: 'le_lens_style', title: 'Style' },
            { accessor: 'le_lens_mat', title: 'Material' },
            { accessor: 'le_lens_col', title: 'Color' },
            {
              accessor: 'actions',
              title: '',
              textAlign: 'right',
              render(lens) {
                return (
                  <EditDeleteActions
                    editUrl={route('admin.lens.edit', { id: lens.id })}
                    deleteConfirmMessage="Are you sure to delete this lens?"
                    onDelete={() =>
                      router.delete(
                        route('admin.lens.destroy', { id: lens.id }),
                      )
                    }
                  />
                );
              },
            },
          ]}
          records={lenses}
        />
      </Stack>
    </>
  );
}
