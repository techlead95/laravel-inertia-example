import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { Lens, Paginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, TextInput } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

interface Props {
  lenses: Paginated<Lens>;
  style?: string;
  material?: string;
  color?: string;
}

export default function LensList({ lenses, style, material, color }: Props) {
  return (
    <>
      <Head title="Lens" />
      <Group justify="space-between" mb="lg">
        <MultiSearchForm
          initialValues={{ style, material, color }}
          onSearch={(newValues) => {
            router.get(route('admin.lens.index', newValues ?? {}));
          }}
          hideClear
        >
          {({ getFieldProps }) => (
            <>
              <TextInput
                placeholder="Filter by Style"
                {...getFieldProps('style')}
              />
              <TextInput
                placeholder="Filter by Material"
                {...getFieldProps('material')}
              />
              <TextInput
                placeholder="Filter by Color"
                {...getFieldProps('color')}
              />
            </>
          )}
        </MultiSearchForm>
        <Link href={route('admin.lens.create')}>
          <Button>New Lens</Button>
        </Link>
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
                    router.delete(route('admin.lens.destroy', { id: lens.id }))
                  }
                />
              );
            },
          },
        ]}
        records={lenses.data}
      />
      <BasePagination paginatedData={lenses} />
    </>
  );
}
