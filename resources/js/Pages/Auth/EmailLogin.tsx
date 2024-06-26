import AuthLayout from '@/Components/AuthLayout';
import useBaseForm from '@/Hooks/useBaseForm';
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';

export default function EmailLogin() {
  const { getFieldProps, post } = useBaseForm({
    email: '',
    password: '',
  });

  return (
    <AuthLayout>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          post(route('email-login'));
        }}
      >
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
      </form>
    </AuthLayout>
  );
}
