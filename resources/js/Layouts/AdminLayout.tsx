import HeaderIconButton from '@/Components/HeaderIconButton';
import { Anchor } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { FaCog } from 'react-icons/fa';

import Layout from './Layout';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      headerButtons={
        <HeaderIconButton
          icon={<FaCog size={24} />}
          label="Back to Optic 2"
          href="/"
        />
      }
      menuItems={
        <Anchor component="button" c="white" fw="bold">
          Admin Home
        </Anchor>
      }
    >
      {children}
    </Layout>
  );
}
