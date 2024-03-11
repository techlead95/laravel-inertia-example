import useFieldStyles from '@/Hooks/useFieldStyles';
import { Head } from '@inertiajs/react';
import { Box, Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

export default function Tint() {
  const fieldStyles = useFieldStyles({ horizontal: true });

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
          <TextInput label="Tint Group" styles={fieldStyles} />
          <TextInput label="Tint Lower Range" styles={fieldStyles} />
          <TextInput label="Tint Upper Range" styles={fieldStyles} />
          <TextInput label="Default %" styles={fieldStyles} />
          <TextInput label="Optic Translation" styles={fieldStyles} />
          <TextInput label="Dvi Tint Drop" styles={fieldStyles} />
          <TextInput label="Dvi Tint Color" styles={fieldStyles} />
        </Stack>
        <Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Optic 2 Add Code</Text>
            <TextInput label="Coating Add Code" styles={fieldStyles} />
          </Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Legacy Optic Add Code</Text>
            <TextInput label="Coating Add Code" styles={fieldStyles} />
          </Stack>
        </Stack>
      </Group>
      <Box mt="xl">
        <DataTable
          withTableBorder
          columns={[
            { accessor: 'tintColor', title: 'Tint Color' },
            { accessor: 'tintGroup', title: 'Tint Group' },
            { accessor: 'lowerRange', title: 'Lower Range' },
            { accessor: 'upperRange', title: 'Upper Range' },
            { accessor: 'opticTranslation', title: 'Optic Translation' },
          ]}
          records={[
            {
              id: 1,
              tintColor: 'Grey',
              tintGroup: 'Tint 1',
              lowerRange: 5,
              upperRange: 25,
              opticTranslation: 'GY1',
            },
            {
              id: 2,
              tintColor: 'Grey',
              tintGroup: 'Tint 2',
              lowerRange: 30,
              upperRange: 50,
              opticTranslation: 'GY2',
            },
            {
              id: 3,
              tintColor: 'Grey',
              tintGroup: 'Tint 3',
              lowerRange: 55,
              upperRange: 85,
              opticTranslation: 'GY3',
            },
            {
              id: 4,
              tintColor: 'Brown',
              tintGroup: 'Tint 1',
              lowerRange: 5,
              upperRange: 25,
              opticTranslation: 'BRN',
            },
            {
              id: 5,
              tintColor: 'Brown',
              tintGroup: 'Tint 2',
              lowerRange: 30,
              upperRange: 50,
              opticTranslation: 'BN2',
            },
            {
              id: 6,
              tintColor: 'Brown',
              tintGroup: 'Tint 3',
              lowerRange: 55,
              upperRange: 85,
              opticTranslation: 'BN3',
            },
          ]}
        />
      </Box>
    </>
  );
}
