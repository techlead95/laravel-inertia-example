import { Head } from '@inertiajs/react';
import { Group, Text } from '@mantine/core';

export default function AdminHome() {
  return (
    <>
      <Head title="Admin Home" />
      <Group justify="center">
        <Text size="lg" fw="bold">
          Optic 2 Back End Admin
        </Text>
      </Group>
    </>
  );
}
