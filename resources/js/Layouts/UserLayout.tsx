import MenuLink from '@/Components/MenuLink';
import { PropsWithChildren } from 'react';

import Layout from './Layout';

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      headerButtons={null}
      menuLinks={
        <>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href={route('orders.index')}>Orders</MenuLink>
          <MenuLink href={route('orders.create')}>New Order</MenuLink>
          <MenuLink href="/technical-documents">Technical Documents</MenuLink>
          <MenuLink href="/news">News</MenuLink>
          <MenuLink href="/my-hoya-links">My Hoya Links</MenuLink>
          <MenuLink href="/frame-availability">Frame Availability</MenuLink>
        </>
      }
    >
      {children}
    </Layout>
  );
}
