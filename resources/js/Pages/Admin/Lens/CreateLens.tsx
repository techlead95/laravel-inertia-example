import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Lens, LensCoating, LensMaterial, LensStyle } from '@/types';
import { Stack } from '@mantine/core';

import LensForm from './LensForm';

interface Props {
  styles: LensStyle[];
  materials: LensMaterial[];
  coatings: LensCoating[];
}

export default function CreateLens({ styles, materials, coatings }: Props) {
  const form = useBaseForm<Lens>();

  const { post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.lens.store'));
      }}
    >
      <PageTitle title="Create Lens" showBackButton />
      <LensForm
        styles={styles}
        materials={materials}
        coatings={coatings}
        form={form}
      />
    </Stack>
  );
}
