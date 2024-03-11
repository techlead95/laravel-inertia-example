import useFieldStyles from '@/Hooks/useFieldStyles';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';

export default function CreateOrder() {
  const fieldStyles = useFieldStyles({ blueLabel: true });

  return (
    <Stack>
      <Head title="Order Detail" />
      <Box>
        <Button onClick={() => router.get(route('orders.index'))}>
          Back to Home
        </Button>
      </Box>
      <Grid columns={5} gutter="xl" align="center">
        <Grid.Col span={2}>
          <Stack>
            <TextInput label="Ship To Account" styles={fieldStyles} />
            <TextInput label="Patient First Name" styles={fieldStyles} />
            <TextInput label="Patient Phone" styles={fieldStyles} />
            <TextInput label="Purchase Order" styles={fieldStyles} />
            <TextInput label="Employee Number" styles={fieldStyles} />
            <Group gap="xl">
              <TextInput
                label="Employee Copay Secure Token"
                styles={fieldStyles}
                flex={1}
              />
              <Button mt={25}>Get a Token</Button>
            </Group>
            <Group gap="xl">
              <TextInput label="Card Type" flex={1} styles={fieldStyles} />
              <TextInput label="Card Exp Date" flex={1} styles={fieldStyles} />
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={2}>
          <Stack>
            <TextInput label="Ordered By Account Number" styles={fieldStyles} />
            <TextInput label="Patient Last Name" styles={fieldStyles} />
            <TextInput label="Patient Email" styles={fieldStyles} />
            <TextInput label="Requisition Number" styles={fieldStyles} />
            <TextInput label="Employee Department" styles={fieldStyles} />
            <Group gap="xl">
              <TextInput
                label="Company Card Secure Token"
                styles={fieldStyles}
                flex={1}
              />
            </Group>
            <Group gap="xl">
              <TextInput label="Card Type" flex={1} styles={fieldStyles} />
              <TextInput label="Card Exp Date" flex={1} styles={fieldStyles} />
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1}>
          <Stack gap={6}>
            <Text c="blue" fw="bold" ml={50}>
              Job Type
            </Text>
            <Stack gap="sm">
              <Checkbox label="New Job" />
              <Checkbox label="Remake \ Warranty" />
            </Stack>
          </Stack>
          <Stack gap={6} mt="xl">
            <Text c="blue" fw="bold" ml={50}>
              Eyes
            </Text>
            <Stack gap="sm">
              <Checkbox label="Both" />
              <Checkbox label="Left" />
              <Checkbox label="Right" />
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
