import { Box, BoxProps, Button, Group, Text } from '@mantine/core';
import { DateInput, DateValue } from '@mantine/dates';
import { useState } from 'react';

interface Props extends BoxProps {
  label?: string;
}

export default function DateRangeFilterForm({ label, ...props }: Props) {
  const [startDate, setStartDate] = useState<DateValue>(null);
  const [endDate, setEndDate] = useState<DateValue>(null);

  return (
    <Box {...props}>
      {label && <Text fw={500}>{label}</Text>}
      <Group
        gap="xs"
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DateInput value={startDate} onChange={setStartDate} />
        <DateInput
          value={endDate}
          onChange={setEndDate}
          {...(startDate && { minDate: startDate })}
        />
        <Button type="submit">Apply Filter</Button>
        <Button variant="default">Reset</Button>
      </Group>
    </Box>
  );
}
