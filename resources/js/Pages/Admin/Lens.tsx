import { Head } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';

export default function Lens() {
  return (
    <>
      <Head title="Lens" />
      <Stack>
        <Group justify="space-between" align="flex-start">
          <Group>
            <TextInput label="Lens Style" />
            <TextInput label="Material" />
            <TextInput label="Color" />
          </Group>
          <Stack>
            <Group mt={24}>
              <Button variant="outline" miw={120}>
                Add New
              </Button>
              <Button variant="outline" miw={120}>
                Catalogue
              </Button>
            </Group>
            <Group>
              <Button variant="outline" miw={120}>
                Modify
              </Button>
              <Button variant="outline" miw={120}>
                Exit
              </Button>
            </Group>
          </Stack>
        </Group>
      </Stack>
    </>
  );
}
