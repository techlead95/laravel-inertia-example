import { DATE_DISPLAY_FORMAT } from '@/constants';
import { Box, BoxProps, Button, Group, Text } from '@mantine/core';
import { DateInput, DateValue } from '@mantine/dates';
import dayjs from 'dayjs';
import { useState } from 'react';

interface Props extends BoxProps {
  label?: string;
  initialStartDate?: string | null;
  initialEndDate?: string | null;
  onApply: (newStartDate: string | null, newEndDate: string | null) => void;
}

export default function DateRangeFilterForm({
  label,
  initialStartDate,
  initialEndDate,
  onApply,
  ...props
}: Props) {
  const [startDate, setStartDate] = useState<DateValue>(
    initialStartDate
      ? dayjs(initialStartDate, DATE_DISPLAY_FORMAT).toDate()
      : null,
  );
  const [endDate, setEndDate] = useState<DateValue>(
    initialEndDate ? dayjs(initialEndDate, DATE_DISPLAY_FORMAT).toDate() : null,
  );
  const startDateStr = startDate
    ? dayjs(startDate).format(DATE_DISPLAY_FORMAT)
    : null;
  const endDateStr = endDate
    ? dayjs(endDate).format(DATE_DISPLAY_FORMAT)
    : null;

  return (
    <Box {...props}>
      {label && <Text fw={500}>{label}</Text>}
      <Group
        gap="xs"
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          onApply(startDateStr, endDateStr);
        }}
      >
        <DateInput value={startDate} onChange={setStartDate} />
        <DateInput
          value={endDate}
          onChange={setEndDate}
          {...(startDate && { minDate: startDate })}
        />
        <Button
          type="submit"
          disabled={
            initialStartDate === startDateStr && initialEndDate === endDateStr
          }
        >
          Apply Filter
        </Button>
        <Button
          variant="default"
          disabled={!startDateStr && !endDateStr}
          onClick={() => onApply(null, null)}
        >
          Reset
        </Button>
      </Group>
    </Box>
  );
}
