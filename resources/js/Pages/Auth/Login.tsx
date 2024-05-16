import useBaseForm from '@/Hooks/useBaseForm';
import { Head, Link } from '@inertiajs/react';
import {
  ActionIcon,
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  Image,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { Help, Phone } from '@mui/icons-material';

import safeVisionOpticHubImage from '../../../images/safe-vision-optic-hub.png';

export default function SignIn() {
  const { getFieldProps, post } = useBaseForm({
    email: '',
    password: '',
  });

  return (
    <Flex h="100vh">
      <Head title="Sign In" />
      <Flex style={{ flex: 1 }} justify="center" align="center">
        <Paper
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            post(route('login'));
          }}
        >
          <Image src={safeVisionOpticHubImage} w="fit-content" />
          <TextInput
            label="Email"
            size="md"
            mt="md"
            {...getFieldProps('email')}
          />
          <PasswordInput
            label="Password"
            mt="md"
            size="md"
            {...getFieldProps('password')}
          />
          <Box mt="sm">
            <Anchor component="button" fw={700} underline="always">
              Forgotten your username or password?
            </Anchor>
          </Box>
          <Group justify="space-between" mt="xl" align="center">
            <Checkbox label="Remember me" size="md" />
            <Button w={120} type="submit">
              Login
            </Button>
          </Group>
        </Paper>
      </Flex>
      <BackgroundImage
        src="https://placehold.co/800x960?text=Login+Background"
        style={{ flex: 1 }}
      >
        <Group justify="flex-end" pt="sm" pr="lg">
          <ActionIcon variant="subtle" size="xl">
            <Phone />
          </ActionIcon>
          <ActionIcon variant="subtle" size="xl">
            <Help />
          </ActionIcon>
        </Group>
      </BackgroundImage>
    </Flex>
  );
}
