import { Stack, Tabs, TabsPanelProps } from '@mantine/core';

export default function FrameTabsPanel({ children, ...props }: TabsPanelProps) {
  return (
    <Tabs.Panel {...props}>
      <Stack bg="#f2f2f2" p="md">
        {children}
      </Stack>
    </Tabs.Panel>
  );
}
