import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { LensCoating } from '@/types';
import { Stack } from '@mantine/core';

import CoatingForm from './CoatingForm';

interface Props {
  coating: LensCoating;
}

export default function CoatingEdit({ coating }: Props) {
  const form = useBaseForm(coating);
  const { data, put } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.coatings.update', { id: data.id }));
      }}
    >
      <PageTitle title="Edit Coating" />
      <CoatingForm form={form} />
    </Stack>
  );
}
