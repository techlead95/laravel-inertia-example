import MenuLink from '@/Components/MenuLink';
import { PropsWithChildren } from 'react';

import Layout from './Layout';

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      headerButtons={null}
      menuLinks={
        <>
          <MenuLink href={route('orders.index')}>Orders</MenuLink>
          <MenuLink href={route('orders.create')}>New Order</MenuLink>
        </>
      }
    >
      {children}
    </Layout>
  );
}
