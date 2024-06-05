import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Misc } from '@/types';
import { Stack } from '@mantine/core';

import MiscForm from './MiscForm';

export default function CreateMisc() {
  const form = useBaseForm<Misc>();
  const { post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.misc.store'));
      }}
    >
      <PageTitle title="Create Misc" showBackButton />
      <MiscForm form={form} />
    </Stack>
  );
}
