import { LensMaterial } from '@/types';
import { MultiSelect, Stack, Text } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  frameId: number;
  lensMaterialLimitations: LensMaterial[];
  materials: LensMaterial[];
}

export default function LensMaterialLimitations({
  frameId,
  lensMaterialLimitations,
  materials,
}: Props) {
  const options = materials.map((material) => ({
    value: String(material.id),
    label: material.lm_lens_material,
  }));

  const [value, setValue] = useState(
    lensMaterialLimitations.map((limitation) => String(limitation.id)),
  );

  const debouncedUpdate = useDebouncedCallback(() => {
    axios.put(route('admin.frames.update-lens-material-limitations', frameId), {
      limitations: value,
    });
  }, 500);

  return (
    <Stack flex={1}>
      <Text fw="bold" size="lg">
        Lens Material Limitations
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
