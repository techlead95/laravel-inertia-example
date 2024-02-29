import { Button, Group, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

interface Props {
  initialValue?: string | null;
  onSearch: (newVal: string | null) => void;
  inputWidth?: number;
  hideClear?: boolean;
}

export default function SearchForm({
  initialValue,
  onSearch,
  inputWidth = 280,
  hideClear,
}: Props) {
  const [value, setValue] = useState(initialValue ?? '');

  return (
    <Group
      gap="xs"
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value ? value : null);
      }}
    >
      <TextInput
        placeholder="Search"
        w={inputWidth}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rightSection={<Search />}
      />
      <Button type="submit" miw={120} disabled={value === (initialValue ?? '')}>
        Search
      </Button>
      {!hideClear && (
        <Button
          miw={120}
          variant="default"
          disabled={!value}
          onClick={() => onSearch('')}
        >
          Clear
        </Button>
      )}
    </Group>
  );
}
