import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { LensMaterial, LensStyle } from '@/types';
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
}

export default function Lens({ styles, materials }: Props) {
  const getFieldStyles = useGetFieldStyles();

  return (
    <>
      <Head title="Lens" />
      <Stack>
        <Group justify="space-between" align="flex-start">
          <Group>
            <Select
              label="Lens Style"
              w={240}
              data={styles.map((style) => style.ls_lenstyl_lens_style)}
            />
            <Select
              label="Lens Material"
              w={240}
              data={materials.map((material) => material.lm_lens_material)}
            />
            <Select label="Color" w={240} data={['Green', 'Blue', 'Red']} />
          </Group>
          <Stack>
            <Group mt={24}>
              <Button variant="outline" miw={120}>
                Add New
              </Button>
              <Link href={route('admin.lens.catalog')}>
                <Button variant="outline" miw={120}>
                  Catalogue
                </Button>
              </Link>
            </Group>
            <Group>
              <Button variant="outline" miw={120}>
                Modify
              </Button>
              <Button variant="outline" miw={120}>
                Exit
              </Button>
            </Group>
          </Stack>
        </Group>
        <Group align="flex-start" gap="xl">
          <Stack>
            <Flex justify="center">
              <Text fw="bold">Coatings</Text>
            </Flex>
            <Switch defaultChecked label="Clarity Shield" />
            <Switch defaultChecked label="Clear Away Ez Clean" />
            <Switch defaultChecked label="Anti-Fog" />
            <Switch defaultChecked label="Clear Away Ez w/ Anti-Fog" />
            <Switch defaultChecked label="Anti-Reflective w/ Anti-Fog" />
            <Switch defaultChecked label="Hi-Vision Anti-Reflective" />
            <Switch defaultChecked label="Ex3 Anti-Reflective" />
            <Switch defaultChecked label="Recharge w/ Anti-Reflective" />
            <Switch defaultChecked label="Standard Ar-Par" />
            <Switch defaultChecked label="Standard Ar w/ View Protect Pav" />
            <Switch defaultChecked label="Back Side Ar" />
            <Switch defaultChecked label="2-Sided Scratch (Plastic)" />
            <Switch defaultChecked label="Future1" />
            <Switch defaultChecked label="Future2" />
            <Switch defaultChecked label="Future3" />
            <Switch defaultChecked label="Future4" />
            <Switch defaultChecked label="Future5" />
          </Stack>
          <Stack>
            <Box h={24} />
            <TextInput
              label="Optic Translation"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Dvi Lens Style"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Dvi Mat"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Dvi Color"
              styles={getFieldStyles({ horizontal: true })}
            />

            <Flex justify="center">
              <Text fw="bold">Optic 2 Add Code</Text>
            </Flex>
            <TextInput
              label="Lens Style Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Material Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Color Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />

            <Flex justify="center">
              <Text fw="bold">Legacy Optic Add Code</Text>
            </Flex>
            <TextInput
              label="Lens Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Material Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
            <TextInput
              label="Color Add Code"
              styles={getFieldStyles({ horizontal: true })}
            />
          </Stack>
        </Group>
      </Stack>
    </>
  );
}
