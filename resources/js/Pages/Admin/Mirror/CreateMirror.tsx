import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { LensCoating, Mirror } from '@/types';
import { Stack } from '@mantine/core';

import MirrorForm from './MirrorForm';

interface Props {
  coatings: LensCoating[];
}

export default function CreateMirror({ coatings }: Props) {
  const form = useBaseForm<Mirror>();

  const { post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.mirror.store'));
      }}
    >
      <PageTitle title="Create Mirror" showBackButton />
      <MirrorForm coatings={coatings} form={form} />
    </Stack>
  );
}
