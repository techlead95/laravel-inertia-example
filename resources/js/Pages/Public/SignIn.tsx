import { Head, Link } from '@inertiajs/react';
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';

import logoLarge from '../../../images/logo-large.png';

export default function SignIn() {
  return (
    <Box
      mih="rem(900px)"
      bgsz="cover"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80)',
      }}
    >
      <Head title="Sign In" />
      <Paper radius={0} p={120} maw={600} mih={900}>
        <img src={logoLarge} />
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
    </Box>
  );
}
