import BaseDataTable from '@/Components/BaseDataTable';
import EditDeleteActions from '@/Components/EditDeleteActions';
import { Tint } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group } from '@mantine/core';

interface Props {
  tints: Tint[];
}

export default function TintList({ tints }: Props) {
  return (
    <>
      <Head title="Tint" />
      <Group justify="flex-end" mb="lg">
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
        records={tints}
      />
    </>
  );
}
