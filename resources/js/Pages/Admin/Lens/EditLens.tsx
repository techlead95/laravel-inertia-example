import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Lens, LensCoating, LensMaterial, LensStyle } from '@/types';
import { Stack } from '@mantine/core';

import LensForm from './LensForm';

interface Props {
  styles: LensStyle[];
  materials: LensMaterial[];
  coatings: LensCoating[];
  lens: Lens;
  selectCoatings: string[];
}

export default function LensEdit({
  styles,
  materials,
  coatings,
  lens,
  selectCoatings,
}: Props) {
  lens.le_coatings = selectCoatings;
  const form = useBaseForm(lens);
  const { data, put } = form;
  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.lens.update', { id: data.id }));
      }}
    >
      <PageTitle title="Edit Lens" showBackButton />
      <LensForm
        styles={styles}
        materials={materials}
        coatings={coatings}
        form={form}
      />
    </Stack>
  );
}
