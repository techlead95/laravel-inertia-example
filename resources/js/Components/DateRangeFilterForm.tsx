import { Group } from '@mantine/core';

export default function DateRangeFilterForm() {
  return (
    <div>
      <Group
        gap="xs"
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      ></Group>
    </div>
  );
}
