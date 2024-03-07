import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Head } from '@inertiajs/react';
import { Button, Group, Stack, Switch, Text, TextInput } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

export default function Coating() {
  const getFieldStyles = useGetFieldStyles();

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
          <TextInput
            label="Coating Group"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="Dvi Translation"
            styles={getFieldStyles({ horizontal: true })}
          />
          <TextInput
            label="Cost"
            styles={getFieldStyles({ horizontal: true })}
          />
        </Stack>
        <Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Optic 2 Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
          </Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Legacy Optic Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
          </Stack>
        </Stack>
      </Group>
      <Stack mt="xl" gap="xl">
        <Switch label="Tint Table" defaultChecked />
        <DataTable
          withTableBorder
          columns={[
            { accessor: 'coating', title: 'Coating' },
            { accessor: 'coatingGroup', title: 'Coating Group' },
            { accessor: 'opticTranslation', title: 'Optic Translation' },
            { accessor: 'dviTranslation', title: 'Dvi Translation' },
            { accessor: 'optic2CoatAddCode', title: 'Optic 2 Coat Add Code' },
            { accessor: 'legacyCoatAddCode', title: 'Legacy Coat Add Code' },
          ]}
          records={[
            {
              id: 1,
              coating: 'Clarity Shield',
              coatingGroup: 'Hard Coat',
              opticTranslation: 'CL',
              dviTranslation: 'HCS',
              optic2CoatAddCode: '',
              legacyCoatAddCode: '10',
            },
            {
              id: 2,
              coating: 'Clear Away EZ Clean',
              coatingGroup: 'Hard Coat',
              opticTranslation: 'SG',
              dviTranslation: 'SG',
              optic2CoatAddCode: '',
              legacyCoatAddCode: '10',
            },
          ]}
        />
      </Stack>
    </>
  );
}
