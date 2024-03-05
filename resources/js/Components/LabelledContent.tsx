import { Stack, StackProps, Text } from '@mantine/core';
import { PropsWithChildren } from 'react';

interface Props extends StackProps {
  label: string;
}

export default function LabelledContent({
  label,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Stack gap={6} {...props}>
      <Text fw="bold" c="blue">
        {label}
      </Text>
      <Text>{children}</Text>
    </Stack>
  );
}
