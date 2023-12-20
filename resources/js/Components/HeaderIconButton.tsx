import { Link } from '@inertiajs/react';
import { Button, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  label: ReactNode;
  href?: string;
}

export default function HeaderIconButton({ icon, label, href }: Props) {
  return (
    <Link href={href ?? '#'}>
      <Button variant="subtle" h={64} miw={72} px={4}>
        <Stack align="center" gap={4}>
          {icon}
          <Text size="xs" fw="bold">
            {label}
          </Text>
        </Stack>
      </Button>
    </Link>
  );
}
