import { inputHorizontalStyles } from '@/utils';
import { Head } from '@inertiajs/react';
import { Button, Group, Stack, Switch, Text, TextInput } from '@mantine/core';

export default function Coating() {
  return (
    <>
      <Head title="Coating" />
      <Group justify="space-between">
        <Group>
          <TextInput label="Coating" />
          <TextInput label="Setup Date" w={100} />
          <TextInput label="Setup By" w={100} />
          <TextInput label="Last Modified Date" w={140} />
          <TextInput label="Modified By" w={140} />
        </Group>
        <Group mt={24}>
          <Button variant="outline" miw={100}>
            Catalogue
          </Button>
          <Button variant="outline" miw={100}>
            Add New
          </Button>
          <Button variant="outline" miw={100}>
            Modify
          </Button>
          <Button variant="outline" miw={100}>
            Exit
          </Button>
        </Group>
      </Group>
      <Group mt="xl" align="flex-start">
        <Stack>
          <TextInput label="Coating Group" styles={inputHorizontalStyles} />
          <TextInput label="Optic Translation" styles={inputHorizontalStyles} />
          <TextInput label="Dvi Translation" styles={inputHorizontalStyles} />
          <TextInput label="Cost" styles={inputHorizontalStyles} />
        </Stack>
        <Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Optic 2 Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={inputHorizontalStyles}
            />
          </Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Legacy Optic Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={inputHorizontalStyles}
            />
          </Stack>
        </Stack>
      </Group>
      <Stack mt="xl">
        <Switch label="Tin Table" />
      </Stack>
    </>
  );
}
