import HeaderIconButton from '@/Components/HeaderIconButton';
import { Box, Container, Flex, Group } from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';
import { FaBell, FaQuestionCircle, FaSignOutAlt, FaUser } from 'react-icons/fa';

import safeVisionImage from '../../images/safe-vision.png';

interface Props {
  headerButtons: ReactNode;
  menuLinks: ReactNode;
}

export default function Layout({
  headerButtons,
  menuLinks,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Flex h="100%" direction="column">
      <Box>
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
                href="/help"
              />
              <HeaderIconButton
                icon={<FaUser size={24} />}
                label="My Account"
                href="/my-account"
              />
              <HeaderIconButton
                icon={<FaSignOutAlt size={24} />}
                label="Log Out"
                href="/sign-in"
              />
            </Group>
          </Group>
          <Group></Group>
        </Container>
      </Box>

      <Box bg="blue" py="lg">
        <Container size="xl">
          <Group gap="xl">{menuLinks}</Group>
        </Container>
      </Box>

      <Box style={{ flex: 1 }}>
        <Container size="xl" h="100%">
          <Flex py="xl" direction="column" h="100%">
            {children}
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
