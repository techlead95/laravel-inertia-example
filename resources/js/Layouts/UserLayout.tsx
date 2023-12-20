import HeaderIconButton from '@/Components/HeaderIconButton';
import { Anchor, Box, Container, Group } from '@mantine/core';
import { PropsWithChildren } from 'react';
import {
  FaBell,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';

import logo from '../../images/logo.png';

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Container size="xl">
        <Group justify="space-between" align="center" py="xs">
          <img src={logo} />
          <Group gap={4}>
            <HeaderIconButton
              icon={<FaCog size={24} />}
              label="Admin"
              href="/admin"
            />
            <HeaderIconButton icon={<FaBell size={24} />} label="Alerts" />
            <HeaderIconButton
              icon={<FaQuestionCircle size={24} />}
              label="Help"
            />
            <HeaderIconButton icon={<FaUser size={24} />} label="My Account" />
            <HeaderIconButton
              icon={<FaSignOutAlt size={24} />}
              label="Log Out"
              href="/sign-in"
            />
          </Group>
        </Group>
        <Group></Group>
      </Container>
      <Box bg="blue" py="lg">
        <Container size="xl">
          <Group gap="xl">
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
          </Group>
        </Container>
      </Box>
      <Container size="xl">
        <Box py="lg">{children}</Box>
      </Container>
    </div>
  );
}
