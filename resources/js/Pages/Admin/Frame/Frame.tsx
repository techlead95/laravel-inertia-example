import { FrameEdge, FrameMaterial, FrameType } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button, Group, Stack, Tabs, TextInput } from '@mantine/core';

import AddOnsPanel from './AddOnsPanel';
import FramePanel from './FramePanel';
import FrameTabsPanel from './FrameTabsPanel';
import InventoryPanel from './InventoryPanel';
import LimitationsPanel from './LimitationsPanel';
import PricesPanel from './PricesPanel';
import TranslationsPanel from './TranslationsPanel';

interface Props {
  frames: FrameType[];
  edges: FrameEdge[];
  materials: FrameMaterial[];
}

export default function Frame({ frames, edges, materials }: Props) {
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
              <Link href={route('admin.frame.catalog')}>
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
            <Tabs.Tab value="addOns">Add-ons</Tabs.Tab>
            <Tabs.Tab value="limitations">Limitations</Tabs.Tab>
            <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
            <Tabs.Tab value="translations">Translations</Tabs.Tab>
          </Tabs.List>

          <FrameTabsPanel value="frame">
            <FramePanel frames={frames} edges={edges} materials={materials} />
          </FrameTabsPanel>

          <FrameTabsPanel value="prices">
            <PricesPanel />
          </FrameTabsPanel>

          <FrameTabsPanel value="addOns">
            <AddOnsPanel />
          </FrameTabsPanel>

          <FrameTabsPanel value="limitations">
            <LimitationsPanel />
          </FrameTabsPanel>

          <FrameTabsPanel value="inventory">
            <InventoryPanel />
          </FrameTabsPanel>

          <FrameTabsPanel value="translations">
            <TranslationsPanel />
          </FrameTabsPanel>
        </Tabs>
      </Stack>
    </>
  );
}
