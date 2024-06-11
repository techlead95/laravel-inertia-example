import PageTitle from '@/Components/PageTitle';
import useBaseForm from '@/Hooks/useBaseForm';
import { Frame } from '@/types';
import { Stack } from '@mantine/core';

import FrameForm from './FrameForm';
import { FramePageProps } from './FramePage';

export default function CreateFrame(props: FramePageProps) {
  const form = useBaseForm<Frame>();
  const { post } = form;

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        post(route('admin.frame.store'));
      }}
    >
      <PageTitle title="Create Frame" showBackButton />
      <FrameForm form={form} {...props} />
    </Stack>
  );
}
