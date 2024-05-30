import PageTitle from '@/Components/PageTitle';
import { Text } from '@mantine/core';

export default function NeedApproval() {
  return (
    <>
      <PageTitle title="Need Approval" />
      <Text mt="lg">
        Your account requires approval to access this functionality. Please wait
        for the necessary permissions to be granted.
      </Text>
    </>
  );
}
