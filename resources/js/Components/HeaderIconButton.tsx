import { Link } from '@inertiajs/react';
import { Button, Stack, Text } from '@mantine/core';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  label: ReactNode;
  href?: string;
  method?: ComponentProps<typeof Link>['method'];
}

export default function HeaderIconButton({ icon, label, href, method }: Props) {
  return (
    <Link href={href ?? '#'} method={method}>
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
