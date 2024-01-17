import { inputHorizontalStyles } from '@/utils';
import { Head } from '@inertiajs/react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';

export default function Tint() {
  return (
    <>
      <Head title="Tint" />
      <Group justify="space-between">
        <Group>
          <TextInput label="Tint Color" />
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
          <TextInput label="Tint Group" styles={inputHorizontalStyles} />
          <TextInput label="Tint Lower Range" styles={inputHorizontalStyles} />
          <TextInput label="Tint Upper Range" styles={inputHorizontalStyles} />
          <TextInput label="Default %" styles={inputHorizontalStyles} />
          <TextInput label="Optic Translation" styles={inputHorizontalStyles} />
          <TextInput label="Dvi Tint Drop" styles={inputHorizontalStyles} />
          <TextInput label="Dvi Tint Color" styles={inputHorizontalStyles} />
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
    </>
  );
}
