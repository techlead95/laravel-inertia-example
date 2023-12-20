import HeaderIconButton from '@/Components/HeaderIconButton';
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
      menuItems={
        <>
          <Anchor component="button" c="white" fw="bold">
            Home
          </Anchor>
          <Anchor component="button" c="white" fw="bold">
            Orders
          </Anchor>
          <Anchor component="button" c="white" fw="bold">
            New Order
          </Anchor>
          <Anchor component="button" c="white" fw="bold">
            Customers
          </Anchor>
          <Anchor component="button" c="white" fw="bold">
            Products
          </Anchor>
          <Anchor component="button" c="white" fw="bold">
            My Links
          </Anchor>
          <Anchor component="button" c="white" fw="bold">
            Product Back Orders
          </Anchor>
        </>
      }
    >
      {children}
    </Layout>
  );
}
