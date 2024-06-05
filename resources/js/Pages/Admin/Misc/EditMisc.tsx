import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Misc } from '@/types';
import { Head } from '@inertiajs/react';
import { Stack } from '@mantine/core';

import MiscForm from './MiscForm';

interface Props {
  misc: Misc;
}

export default function MiscEdit({ misc }: Props) {
  const form = useBaseForm(misc);
  const { data, put } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.misc.update', { id: data.id }));
      }}
    >
      <PageTitle title="Edit Misc" showBackButton />
      <MiscForm form={form} />
    </Stack>
  );
}
