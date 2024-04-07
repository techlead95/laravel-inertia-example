import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Tint } from '@/types';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';

interface Props {
  form: ReturnType<typeof useBaseForm<Tint>>;
}

export default function TintForm({ form }: Props) {
  const { getFieldProps } = form;
  const getFieldStyles = useGetFieldStyles();

  return (
    <>
      <Group align="flex-start">
        <Stack>
          <TextInput
            label="Tint Color"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_color')}
          />
          <TextInput
            label="Tint Group"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_group')}
          />
          <TextInput
            label="Tint Lower Range"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_lower_range')}
          />
          <TextInput
            label="Tint Upper Range"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_upper_range')}
          />
          <TextInput
            label="Default %"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_default_percent')}
          />
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_o1_translation')}
          />
          <TextInput
            label="Dvi Tint Drop"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_dvi_tint_drop')}
          />
          <TextInput
            label="Dvi Tint Color"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('ti_dvi_tint_color')}
          />
        </Stack>
        <Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Optic 2 Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={getFieldStyles({ horizontal: true })}
              {...getFieldProps('ti_o2_coating_add_code')}
            />
          </Stack>
          <Stack gap={8} align="center">
            <Text fw="bold">Legacy Optic Add Code</Text>
            <TextInput
              label="Coating Add Code"
              styles={getFieldStyles({ horizontal: true })}
              {...getFieldProps('ti_o1_coating_add_code')}
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
