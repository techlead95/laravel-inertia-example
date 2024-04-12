import BaseAutocomplete from '@/Components/BaseAutocomplete';
import useBaseForm from '@/Hooks/useBaseForm';
import {
  Frame,
  FrameAddon,
  FrameBrand,
  FrameCollection,
  FrameDefaultGroup,
  FrameEdge,
  FrameLimitation,
  FrameMaterial,
  FrameType,
  PageProps,
  Shield,
  ShieldColor,
} from '@/types';
import { Link } from '@inertiajs/react';
import { Button, Group, Select, Stack, Tabs } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import AddOnsPanel from './AddOnsPanel';
import FramePanel from './FramePanel';
import FrameTabsPanel from './FrameTabsPanel';
import InventoryPanel from './InventoryPanel';
import LimitationsPanel from './LimitationsPanel';
import PricesPanel from './PricesPanel';
import TranslationsPanel from './TranslationsPanel';

interface Props {
  edges: FrameEdge[];
  materials: FrameMaterial[];
  brands: FrameBrand[];
  collections: FrameCollection[];
  groups: FrameDefaultGroup[];
  frames: FrameType[];
  shields: Shield[];
  shieldColors: ShieldColor[];
  addons: FrameAddon[];
  limitations: FrameLimitation[];
  frame?: Frame;
}

const EMPTY_FRAME: Partial<FrameType> = {
  fr_frame_name: '',
  fr_brand: null,
  fr_collection: null,
  fr_frame_group: null,
  fr_edge: null,
  fr_material: null,
  fr_min_edge: '',
  fr_base_curve_min: '',
  fr_base_curve_max: '',
  fr_min_near_pd: '',
  fr_non_conductive: null,
  fr_tight_fit: null,
  fr_wrap: null,
  fr_notes: '',
};

export default function FrameForm({
  edges,
  materials,
  brands,
  collections,
  groups,
  frames,
  flash,
  shields,
  shieldColors,
  addons,
  limitations,
  frame,
}: PageProps<Props>) {
  const form = useBaseForm<Partial<FrameType>>(EMPTY_FRAME);
  const { getFieldProps, put, post } = form;

  return (
    <>
      <Group justify="space-between" align="flex-start">
        <Stack>
          <Group align="flex-start">
            <Select
              label="Brand"
              data={brands.map((brand) => brand.fb_brand)}
              w={200}
              {...getFieldProps('fr_brand')}
            />
            <BaseAutocomplete
              label="Frame Name"
              w={200}
              data={frames.map((frame) => frame.fr_frame_name)}
              {...getFieldProps('fr_frame_name')}
            />
          </Group>
          <Group align="flex-start">
            <Select
              label="Collection"
              w={200}
              data={collections.map((collection) => collection.fc_collection)}
              {...getFieldProps('fr_collection')}
            />
            <DateInput
              label="Setup Date"
              w={120}
              readOnly
              {...getFieldProps('created_at', { type: 'date' })}
            />
            <DateInput
              label="Last Modified Date"
              w={140}
              readOnly
              {...getFieldProps('updated_at', { type: 'date' })}
            />
            <Button variant="outline" mt={24} w={200}>
              Change Log
            </Button>
            <Select
              label="Default Frame Group"
              data={groups.map((group) => group.fd_group)}
              {...getFieldProps('fr_frame_group')}
            />
          </Group>
        </Stack>
        <Group mt={24}>
          <Button miw={120} type="submit">
            Save
          </Button>
          <Link href={route('admin.frame.catalog')}>
            <Button variant="outline" miw={120}>
              Catalogue
            </Button>
          </Link>
        </Group>
      </Group>
      <Tabs defaultValue="frame">
        <Tabs.List>
          <Tabs.Tab value="frame">Frame</Tabs.Tab>
          {/* <Tabs.Tab value="prices">Prices</Tabs.Tab> */}
          <Tabs.Tab value="addOns">Add-ons</Tabs.Tab>
          <Tabs.Tab value="limitations">Limitations</Tabs.Tab>
          {/* <Tabs.Tab value="inventory">Inventory</Tabs.Tab> */}
          <Tabs.Tab value="translations">Translations</Tabs.Tab>
        </Tabs.List>

        <FrameTabsPanel value="frame">
          <FramePanel
            frameVariations={frame?.variations ?? []}
            edges={edges}
            materials={materials}
            form={form}
          />
        </FrameTabsPanel>

        <FrameTabsPanel value="prices">
          <PricesPanel />
        </FrameTabsPanel>

        <FrameTabsPanel value="addOns">
          <AddOnsPanel
            shields={shields}
            shieldColors={shieldColors}
            addons={addons}
          />
        </FrameTabsPanel>

        <FrameTabsPanel value="limitations">
          <LimitationsPanel limitations={limitations} />
        </FrameTabsPanel>

        <FrameTabsPanel value="inventory">
          <InventoryPanel />
        </FrameTabsPanel>

        <FrameTabsPanel value="translations">
          <TranslationsPanel />
        </FrameTabsPanel>
      </Tabs>
    </>
  );
}
