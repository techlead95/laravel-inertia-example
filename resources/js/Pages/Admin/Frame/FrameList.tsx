import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import { Frame, Paginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, Group } from '@mantine/core';

interface Props {
  frames: Paginated<Frame>;
}

export default function Coating({ frames }: Props) {
  return (
    <>
      <Head title="Frame" />
      <Group justify="flex-end" mb="lg">
        <Link href={route('admin.frame.create')}>
          <Button>New Frame</Button>
        </Link>
      </Group>
      <BaseDataTable
        withTableBorder
        columns={[
          { accessor: 'fr_brand', title: 'Brand' },
          { accessor: 'fr_frame_name', title: 'Frame Name' },
          { accessor: 'fr_collection', title: 'Collection' },
          { accessor: 'fr_frame_group', title: 'Default Frame Group' },
          {
            accessor: 'actions',
            title: '',
            textAlign: 'right',
            render(frame) {
              return (
                <EditDeleteActions
                  editUrl={route('admin.frame.edit', { id: frame.id })}
                  deleteConfirmMessage="Are you sure to delete this frame?"
                  onDelete={() =>
                    router.delete(
                      route('admin.frame.destroy', { id: frame.id }),
                    )
                  }
                />
              );
            },
          },
        ]}
        records={frames.data}
      />
      <BasePagination paginatedData={frames} />
    </>
  );
}
