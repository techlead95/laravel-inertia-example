import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { LensCoating, Paginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, TextInput } from '@mantine/core';

interface Props {
  coatings: Paginated<LensCoating>;
  search?: string;
}

export default function Coating({ coatings, search }: Props) {
  return (
    <>
      <Head title="Coating" />
      <Group justify="space-between" mb="lg">
        <MultiSearchForm
          initialValues={{ search }}
          onSearch={(newValues) => {
            router.get(route('admin.coatings.index', newValues ?? {}));
          }}
        >
          {({ getFieldProps }) => (
            <TextInput placeholder="Search" {...getFieldProps('search')} />
          )}
        </MultiSearchForm>
        <Link href={route('admin.coatings.create')}>
          <Button>New Coating</Button>
        </Link>
      </Group>
      <BaseDataTable
        withTableBorder
        columns={[
          { accessor: 'lc_lens_coating', title: 'Coating' },
          { accessor: 'lc_coating_group', title: 'Coating Group' },
          { accessor: 'lc_o1_translation', title: 'Optic Translation' },
          { accessor: 'lc_dvi_translation', title: 'Dvi Translation' },
          { accessor: 'lc_o2_add_code', title: 'Optic 2 Coat Add Code' },
          { accessor: 'lc_o1_add_code', title: 'Legacy Coat Add Code' },
          {
            accessor: 'actions',
            title: '',
            textAlign: 'right',
            render(coating) {
              return (
                <EditDeleteActions
                  editUrl={route('admin.coatings.edit', { id: coating.id })}
                  deleteConfirmMessage="Are you sure to delete this coating?"
                  onDelete={() =>
                    router.delete(
                      route('admin.coatings.destroy', { id: coating.id }),
                    )
                  }
                />
              );
            },
          },
        ]}
        records={coatings.data}
      />
      <BasePagination paginatedData={coatings} />
    </>
  );
}
