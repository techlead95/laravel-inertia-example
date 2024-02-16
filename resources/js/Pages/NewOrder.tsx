import PageTitle from '@/Components/PageTitle';
import { includesIgnoreCase, inputHorizontalStyles, inputBlueLabel, inputBlueLabelCentered, inputNoMargin } from '@/utils';
import { Head, Link } from '@inertiajs/react';
import { Button, Group, Stack, Switch, TextInput, Select, Radio, Container, Box, Center, Text, Space, Textarea, Table } from '@mantine/core';

export default function NewOrder() {
  return (
    <>
    <Head title="Order Entry" />
    <Group style={{ flex: 4 }} h="100%">
      <Stack>
        <Select label="Ship To Account" styles={inputBlueLabel} data={['test1', 'test2', 'test3']} />
        <TextInput label="Patient First Name" styles={inputBlueLabel}/>
        <TextInput label="Patient Phone" styles={inputBlueLabel}  />
        <TextInput label="Purchase Order" styles={inputBlueLabel} />
        <TextInput label="Employee Number" styles={inputBlueLabel} />
        <TextInput label="Employee Copay Secure Token" styles={inputBlueLabel}  />
        <Group>
          <Select label="Card Type"  placeholder="Type" styles={inputBlueLabel} data={['Visa', 'MasterCard', 'Discover', 'American Express']} />
          <TextInput label="Card Exp Date" styles={inputBlueLabel} placeholder="MMYY"  />
        </Group>
      
      </Stack>
      <Stack>
        <Button variant="filled" mt="350">Get A Token</Button>
      </Stack>
      <Stack>
        <TextInput label="Ordered By Account Number" styles={inputBlueLabel}  />
        <TextInput label="Patient Last Name" styles={inputBlueLabel} />
        <TextInput label="Patient Email"  styles={inputBlueLabel} />
        <TextInput label="Requisition Number" styles={inputBlueLabel} />
        <TextInput label="Employee Department" styles={inputBlueLabel} />
        <TextInput label="Company Card Secure Token" styles={inputBlueLabel} />
        <Group>
          <Select label="Card Type" placeholder="Type" styles={inputBlueLabel} data={['Visa', 'MasterCard', 'Discover','American Express']} />
          <TextInput label="Card Exp Date" styles={inputBlueLabel} placeholder="MMYY"/>
        </Group>
      </Stack>
      <Stack>
        <Radio.Group
          name="jobtype"
          label="Job Type"  styles={inputBlueLabel}
        >
          <Stack mt="xs">
            <Radio value="new" label="New Job" />
            <Radio value="remake" label="Remake / Warranty" />
          </Stack>
        </Radio.Group>
        <Radio.Group
          name="eyes"
          label="Eyes"  styles={inputBlueLabel}
        >
          <Stack mt="xs">
            <Radio value="both" label="Both" />
            <Radio value="left" label="Left" />
            <Radio value="right" label="Right" />
          </Stack>
        </Radio.Group>
          
      </Stack>
    </Group>
    <Container bg="rgba(0, 0, 0, 0.1)" size="1200" margin="0">
      <Center><Box border="1px" >Complete RX</Box></Center>
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Material </Text></Center>
          <Select label="R"  placeholder="Select Material" styles={inputBlueLabelCentered} w="184" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select label="L" placeholder="Select Material" styles={inputBlueLabelCentered} w="184" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Style</Text></Center>
          <Select placeholder="Select Lens Style" styles={inputNoMargin} w="354" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select placeholder="Select Lens Style" styles={inputNoMargin} w="354" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Color </Text></Center>
          <Select placeholder="Select Lens Color" styles={inputNoMargin} w="273" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select placeholder="Select Lens Color" styles={inputNoMargin} w="273" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Ocht </Text></Center>
          <TextInput styles={inputNoMargin} w="80" />
          <TextInput styles={inputNoMargin} w="80" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Measurement </Text></Center>
          <Select styles={inputNoMargin} w="143" data={['Above Frame', 'Below Frame']}/>
          <Select styles={inputNoMargin} w="143" data={['Above Frame', 'Below Frame']}/>
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Sphere </Text></Center>
          <TextInput label="R" styles={inputBlueLabelCentered} w="140" />
          <TextInput label="L" styles={inputBlueLabelCentered} w="140" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Cyl </Text></Center>
          <TextInput styles={inputNoMargin} w="140" />
          <TextInput styles={inputNoMargin} w="140" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Axis </Text></Center>
          <TextInput styles={inputNoMargin} w="140" />
          <TextInput styles={inputNoMargin} w="140" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Dist PD </Text></Center>
          <TextInput styles={inputNoMargin} w="140" />
          <TextInput styles={inputNoMargin} w="140" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Near PD </Text></Center>
          <TextInput styles={inputNoMargin} w="140" />
          <TextInput styles={inputNoMargin} w="140" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Prism (I/O) </Text></Center>
          <Group>
            <Stack>
              <Select styles={inputNoMargin} w="83" data={['*', 'IN', 'OUT']}/>
              <Select styles={inputNoMargin} w="83" data={['*', 'IN', 'OUT']}/>
            </Stack>
            <Stack>
              <TextInput styles={inputNoMargin} w="94" />
              <TextInput styles={inputNoMargin} w="94" />
            </Stack>
          </Group>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Prism (U/D) </Text></Center>
          <Group>
            <Stack>
              <Select styles={inputNoMargin} w="83" data={['*', 'UP', 'DOWN']}/>
              <Select styles={inputNoMargin} w="83" data={['*', 'UP', 'DOWN']}/>
            </Stack>
            <Stack>
              <TextInput styles={inputNoMargin} w="94" />
              <TextInput styles={inputNoMargin} w="94" />
            </Stack>
          </Group>
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Add </Text></Center>
          <TextInput label="R" styles={inputBlueLabelCentered} w="107" />
          <TextInput label="L" styles={inputBlueLabelCentered} w="107" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Upper Add </Text></Center>
          <TextInput styles={inputNoMargin} w="120" />
          <TextInput styles={inputNoMargin} w="120" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Seg Hieght </Text></Center>
          <TextInput styles={inputNoMargin} w="144" />
          <TextInput styles={inputNoMargin} w="144" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Tint Color </Text></Center>
          <Select placeholder="Select Tint" styles={inputNoMargin} w="143" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Tint % </Text></Center>
          <TextInput styles={inputNoMargin} w="84" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Mirror </Text></Center>
          <Select placeholder="Select Miroor" styles={inputNoMargin} w="197" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Coating </Text></Center>
          <Select placeholder="Select Coating" styles={inputNoMargin} w="242" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Frame Information</Text></Center>
          <Select placeholder="Frame Supplied" styles={inputNoMargin} w="243" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Frame Manufacturer </Text></Center>
          <Select styles={inputNoMargin} w="243" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Frame Style</Text></Center>
          <TextInput styles={inputNoMargin} w="451" />
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Color</Text></Center>
          <Select placeholder="Select Frame Color" styles={inputNoMargin} w="220" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Size </Text></Center>
          <Select placeholder="Select Size" styles={inputNoMargin} w="170" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">SideShield</Text></Center>
          <Select placeholder="Select Side Shield" styles={inputNoMargin} w="185" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Extra SS </Text></Center>
          <Select styles={inputNoMargin} w="87" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Case</Text></Center>
          <TextInput placeholder="Select Case" styles={inputNoMargin} w="275" />
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
      <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Special</Text></Center>
          <Select placeholder="Select Special Add on" styles={inputNoMargin} w="322" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select placeholder="Select Special Add on" styles={inputNoMargin} w="322" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select placeholder="Select Special Add on" styles={inputNoMargin} w="322" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
      </Group>
      <Space h="md" />
      <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Notes</Text></Center>
      <Textarea w="1034" minRows={5} />
      <Space h="md" />

    </Container>
    </>
  );
}
