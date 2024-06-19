import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { Paginated, Tint } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, TextInput } from '@mantine/core';

interface Props {
  tints: Paginated<Tint>;
  search?: string;
}

export default function TintList({ tints, search }: Props) {
  return (
    <>
      <Head title="Tint" />
      <Group justify="space-between" mb="lg">
        <MultiSearchForm
          initialValues={{ search }}
          onSearch={(newValues) => {
            router.get(route('admin.tint.index', newValues ?? {}));
          }}
        >
          {({ getFieldProps }) => (
            <TextInput placeholder="Search" {...getFieldProps('search')} />
          )}
        </MultiSearchForm>
        <Link href={route('admin.tint.create')}>
          <Button>New Tint</Button>
        </Link>
      </Group>
      <BaseDataTable
        withTableBorder
        columns={[
          { accessor: 'ti_color', title: 'Tint Color' },
          { accessor: 'ti_group', title: 'Tint Group' },
          { accessor: 'ti_lower_range', title: 'Lower Range' },
          { accessor: 'ti_upper_range', title: 'Upper Range' },
          { accessor: 'ti_o1_translation', title: 'Optic Translation' },
          {
            accessor: 'actions',
            title: '',
            textAlign: 'right',
            render(tint) {
              return (
                <EditDeleteActions
                  editUrl={route('admin.tint.edit', { id: tint.id })}
                  deleteConfirmMessage="Are you sure to delete this tint?"
                  onDelete={() =>
                    router.delete(route('admin.tint.destroy', { id: tint.id }))
                  }
                />
              );
            },
          },
        ]}
        records={tints.data}
      />
      <BasePagination paginatedData={tints} />
    </>
  );
}
