import HeaderIconButton from '@/Components/HeaderIconButton';
import MenuLink from '@/Components/MenuLink';
import { Anchor } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { FaCog } from 'react-icons/fa';

import Layout from './Layout';

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      headerButtons={
        <HeaderIconButton
          icon={<FaCog size={24} />}
          label="Admin"
          href="/admin"
        />
      }
      menuLinks={
        <>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/orders">Orders</MenuLink>
          <MenuLink href="/new-order">New Order</MenuLink>
          <MenuLink href="/customers">Customers</MenuLink>
          <MenuLink href="/products">Products</MenuLink>
          <MenuLink href="/my-links">My Links</MenuLink>
          <MenuLink href="/product-back-orders">Product Back Orders</MenuLink>
        </>
      }
    >
      {children}
    </Layout>
  );
}
