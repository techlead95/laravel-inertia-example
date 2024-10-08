import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { LensCoating, Mirror } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
  Box,
  Button,
  Flex,
  Group,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';

interface Props {
  coatings: LensCoating[];
  form: ReturnType<typeof useBaseForm<Mirror>>;
}
export default function MirrorForm({ coatings, form }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps, data, setData, post } = form;
  return (
    <>
      <Group justify="space-between">
        <Group>
          <TextInput label="Mirror" {...getFieldProps('mr_mirror')} />
          <DateInput
            label="Setup Date"
            w={140}
            disabled
            value={data.created_at ? new Date(data.created_at) : null}
          />
          <TextInput
            label="Setup By"
            w={140}
            disabled
            value={data.mr_setup_by ?? ''}
          />
          <DateInput
            label="Last Modified Date"
            w={140}
            disabled
            value={data.updated_at ? new Date(data.updated_at) : null}
          />
          <TextInput
            label="Modified By"
            w={140}
            disabled
            value={data.mr_last_modified_by ?? ''}
          />
        </Group>
      </Group>

      <Group align="flex-start" gap="xl">
        <Switch.Group
          defaultValue={data.mr_coatings}
          onChange={(e) => setData('mr_coatings', e)}
        >
          <Stack>
            <Flex justify="center">
              <Text fw="bold">Coatings</Text>
            </Flex>
            {coatings.map((coating) => (
              <Switch
                key={coating.id}
                value={coating.id.toString()}
                label={coating.lc_lens_coating}
              />
            ))}
          </Stack>
        </Switch.Group>
        <Stack>
          <Box h={24} />
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mr_o1_translation')}
          />
          <TextInput
            label="Dvi Lens Style"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mr_dvi_translation')}
          />

          <Flex justify="center">
            <Text fw="bold">Optic 2 Add Code</Text>
          </Flex>
          <TextInput
            label="Optic 2 Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mr_o2_add_code')}
          />
          <TextInput
            label="Legacy Optic Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('mr_o1_add_code')}
          />
        </Stack>
      </Group>
      <Group>
        <Button type="submit" miw={120}>
          Save
        </Button>
        <Button variant="outline" miw={120} onClick={() => history.back()}>
          Cancel
        </Button>
      </Group>
    </>
  );
}
