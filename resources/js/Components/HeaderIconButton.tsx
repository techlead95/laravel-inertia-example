import { Link } from '@inertiajs/react';
import { Button, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  label: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function HeaderIconButton({
  icon,
  label,
  href,
  onClick,
}: Props) {
  const renderButton = () => (
    <Button variant="subtle" h={64} miw={72} px={4} onClick={onClick}>
      <Stack align="center" gap={4}>
        {icon}
        <Text size="xs" fw="bold">
          {label}
        </Text>
      </Stack>
    </Button>
  );

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
}
