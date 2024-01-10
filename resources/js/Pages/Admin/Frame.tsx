import { inputHorizontalStyles } from '@/utils';
import { Head, Link } from '@inertiajs/react';
import {
  Button,
  Group,
  Stack,
  Switch,
  Tabs,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DataTable } from 'mantine-datatable';

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
              <Link href="/admin/frame/catalog">
                <Button variant="outline" miw={120}>
                  Catalogue
                </Button>
              </Link>
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
        <Tabs defaultValue="frame">
          <Tabs.List>
            <Tabs.Tab value="frame">Frame</Tabs.Tab>
            <Tabs.Tab value="prices">Prices</Tabs.Tab>
            <Tabs.Tab value="addons">Addons</Tabs.Tab>
            <Tabs.Tab value="limitations">Limitations</Tabs.Tab>
            <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
            <Tabs.Tab value="translations">Translations</Tabs.Tab>
            <Tabs.Tab value="future">Future</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="frame">
            <Stack bg="#f2f2f2" p="md">
              <DataTable
                columns={[
                  { accessor: 'eye', title: 'Eye' },
                  { accessor: 'bridge', title: 'Bridge' },
                  { accessor: 'templeType', title: 'Temple Type' },
                  { accessor: 'color', title: 'Color' },
                  { accessor: 'a', title: 'A' },
                  { accessor: 'b', title: 'B' },
                  { accessor: 'ed', title: 'ED' },
                  { accessor: 'dbl', title: 'DBL' },
                  {
                    accessor: 'nonDigitalDefaultSeg',
                    title: 'Non Digital Default Seg',
                  },
                  {
                    accessor: 'digitalDefaultSeg',
                    title: 'Digital Default Seg',
                  },
                ]}
                records={[
                  {
                    eye: '1',
                    bridge: '2',
                    templteType: '3',
                    color: '4',
                    a: '5',
                    b: '6',
                    ed: '7',
                    dbl: '8',
                    nonDigitalDefaultSeg: '9',
                    digitalDefaultSeg: '10',
                  },
                ]}
              />
              <Group component="form" align="flex-start">
                <Stack gap="xs">
                  <TextInput label="Edge" styles={inputHorizontalStyles} />
                  <TextInput label="Material" styles={inputHorizontalStyles} />
                  <TextInput label="Min Edge" styles={inputHorizontalStyles} />
                  <TextInput
                    label="Base Curve Min"
                    styles={inputHorizontalStyles}
                  />
                  <TextInput
                    label="Base Curve Max"
                    styles={inputHorizontalStyles}
                  />
                  <TextInput
                    label="Minimum Near PD"
                    styles={inputHorizontalStyles}
                  />
                  <TextInput label="Edge" styles={inputHorizontalStyles} />
                  <Switch defaultChecked label="Non-Conductive" ml={166} />
                  <Switch defaultChecked label="Tight Fit" ml={166} />
                  <Switch defaultChecked label="Wrap" ml={166} />
                </Stack>
                <Textarea
                  label="Notes"
                  styles={inputHorizontalStyles}
                  rows={4}
                  miw={580}
                />
              </Group>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  );
}
