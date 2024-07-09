import HeaderIconButton from '@/Components/HeaderIconButton';
import { PageProps } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Box, Container, Flex, Group } from '@mantine/core';
import { Help, Logout, Notifications, Person } from '@mui/icons-material';
import { PropsWithChildren, ReactNode } from 'react';

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
  const { props } = usePage<PageProps<{}>>();
  const user = props.auth.user;

  return (
    <Flex h="100%" direction="column">
      <Box>
        <Container size="xl">
          <Group justify="space-between" align="center" py="xs">
            <img src={safeVisionImage} />
            <Group gap={4}>
              {user.approved && (
                <>
                  {headerButtons}
                </>
              )}
              <HeaderIconButton
                icon={<Logout />}
                label="Log Out"
                onClick={() => {
                  router.post(route('logout'));
                }}
              />
            </Group>
          </Group>
          <Group></Group>
        </Container>
      </Box>

      <Box bg="blue" py="lg">
        <Container size="xl" mih={24}>
          {user.approved && <Group gap="xl">{menuLinks}</Group>}
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
