import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Frame } from '@/types';
import { Stack } from '@mantine/core';

import FrameForm from './FrameForm';
import { FramePageProps } from './FramePage';

interface Props extends FramePageProps {
  frame: Frame;
}

export default function EditFrame({ frame, ...props }: Props) {
  const form = useBaseForm<Frame>(frame);
  const { data, put } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.frame.update', { id: data.id }));
      }}
    >
      <PageTitle title="Edit Frame" showBackButton />
      <FrameForm form={form} frame={frame} {...props} />
    </Stack>
  );
}
