import BaseDataTable from '@/Components/BaseDataTable';
import EditDeleteActions from '@/Components/EditDeleteActions';
import { Misc } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group } from '@mantine/core';

interface Props {
  miscs: Misc[];
}

export default function MiscList({ miscs }: Props) {
  return (
    <>
      <Head title="Misc" />
      <Group justify="flex-end" mb="lg">
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
        records={miscs}
      />
    </>
  );
}
