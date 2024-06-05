import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { LensCoating, Mirror } from '@/types';
import { Head } from '@inertiajs/react';
import { Stack } from '@mantine/core';

import MirrorForm from './MirrorForm';

interface Props {
  coatings: LensCoating[];
  mirror: Mirror;
  selectCoatings: string[];
}

export default function MirrorEdit({
  coatings,
  mirror,
  selectCoatings,
}: Props) {
  mirror.mr_coatings = selectCoatings;
  const form = useBaseForm(mirror);
  const { data, setData, put } = form;
  //console.log(lens);
  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.mirror.update', { id: data.id }));
      }}
    >
      <PageTitle title="Edit Mirror" showBackButton />
      <MirrorForm coatings={coatings} form={form} />
    </Stack>
  );
}
