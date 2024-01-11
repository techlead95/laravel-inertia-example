import HeaderIconButton from '@/Components/HeaderIconButton';
import MenuLink from '@/Components/MenuLink';
import { Settings } from '@mui/icons-material';
import { PropsWithChildren } from 'react';

import Layout from './Layout';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      headerButtons={
        <HeaderIconButton
          icon={<Settings />}
          label="Back to Optic 2"
          href="/"
        />
      }
      menuLinks={
        <>
          <MenuLink href="/admin">Admin Home</MenuLink>
          <MenuLink href="/admin/frame">Frame</MenuLink>
          <MenuLink href="/admin/lens">Lens</MenuLink>
        </>
      }
    >
      {children}
    </Layout>
  );
}
