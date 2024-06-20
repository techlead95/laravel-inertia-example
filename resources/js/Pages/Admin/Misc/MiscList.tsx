import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { Misc, Paginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group, TextInput } from '@mantine/core';

interface Props {
  miscs: Paginated<Misc>;
  search?: string;
}

export default function MiscList({ miscs, search }: Props) {
  return (
    <>
      <Head title="Misc" />
      <Group justify="space-between" mb="lg">
        <MultiSearchForm
          initialValues={{ search }}
          onSearch={(newValues) => {
            router.get(route('admin.misc.index', newValues ?? {}));
          }}
        >
          {({ getFieldProps }) => (
            <TextInput placeholder="Search" {...getFieldProps('search')} />
          )}
        </MultiSearchForm>
        <Link href={route('admin.misc.create')}>
          <Button>New Misc</Button>
        </Link>
      </Group>
      <BaseDataTable
        withTableBorder
        columns={[
          { accessor: 'mi_item_name', title: 'Misc Item' },
          { accessor: 'mi_o1_translation', title: 'Optic Translation' },
          { accessor: 'mi_dvi_translation', title: 'Dvi Translation' },
          { accessor: 'mi_o2_add_code', title: 'O2 Add Code' },
          { accessor: 'mi_o1_add_code', title: 'Legacy Add Code' },
          {
            accessor: 'actions',
            title: '',
            textAlign: 'right',
            render(misc) {
              return (
                <EditDeleteActions
                  editUrl={route('admin.misc.edit', { id: misc.id })}
                  deleteConfirmMessage="Are you sure to delete this misc?"
                  onDelete={() =>
                    router.delete(route('admin.misc.destroy', { id: misc.id }))
                  }
                />
              );
            },
          },
        ]}
        records={miscs.data}
      />
      <BasePagination paginatedData={miscs} />
    </>
  );
}
