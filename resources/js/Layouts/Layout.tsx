import HeaderIconButton from '@/Components/HeaderIconButton';
import { Box, Container, Group } from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';
import { FaBell, FaQuestionCircle, FaSignOutAlt, FaUser } from 'react-icons/fa';

import safeVisionImage from '../../images/safe-vision.png';

interface Props {
  headerButtons: ReactNode;
  menuItems: ReactNode;
}

export default function Layout({
  headerButtons,
  menuItems,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div>
      <Container size="xl">
        <Group justify="space-between" align="center" py="xs">
          <img src={safeVisionImage} />
          <Group gap={4}>
            {headerButtons}
            <HeaderIconButton
              icon={<FaBell size={24} />}
              label="Alerts"
              href="/alerts"
            />
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
          <Group gap="xl">{menuItems}</Group>
        </Container>
      </Box>
      <Container size="xl">
        <Box py={64}>{children}</Box>
      </Container>
    </div>
  );
}
