import HeaderIconButton from '@/Components/HeaderIconButton';
import MenuLink from '@/Components/MenuLink';
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
      menuLinks={<MenuLink href="/admin">Admin Home</MenuLink>}
    >
      {children}
    </Layout>
  );
}
