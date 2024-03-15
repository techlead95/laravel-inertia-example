import BaseAlert from '@/Components/BaseAlert';
import useBaseForm from '@/Hooks/useBaseForm';
import {
  FrameBrand,
  FrameCollection,
  FrameDefaultGroup,
  FrameEdge,
  FrameMaterial,
  FrameType,
  PageProps,
} from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
  Autocomplete,
  Button,
  Group,
  Select,
  Stack,
  Tabs,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useEffect, useMemo } from 'react';

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
}

export default function Frame({
  edges,
  materials,
  brands,
  collections,
  groups,
  frames,
  flash,
}: PageProps<Props>) {
  const form = useBaseForm<Partial<FrameType>>();
  const { getFieldProps, data, setData, clearErrors, put, post } = form;

  const selectedFrame = useMemo(() => {
    return frames.find((frame) => frame.fr_frame_name === data.fr_frame_name);
  }, [frames, data.fr_frame_name]);

  useEffect(() => {
    clearErrors();

    if (selectedFrame) {
      setData(selectedFrame);
    } else {
      setData({
        fr_frame_name: data.fr_frame_name,
        fr_brand: null,
        fr_collection: null,
        fr_frame_group: null,
      });
    }
  }, [selectedFrame]);

  return (
    <>
      <Head title="Frame" />
      <Stack component="form">
        {flash.success && (
          <BaseAlert title={flash.success} timestamp={flash.timestamp} />
        )}
        <Group
          justify="space-between"
          align="flex-start"
          onSubmit={(e) => {
            e.preventDefault();

            if (selectedFrame) {
              put(route('admin.frame.update', { id: selectedFrame.id }));
            } else {
              post(route('admin.frame.store'));
            }
          }}
        >
          <Stack>
            <Group align="flex-start">
              <Select
                label="Brand"
                data={brands.map((brand) => brand.fb_brand)}
                w={200}
                {...getFieldProps('fr_brand')}
              />
              <Autocomplete
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
              {selectedFrame ? 'Save' : 'Add New'}
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
            <Tabs.Tab value="prices">Prices</Tabs.Tab>
            <Tabs.Tab value="addOns">Add-ons</Tabs.Tab>
            <Tabs.Tab value="limitations">Limitations</Tabs.Tab>
            <Tabs.Tab value="inventory">Inventory</Tabs.Tab>
            <Tabs.Tab value="translations">Translations</Tabs.Tab>
          </Tabs.List>

          <FrameTabsPanel value="frame">
            <FramePanel
              frameVariations={selectedFrame?.variations ?? []}
              edges={edges}
              materials={materials}
              form={form}
            />
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
