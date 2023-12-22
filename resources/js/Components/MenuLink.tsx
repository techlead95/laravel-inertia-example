import { Link } from '@inertiajs/react';
import { Anchor } from '@mantine/core';
import { PropsWithChildren } from 'react';

export default function MenuLink({
  href,
  children,
}: PropsWithChildren<{ href?: string }>) {
  return (
    <Link href={href ?? '#'} style={{ textDecoration: 'none' }}>
      <Anchor component="button" c="white" fw="bold">
        {children}
      </Anchor>
    </Link>
  );
}
