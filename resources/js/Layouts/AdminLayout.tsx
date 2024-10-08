import MenuLink from '@/Components/MenuLink';
import { PropsWithChildren } from 'react';

import Layout from './Layout';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      headerButtons={null}
      menuLinks={
        <>
          <MenuLink href="/admin">Admin Home</MenuLink>
          <MenuLink href="/admin/frame">Frame</MenuLink>
          <MenuLink href="/admin/lens">Lens</MenuLink>
          <MenuLink href={route('admin.coatings.index')}>Coating</MenuLink>
          <MenuLink href="/admin/tint">Tint</MenuLink>
          <MenuLink href="/admin/mirror">Mirror</MenuLink>
          <MenuLink href="/admin/misc">Misc</MenuLink>
        </>
      }
    >
      {children}
    </Layout>
  );
}
