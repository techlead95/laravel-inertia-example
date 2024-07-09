import AuthLayout from '@/Components/AuthLayout';
import { Button, Flex } from '@mantine/core';

export default function Login() {
  return (
    <AuthLayout>
      <Flex mt={36} justify="center">
        <Button
          onClick={() => {
            location.href = '/salesforce/redirect';
          }}
        >
          Login
        </Button>
      </Flex>
    </AuthLayout>
  );
}
