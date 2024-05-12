import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { Lens, LensCoating, LensMaterial, LensStyle } from '@/types';
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

interface Props {
  styles: LensStyle[];
  materials: LensMaterial[];
  coatings: LensCoating[];
  form: ReturnType<typeof useBaseForm<Lens>>;
}

export default function LensForm({ styles, materials, coatings, form }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps, data, setData } = form;

  return (
    <>
      <Group justify="space-between" align="flex-start">
        <Group>
          <Select
            label="Lens Style"
            w={240}
            data={styles.map((style) => style.ls_lenstyl_lens_style)}
            {...getFieldProps('le_lens_style')}
          />
          <Select
            label="Lens Material"
            w={240}
            data={materials.map((material) => material.lm_lens_material)}
            {...getFieldProps('le_lens_mat')}
          />
          <Select
            label="Color"
            w={240}
            data={['Green', 'Blue', 'Red']}
            {...getFieldProps('le_lens_col')}
          />
          <Switch
            label="Ocht"
            checked={data.le_ocht}
            onChange={(event) =>
              setData('le_ocht', event.currentTarget.checked)
            }
            mt={24}
          />
          <Switch
            label="Upper Add"
            checked={data.le_upper_add}
            onChange={(event) =>
              setData('le_upper_add', event.currentTarget.checked)
            }
            mt={24}
          />
        </Group>
      </Group>
      <Group align="stretch" gap="xl">
        <Stack flex={1}>
          <Switch.Group
            defaultValue={data.le_coatings}
            onChange={(e) => setData('le_coatings', e)}
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

          <Group mt="auto">
            <Button type="submit">Save</Button>
            <Button variant="outline" onClick={() => history.back()}>
              Cancel
            </Button>
          </Group>
        </Stack>
        <Stack mt={40} flex={1}>
          <TextInput
            label="Optic Translation"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_optic_translation')}
          />
          <TextInput
            label="Dvi Lens Style"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_dvi_lens_style')}
          />
          <TextInput
            label="Dvi Mat"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_dvi_mat')}
          />
          <TextInput
            label="Dvi Color"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_dvi_color')}
          />
        </Stack>
        <Stack>
          <Flex justify="center">
            <Text fw="bold">Optic 2 Add Code</Text>
          </Flex>
          <TextInput
            label="Lens Style Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_o2_lens_style_add_code')}
          />
          <TextInput
            label="Material Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_o2_material_add_code')}
          />
          <TextInput
            label="Color Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_o2_color_add_code')}
          />

          <Flex justify="center">
            <Text fw="bold">Legacy Optic Add Code</Text>
          </Flex>
          <TextInput
            label="Lens Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_o1_lens_add_code')}
          />
          <TextInput
            label="Material Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_o1_color_add_code')}
          />
          <TextInput
            label="Color Add Code"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_o2_color_add_code')}
          />
          <TextInput
            label="Minimum Seg"
            styles={getFieldStyles({ horizontal: true })}
            {...getFieldProps('le_minimun_seg')}
          />
        </Stack>
      </Group>
    </>
  );
}
