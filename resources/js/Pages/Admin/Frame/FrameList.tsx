import BaseDataTable from '@/Components/BaseDataTable';
import BasePagination from '@/Components/BasePagination';
import EditDeleteActions from '@/Components/EditDeleteActions';
import MultiSearchForm from '@/Components/MultiSearchForm';
import { Frame, Paginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Button, CloseButton, Group, TextInput } from '@mantine/core';

interface Props {
  frames: Paginated<Frame>;
  brand?: string;
  frame_name?: string;
  collection?: string;
  frame_group?: string;
}

export default function Coating({
  frames,
  brand,
  frame_name,
  collection,
  frame_group,
}: Props) {
  return (
    <>
      <Head title="Frame" />
      <Group justify="space-between" mb="lg">
        <MultiSearchForm
          initialValues={{ brand, frame_name, collection, frame_group }}
          onSearch={(newValues) => {
            router.get(route('admin.frame.index', newValues ?? {}));
          }}
        >
          {({ getFieldProps }) => (
            <>
              <TextInput
                placeholder="Filter by Brand"
                {...getFieldProps('brand')}
              />
              <TextInput
                placeholder="Filter by Frame Name"
                {...getFieldProps('frame_name')}
              />
              <TextInput
                placeholder="Filter by Collection"
                {...getFieldProps('collection')}
              />
              <TextInput
                placeholder="Filter by Frame Group"
                {...getFieldProps('frame_group')}
              />
            </>
          )}
        </MultiSearchForm>
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
