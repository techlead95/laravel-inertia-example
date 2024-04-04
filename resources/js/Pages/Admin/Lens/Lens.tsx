import useGetFieldStyles from '@/Hooks/useFieldStyles';
import useBaseForm from '@/Hooks/useBaseForm';
import { LensMaterial, LensStyle, Lens, LensCoating } from '@/types';
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

interface Props {
  styles: LensStyle[];
  materials: LensMaterial[];
  coatings: LensCoating[];
}

export default function CreateLens({ styles, materials, coatings }: Props) {
  const getFieldStyles = useGetFieldStyles();
  const { getFieldProps, data, setData, post } =
    useBaseForm<Partial<Lens>>({
      le_lens_mat: '',
      le_lens_col: '',
      le_lens_digital_style: '',
      le_optic_translation: '',
      le_dvi_lens_style: '',
      le_dvi_mat: '',
      le_dvi_color: '',
      le_o2_lens_style_add_code: '',
      le_o2_material_add_code: '',
      le_o2_color_add_code: '',
      le_o1_lens_add_code: '',
      le_o1_material_add_code: '',
      le_o1_color_add_code: '',
      le_minimun_seg: '',
      le_coatings: [],
    });
  return (
    <>
      <Head title="Lens" />
      <Stack
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          post(route('admin.lens.store'));
        }}>
        <Group justify="space-between" align="flex-start">
          <Group>
            <Select
              label="Lens Style"
              w={240}
              data={styles.map((style) => style.ls_lenstyl_lens_style)}
              {...getFieldProps('le_lens_digital_style')}
            />
            <Select
              label="Lens Material"
              w={240}
              data={materials.map((material) => material.lm_lens_material)}
              {...getFieldProps('le_lens_mat')}
            />
            <Select label="Color" w={240} data={['Green', 'Blue', 'Red']}
              {...getFieldProps('le_lens_col')}
            />
          </Group>
          <Group mt={24}>
            <Button type="submit" miw={120}>Add New</Button>
            <Link href={route('admin.lens.catalog')}>
              <Button variant="outline" miw={120}>
                Catalogue
              </Button>
            </Link>
          </Group>
        </Group>
        <Group align="flex-start" gap="xl">
          <Switch.Group
            defaultValue={data.le_coatings}
            onChange={e => setData('le_coatings', e)}
          //defaultValue={["1", 'Clarity Shield', "8"]}
          >
            <Stack>
              <Flex justify="center">
                <Text fw="bold">Coatings</Text>
              </Flex>
              {coatings.map(coating =>
                <Switch value={coating.id.toString()} label={coating.lc_lens_coating} />
              )}
            </Stack>
          </Switch.Group>
          <Stack>
            <Box h={24} />
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
      </Stack>
    </>
  );
}
