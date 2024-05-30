import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { LensCoating } from '@/types';
import { Button, Group, Stack, Text, TextInput, Switch } from '@mantine/core';
import { DateInput } from '@mantine/dates';

interface Props {
  form: ReturnType<typeof useBaseForm<LensCoating>>;
}

export default function CoatingForm({ form }: Props) {
  const { data, setData, getFieldProps } = form;
  const getFieldStyles = useGetFieldStyles();

  //console.log(data.lc_tintable);

  return (
    <>
      <Group justify="space-between">
        <Group>
          <TextInput label="Coating" {...getFieldProps('lc_lens_coating')} />
          <DateInput
            label="Setup Date"
            w={140}
            readOnly
            disabled
            value={data.created_at ? new Date(data.created_at) : null}
          />
          <TextInput
            label="Setup By"
            w={140}
            readOnly
            disabled
            value={data.lc_setup_by ?? ''}
          />
          <DateInput
            label="Last Modified Date"
            w={140}
            readOnly
            disabled
            value={data.updated_at ? new Date(data.updated_at) : null}
          />
          <TextInput
            label="Modified By"
            w={140}
            readOnly
            disabled
            value={data.lc_last_modified_by ?? ''}
          />
        </Group>
      </Group>
      <Group align="flex-start">
        <Stack>

          <Switch
            label="Tintable"
            checked={true == data.lc_tintable}
            onChange={(event) => setData('lc_tintable', event.currentTarget.checked)}
          />
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
    </>
  );
}
