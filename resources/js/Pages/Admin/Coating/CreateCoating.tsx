import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { LensCoating } from '@/types';
import { Stack } from '@mantine/core';

import CoatingForm from './CoatingForm';

export default function CreateCoating() {
  const form = useBaseForm<LensCoating>();
  const { data, post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.coatings.store'));
      }}
    >
      <PageTitle title="Create Coating" />
      <CoatingForm form={form} />
    </Stack>
  );
}
