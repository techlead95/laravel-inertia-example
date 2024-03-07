import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Head } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';

export default function Misc() {
  const getFieldStyles = useGetFieldStyles();

  return (
    <>
      <Head title="Misc" />
      <Group justify="space-between">
        <Group>
          <TextInput label="Misc Item" />
          <TextInput label="Setup Date" w={100} />
          <TextInput label="Setup By" w={100} />
          <TextInput label="Last Modified Date" w={140} />
          <TextInput label="Modified By" w={140} />
        </Group>
        <Group mt={24}>
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
      <Group mt="xl">
        <Stack>
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="DVI Translation"
            styles={getFieldStyles({ horizontal: true })}
          />
        </Stack>
        <Stack>
          <TextInput
            label="O2 Add Code"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="Legacy Add Code"
            styles={getFieldStyles({ horizontal: true })}
          />
        </Stack>
      </Group>
    </>
  );
}
