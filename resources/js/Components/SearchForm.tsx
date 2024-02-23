import { Button, Group, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

interface Props {
  initialValue: string;
  onSearch: (newVal: string) => void;
  inputWidth?: number;
  hideClear?: boolean;
}

export default function SearchForm({
  initialValue,
  onSearch,
  inputWidth = 280,
  hideClear,
}: Props) {
  const [value, setValue] = useState(initialValue);

  return (
    <Group
      gap="xs"
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <TextInput
        placeholder="Search"
        w={inputWidth}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rightSection={<Search />}
      />
      <Button type="submit" miw={120} disabled={value === initialValue}>
        Search
      </Button>
      {!hideClear && (
        <Button miw={120} variant="default" disabled={!value}>
          Clear
        </Button>
      )}
    </Group>
  );
}
