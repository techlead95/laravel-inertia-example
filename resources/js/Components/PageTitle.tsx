import { Head } from '@inertiajs/react';
import { Title } from '@mantine/core';

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <>
      <Head title={title} />
      <Title order={1}>{title}</Title>
    </>
  );
}
