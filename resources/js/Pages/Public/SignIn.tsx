import { Head, Link } from '@inertiajs/react';
import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { Help, Phone } from '@mui/icons-material';

import safeVisionOpticHubImage from '../../../images/safe-vision-optic-hub.png';

export default function SignIn() {
  return (
    <Flex h="100%">
      <Head title="Sign In" />
      <Flex style={{ flex: 1 }} justify="center" py={200}>
        <Paper>
          <Image src={safeVisionOpticHubImage} w="fit-content" />
          <TextInput label="Username" size="md" mt="md" />
          <PasswordInput label="Password" mt="md" size="md" />
          <Box mt="sm">
            <Anchor component="button" fw={700} underline="always">
              Forgotten your username or password?
            </Anchor>
          </Box>
          <Group justify="space-between" mt="xl" align="center">
            <Checkbox label="Remember me" size="md" />
            <Link href="/">
              <Button w={120}>Login</Button>
            </Link>
          </Group>
        </Paper>
      </Flex>
      <BackgroundImage
        src="https://placehold.co/800x960?text=Login+Background"
        style={{ flex: 1 }}
      >
        <Flex justify="flex-end" pt="sm" pr="lg">
          <Group gap={0}>
            <Button variant="subtle" w={56} h={56} p={0}>
              <Phone />
            </Button>
            <Button variant="subtle" w={56} h={56} p={0}>
              <Help />
            </Button>
          </Group>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
}
