import BaseAutocomplete from '@/Components/BaseAutocomplete';
import useBaseForm from '@/Hooks/useBaseForm';
import { Frame } from '@/types';
import { Button, Group, Select, Stack, Tabs } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import AddOnsPanel from './AddOnsPanel';
import { FramePageProps } from './FramePage';
import FramePanel from './FramePanel';
import FrameTabsPanel from './FrameTabsPanel';
import LimitationsPanel from './LimitationsPanel';
import TranslationsPanel from './TranslationsPanel';

export interface Props extends FramePageProps {
  frame?: Frame;
  form: ReturnType<typeof useBaseForm<Frame>>;
}

export default function FrameForm({
  edges,
  materials,
  brands,
  collections,
  groups,
  frames,
  shields,
  shieldColors,
  addons,
  limitations,
  frame,
  form,
}: Props) {
  const { getFieldProps } = form;

  return (
    <>
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
      <Group>
        <Button type="submit">Save</Button>
        <Button variant="outline" onClick={() => history.back()}>
          Cancel
        </Button>
      </Group>

      {frame && (
        <Tabs defaultValue="frame">
          <Tabs.List>
            <Tabs.Tab value="frame">Frame</Tabs.Tab>
            <Tabs.Tab value="addOns">Add-ons</Tabs.Tab>
            <Tabs.Tab value="limitations">Limitations</Tabs.Tab>
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

          <FrameTabsPanel value="translations">
            <TranslationsPanel />
          </FrameTabsPanel>
        </Tabs>
      )}
    </>
  );
}
