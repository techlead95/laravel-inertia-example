import { inputHorizontalStyles } from '@/utils';
import { Head, Link } from '@inertiajs/react';
import {
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';

export default function Lens() {
  return (
    <>
      <Head title="Lens" />
      <Stack>
        <Group justify="space-between" align="flex-start">
          <Group>
            <TextInput label="Lens Style" w={240} />
            <TextInput label="Material" w={240} />
            <TextInput label="Color" w={240} />
          </Group>
          <Stack>
            <Group mt={24}>
              <Button variant="outline" miw={120}>
                Add New
              </Button>
              <Link href="/admin/lens/catalog">
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
              styles={inputHorizontalStyles}
            />
            <TextInput label="Dvi Lens Style" styles={inputHorizontalStyles} />
            <TextInput label="Dvi Mat" styles={inputHorizontalStyles} />
            <TextInput label="Dvi Color" styles={inputHorizontalStyles} />

            <Flex justify="center">
              <Text fw="bold">Optic 2 Add Code</Text>
            </Flex>
            <TextInput
              label="Lens Style Add Code"
              styles={inputHorizontalStyles}
            />
            <TextInput
              label="Material Add Code"
              styles={inputHorizontalStyles}
            />
            <TextInput label="Color Add Code" styles={inputHorizontalStyles} />

            <Flex justify="center">
              <Text fw="bold">Legacy Optic Add Code</Text>
            </Flex>
            <TextInput label="Lens Add Code" styles={inputHorizontalStyles} />
            <TextInput
              label="Material Add Code"
              styles={inputHorizontalStyles}
            />
            <TextInput label="Color Add Code" styles={inputHorizontalStyles} />
          </Stack>
        </Group>
      </Stack>
    </>
  );
}
