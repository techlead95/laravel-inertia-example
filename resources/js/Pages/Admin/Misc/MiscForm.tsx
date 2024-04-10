import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Misc } from '@/types';
import { Head } from '@inertiajs/react';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';

interface Props {
  form: ReturnType<typeof useBaseForm<Misc>>;
}

export default function MiscForm({ form }: Props) {
  const { data, getFieldProps } = form;
  const getFieldStyles = useGetFieldStyles();

  return (
    <>
      <Head title="Misc" />
      <Group>
        <TextInput label="Misc Item" {...getFieldProps('mi_item_name')} />
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
          value={data.mi_setup_by ?? ''}
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
          value={data.mi_modified_by ?? ''}
        />
      </Group>
      <Group mt="xl">
        <Stack>
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mi_o1_translation')}
          />
          <TextInput
            label="DVI Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mi_dvi_translation')}
          />
        </Stack>
        <Stack>
          <TextInput
            label="O2 Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mi_o2_add_code')}
          />
          <TextInput
            label="Legacy Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mi_o1_add_code')}
          />
        </Stack>
      </Group>
    </>
  );
}
