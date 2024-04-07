import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Tint } from '@/types';
import { Stack } from '@mantine/core';

import TintForm from './TintForm';

interface Props {
  tint: Tint;
}

export default function EditTint({ tint }: Props) {
  const form = useBaseForm(tint);
  const { data, put } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.tint.update', { id: data.id }));
      }}
    >
      <PageTitle title="Edit Tint" />
      <TintForm form={form} />
    </Stack>
  );
}
