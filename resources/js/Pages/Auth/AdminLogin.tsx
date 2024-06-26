import AuthLayout from '@/Components/AuthLayout';
import { Button, Flex } from '@mantine/core';

export default function AdminLogin() {
  return (
    <AuthLayout>
      <Flex mt={36} justify="center">
        <Button
          onClick={() => {
            location.href = '/azure/redirect';
          }}
        >
          Login with Azure AD
        </Button>
      </Flex>
    </AuthLayout>
  );
}
