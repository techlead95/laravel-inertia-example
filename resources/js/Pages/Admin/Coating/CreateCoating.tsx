import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { LensCoating } from '@/types';
import { Stack } from '@mantine/core';

import CoatingForm from './CoatingForm';

export default function CreateCoating() {
  const form = useBaseForm<LensCoating>();
  const { post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.coatings.store'));
      }}
    >
      <PageTitle title="Create Coating" showBackButton />
      <CoatingForm form={form} />
    </Stack>
  );
}
