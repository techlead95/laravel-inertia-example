import { Head } from '@inertiajs/react';
import {
  ActionIcon,
  BackgroundImage,
  Flex,
  Group,
  Image,
  Stack,
} from '@mantine/core';
import { Help, Phone } from '@mui/icons-material';
import { PropsWithChildren } from 'react';

import safeVisionOpticHubImage from '../../images/safe-vision-optic-hub.png';

export default function AuthLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Flex h="100vh">
      <Head title="Sign In" />
      <Stack style={{ flex: 1 }} justify="center" align="center">
        <Stack>
          <Image src={safeVisionOpticHubImage} w="fit-content" />
          {children}
        </Stack>
      </Stack>
      <BackgroundImage
        src="https://placehold.co/800x960?text=Login+Background"
        style={{ flex: 1 }}
      >
      </BackgroundImage>
    </Flex>
  );
}
