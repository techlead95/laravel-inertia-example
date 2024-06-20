import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { Mirror, Paginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';

interface Props {
  mirrors: Paginated<Mirror>;
  search?: string;
}

export default function MirrorCatalog({ mirrors, search }: Props) {
  return (
    <>
      <Head title="Mirror" />
      <Group justify="space-between" mb="lg">
        <MultiSearchForm
          initialValues={{ search }}
          onSearch={(newValues) => {
            router.get(route('admin.mirror.index', newValues ?? {}));
          }}
        >
          {({ getFieldProps }) => (
            <TextInput placeholder="Search" {...getFieldProps('search')} />
          )}
        </MultiSearchForm>
        <Link href={route('admin.mirror.create')}>
          <Button>New Mirror</Button>
        </Link>
      </Group>
      <BaseDataTable
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
        records={mirrors.data}
      />
      <BasePagination paginatedData={mirrors} />
    </>
  );
}
