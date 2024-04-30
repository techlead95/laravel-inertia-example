import EditDeleteActions from '@/Components/EditDeleteActions';
import PageTitle from '@/Components/PageTitle';
import { Mirror } from '@/types';
import { Link, router } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';

interface Props {
  mirrors: Mirror[];
}

export default function MirrorCatalog({ mirrors }: Props) {
  return (
    <>
      <PageTitle title="Mirror Catalog" />
      <Group justify="flex-end" mb="lg">
        <Link href={route('admin.mirror.create')}>
          <Button>New Mirror</Button>
        </Link>
      </Group>
      <Stack mt="xl">
        <Group>
          <TextInput placeholder="Filter by Mirror" />
          <Button variant="outline" leftSection={<Search />}>
            Search
          </Button>
        </Group>
        <DataTable
          style={{ flex: 1 }}
          withTableBorder
          borderRadius="md"
          columns={[
            { accessor: 'mr_mirror', title: 'Mirror' },
            {
              accessor: 'actions',
              title: '',
              textAlign: 'right',
              render(mirror) {
                return (
                  <EditDeleteActions
                    editUrl={route('admin.mirror.edit', { id: mirror.id })}
                    deleteConfirmMessage="Are you sure to delete this mirror?"
                    onDelete={() =>
                      router.delete(
                        route('admin.mirror.destroy', { id: mirror.id }),
                      )
                    }
                  />
                );
              },
            },
          ]}
          records={mirrors}
        />
      </Stack>
    </>
  );
}
