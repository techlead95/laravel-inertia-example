import { createInertiaApp } from '@inertiajs/react';
import {
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import 'mantine-datatable/styles.layer.css';
import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

import '../css/app.css';
import AdminLayout from './Layouts/AdminLayout';
import UserLayout from './Layouts/UserLayout';
import './bootstrap';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const blue: MantineColorsTuple = [
  '#e8f3ff',
  '#d0e4ff',
  '#9ec7fc',
  '#69a7fb',
  '#418dfa',
  '#2a7cfa',
  '#1e74fb',
  '#1062e1',
  '#0057c9',
  '#004bb2',
];

const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 8,
  black: '#333333',
  colors: {
    blue,
  },
});

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const page = (await resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx'),
    )) as any;

    page.default.layout =
      page.default.layout ||
      ((page: ReactNode) =>
        name.startsWith('Public/') ? (
          page
        ) : name.startsWith('Admin/') ? (
          <AdminLayout children={page} />
        ) : (
          <UserLayout children={page} />
        ));
    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <MantineProvider theme={theme}>
        <App {...props} />
      </MantineProvider>,
    );
  },
  progress: {
    color: '#4B5563',
  },
});