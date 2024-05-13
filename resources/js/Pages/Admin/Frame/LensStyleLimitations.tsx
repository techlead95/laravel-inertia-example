import { LensStyle } from '@/types';
import { MultiSelect, Stack, Text } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  frameId: number;
  lensStyleLimitations: LensStyle[];
  styles: LensStyle[];
}

export default function LensStyleLimitations({
  frameId,
  lensStyleLimitations,
  styles,
}: Props) {
  const options = styles.map((style) => ({
    value: String(style.id),
    label: style.ls_lenstyl_lens_style,
  }));

  const [value, setValue] = useState(
    lensStyleLimitations.map((limitation) => String(limitation.id)),
  );

  const debouncedUpdate = useDebouncedCallback(() => {
    axios.put(route('admin.frames.update-lens-style-limitations', frameId), {
      limitations: value,
    });
  }, 500);

  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Lens Style Limitations
      </Text>
      <MultiSelect
        data={options}
        value={value}
        onChange={(newVal) => {
          setValue(newVal);
          debouncedUpdate();
        }}
      />
    </Stack>
  );
}
