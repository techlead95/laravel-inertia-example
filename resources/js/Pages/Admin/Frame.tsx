import { Head } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';

export default function Frame() {
  return (
    <>
      <Head title="Frame" />
      <Stack>
        <Group justify="space-between" align="flex-start">
          <Stack>
            <Group>
              <TextInput label="Brand" w={150} />
              <TextInput label="Frame Name" w={200} />
            </Group>
            <Group>
              <TextInput label="Collection" w={200} />
              <TextInput label="Setup Date" w={120} />
              <TextInput label="Last Modified Date" w={200} />
              <Button variant="outline" mt={24} w={200}>
                Change Log
              </Button>
              <TextInput label="Default Frame Group" />
            </Group>
          </Stack>
          <Stack>
            <Group mt={24}>
              <Button variant="outline" miw={120}>
                Add New
              </Button>
              <Button variant="outline" miw={120}>
                Catalogue
              </Button>
            </Group>
            <Group mt={24}>
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
