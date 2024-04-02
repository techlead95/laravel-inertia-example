import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { LensCoating } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';

interface Props {
  coating: LensCoating;
}

export default function CoatingEdit({ coating }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { data, getFieldProps, put } = useBaseForm(coating);

  return (
    <Stack
      component="form"
      gap="xl"
      onSubmit={(e) => {
        e.preventDefault();
        put(route('admin.coatings.update', { id: data.id }));
      }}
    >
      <Head title="Edit Coating" />
      <Group justify="space-between">
        <Group>
          <TextInput label="Coating" {...getFieldProps('lc_lens_coating')} />
          <DateInput
            label="Setup Date"
            w={140}
            readOnly
            value={data.created_at ? new Date(data.created_at) : null}
          />
          <TextInput
            label="Setup By"
            w={140}
            readOnly
            value={data.lc_setup_by ?? ''}
          />
          <DateInput
            label="Last Modified Date"
            w={140}
            readOnly
            value={data.updated_at ? new Date(data.updated_at) : null}
          />
          <TextInput
            label="Modified By"
            w={140}
            readOnly
            value={data.lc_last_modified_by ?? ''}
          />
        </Group>
      </Group>
      <Group align="flex-start">
        <Stack>
          <TextInput
            label="Coating Group"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('lc_coating_group')}
          />
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('lc_o1_translation')}
          />
          <TextInput
            label="Dvi Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('lc_dvi_translation')}
          />
          <TextInput
            label="Cost"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('lc_cost')}
          />
        </Stack>
        <Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Optic 2 Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={getFieldStyles({ horizontal: true })}
              {...getFieldProps('lc_o2_add_code')}
            />
          </Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Legacy Optic Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={getFieldStyles({ horizontal: true })}
              {...getFieldProps('lc_o1_add_code')}
            />
          </Stack>
        </Stack>
      </Group>
      <Group>
        <Button type="submit">Save</Button>
        <Button variant="outline" onClick={() => history.back()}>
          Cancel
        </Button>
      </Group>
    </Stack>
  );
}
