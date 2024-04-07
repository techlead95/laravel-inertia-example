import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Tint } from '@/types';
import { Stack } from '@mantine/core';

import TintForm from './TintForm';

export default function CreateTint() {
  const form = useBaseForm<Tint>();
  const { post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.tint.store'));
      }}
    >
      <PageTitle title="Create Tint" />
      <TintForm form={form} />
    </Stack>
  );
}
