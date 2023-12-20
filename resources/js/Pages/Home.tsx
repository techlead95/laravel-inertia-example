import { Head } from '@inertiajs/react';
import { Group, Text } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Head title="Home"></Head>
      <Group justify="center">
        <Text size="lg" fw="bold">
          Home Page
        </Text>
      </Group>
    </>
  );
}
