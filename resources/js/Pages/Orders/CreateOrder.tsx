import PageTitle from '@/Components/PageTitle';
import { includesIgnoreCase, inputHorizontalStyles, inputBlueLabel, inputBlueLabelCentered, inputNoMargin } from '@/utils';
import { Head, Link} from '@inertiajs/react';
import { Button, Group, Stack, Switch, TextInput, ComboboxItem,  Select, Radio, Container, Box, Center, Text, Space, Textarea, Table, Autocomplete } from '@mantine/core';
import {
  Frame,
  PageProps,
} from '@/types';
import useExtendedForm from '@/Hooks/useExtendedForm';

interface Props {
  frames: Frame[];
}

export default function NewOrder({frames}: PageProps<Props>) {
  
const {  getFieldProps, data, setData, post, processing, errors } = useExtendedForm({
  or_ship_to: '',
or_ordby_billto_dash: '',
or_po_no: '',
or_emp_name_last: '',
or_emp_name_first: '',
or_emp_phone: '',
or_emp_email: '',
or_emp_no: '',
or_dept: '',
or_req: '',
or_order_pending: '',

or_material_right: '',
or_material_left: '',
or_lens_style_right: '',
or_lens_style_left: '',
or_lens_color_right: '',
or_lens_color_left: '',
or_ocht_right: '',
or_ocht_left: '',
or_measurement_right: '',
or_measurement_left: '',
or_sphere_right: '',
or_sphere_left: '',
or_cyl_right: '',
or_cyl_left: '',
or_axis_right: '',
or_axis_left: '',
or_prism_or_right: '',
or_prism_or_left: '',
or_prism_in_right: '',
or_prism_in_left: '',
or_prism_in_right_value: '',
or_prism_in_left_value: '',
or_prism_up_right: '',
or_prism_up_left: '',
or_prism_up_right_value: '',
or_prism_up_left_value: '',
or_add_power_right: '',
or_add_power_left: '',
or_seg_hgt_meas_right: '',
or_seg_hgt_meas_left: '',
or_pd_dist_right: '',
or_pd_dist_left: '',
or_pd_near_right: '',
or_pd_near_left: '',
or_opt_center_right: '',
or_opt_center_left: '',
or_add_right: '',
or_add_left: '',
or_upper_add_right: '',
or_upper_add_left: '',
or_seg_height_right: '',
or_seg_height_left: '',
or_tint_color: '',
or_tint_percent: '',
or_mirror: '',
or_coating: '',
or_frame_info: 'Frame Supplied',
or_frame_manufacturer: '',
or_frame_style: '',
or_frame_color: '',
or_frame_size: '',
or_frame_side_shield: '',
or_extra_ss: '',
or_frame_case: '',
or_add_on_1: '',
or_add_on_2: '',
or_add_on_3: '',
or_notes: '',
or_cc_emp_copay_token: '',	
or_cc_company_card_token: '',	
or_cc_emp_card_type: '',	
or_cc_emp_card_exp_date: '',	
or_cc_company_card_type: '',	
or_cc_company_card_exp_date: '',	
or_special_instructions: '',	
or_force_hold_reason: '',
or_cc_emp_ivc: '',
or_cc_emp_zip: '',
or_manual_ship_addr_flag: '',
or_manual_ship_name: '',
or_manual_ship_addr_1: '',
or_manual_ship_addr_2: '',
or_manual_ship_addr_3: '',


})


export default function CreateOrder() {
  const fieldStyles = useFieldStyles({ blueLabel: true });

  return (
    <>
    <Head title="Order Entry" />
    <form
        onSubmit={(e) => {
          e.preventDefault();
          //console.log(frames);
          post(route('orders.store'));
        }}
    >
    <Group style={{ flex: 4 }} h="100%">
      <Stack>
        <Select  {...getFieldProps('or_ship_to')} label="Ship To Account" styles={inputBlueLabel} data={['test1', 'test2', 'test3']} />
        <TextInput {...getFieldProps('or_emp_name_first')} label="Patient First Name" styles={inputBlueLabel}/>
        <TextInput {...getFieldProps('or_emp_phone')} label="Patient Phone" styles={inputBlueLabel}  />
        <TextInput {...getFieldProps('or_po_no')} label="Purchase Order" styles={inputBlueLabel} />
        <TextInput {...getFieldProps('or_emp_no')} label="Employee Number" styles={inputBlueLabel} />
        <TextInput {...getFieldProps('or_cc_emp_copay_token')} label="Employee Copay Secure Token" styles={inputBlueLabel}  />
        <Group>
          <Select {...getFieldProps('or_cc_emp_card_type')} label="Card Type"  placeholder="Type" styles={inputBlueLabel} data={['Visa', 'MasterCard', 'Discover', 'American Express']} />
          <TextInput {...getFieldProps('or_cc_emp_card_exp_date')} label="Card Exp Date" styles={inputBlueLabel} placeholder="MMYY"  />
        </Group>
      
      </Stack>
      <Stack>
        <Button variant="filled" mt="350">Get A Token</Button>
      </Stack>
      <Stack>
        <TextInput {...getFieldProps('or_ordby_billto_dash')} label="Ordered By Account Number" styles={inputBlueLabel}  />
        <TextInput {...getFieldProps('or_emp_name_last')} label="Patient Last Name" styles={inputBlueLabel} />
        <TextInput {...getFieldProps('or_emp_email')} label="Patient Email"  styles={inputBlueLabel} />
        <TextInput {...getFieldProps('or_req')} label="Requisition Number" styles={inputBlueLabel} />
        <TextInput {...getFieldProps('or_dept')} label="Employee Department" styles={inputBlueLabel} />
        <TextInput {...getFieldProps('or_cc_company_card_token')} label="Company Card Secure Token" styles={inputBlueLabel} />
        <Group>
          <Select {...getFieldProps('or_cc_company_card_type')} label="Card Type" placeholder="Type" styles={inputBlueLabel} data={['Visa', 'MasterCard', 'Discover','American Express']} />
          <TextInput {...getFieldProps('or_cc_company_card_exp_date')} label="Card Exp Date" styles={inputBlueLabel} placeholder="MMYY"/>
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
        </Grid.Col>
        <Grid.Col span={2}>
          <Stack>
            <TextInput label="Ordered By Account Number" styles={fieldStyles} />
            <TextInput label="Patient Last Name" styles={fieldStyles} />
            <TextInput label="Patient Email" styles={fieldStyles} />
            <TextInput label="Requisition Number" styles={fieldStyles} />
            <TextInput label="Employee Department" styles={fieldStyles} />
            <Group gap="xl">
              <TextInput
                label="Company Card Secure Token"
                styles={fieldStyles}
                flex={1}
              />
            </Group>
            <Group gap="xl">
              <TextInput label="Card Type" flex={1} styles={fieldStyles} />
              <TextInput label="Card Exp Date" flex={1} styles={fieldStyles} />
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1}>
          <Stack gap={6}>
            <Text c="blue" fw="bold" ml={50}>
              Job Type
            </Text>
            <Stack gap="sm">
              <Checkbox label="New Job" />
              <Checkbox label="Remake \ Warranty" />
            </Stack>
          </Stack>
          <Stack gap={6} mt="xl">
            <Text c="blue" fw="bold" ml={50}>
              Eyes
            </Text>
            <Stack gap="sm">
              <Checkbox label="Both" />
              <Checkbox label="Left" />
              <Checkbox label="Right" />
            </Stack>
          </Group>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Prism (U/D) </Text></Center>
          <Group>
            <Stack>
              <Select {...getFieldProps('or_prism_up_right')} styles={inputNoMargin} w="83" data={['*', 'UP', 'DOWN']}/>
              <Select {...getFieldProps('or_prism_up_left')} styles={inputNoMargin} w="83" data={['*', 'UP', 'DOWN']}/>
            </Stack>
            <Stack>
              <TextInput {...getFieldProps('or_prism_up_right_value')} styles={inputNoMargin} w="94" />
              <TextInput {...getFieldProps('or_prism_up_left_value')} styles={inputNoMargin} w="94" />
            </Stack>
          </Group>
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Add </Text></Center>
          <TextInput {...getFieldProps('or_add_right')}  label="R" styles={inputBlueLabelCentered} w="107" />
          <TextInput {...getFieldProps('or_add_left')} value={data.or_add_left} onChange={e => setData('or_add_left', e.target.value)} label="L" styles={inputBlueLabelCentered} w="107" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Upper Add </Text></Center>
          <TextInput {...getFieldProps('or_upper_add_right')}  styles={inputNoMargin} w="120" />
          <TextInput {...getFieldProps('or_upper_add_left')}  styles={inputNoMargin} w="120" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Seg Hieght </Text></Center>
          <TextInput {...getFieldProps('or_seg_height_right')}  styles={inputNoMargin} w="144" />
          <TextInput {...getFieldProps('or_seg_height_left')}  styles={inputNoMargin} w="144" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Tint Color </Text></Center>
          <Select {...getFieldProps('or_tint_color')}  placeholder="Select Tint" styles={inputNoMargin} w="143" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Tint % </Text></Center>
          <TextInput {...getFieldProps('or_tint_percent')}  styles={inputNoMargin} w="84" />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Mirror </Text></Center>
          <Select {...getFieldProps('or_mirror')} placeholder="Select Miroor" styles={inputNoMargin} w="197" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Coating </Text></Center>
          <Select {...getFieldProps('or_coating')} placeholder="Select Coating" styles={inputNoMargin} w="242" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Frame Information</Text></Center>
          <Select {...getFieldProps('or_frame_info')} placeholder="Frame Supplied" styles={inputNoMargin} w="243" data={['Frame Supplied', 'Frame To Come']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Frame Manufacturer </Text></Center>
          <Select {...getFieldProps('or_frame_manufacturer')} styles={inputNoMargin} w="243" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Frame Style</Text></Center>
          <Autocomplete {...getFieldProps('or_frame_style')} styles={inputNoMargin} w="451" 
            data={frames.map((frame) => frame.fr_frame_style)}
            //data={['Visa', 'MasterCard', 'Discover','American Express']}
          />
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Color</Text></Center>
          <Select {...getFieldProps('or_frame_color')} placeholder="Select Frame Color" styles={inputNoMargin} w="220" 
            data={frames.map((frame) => frame.fr_frame_color)}
          />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Size </Text></Center>
          <Select {...getFieldProps('or_frame_size')} placeholder="Select Size" styles={inputNoMargin} w="170" 
            data={frames.map((frame) => frame.fr_eyesize)}
            />
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">SideShield</Text></Center>
          <Select {...getFieldProps('or_frame_side_shield')} placeholder="Select Side Shield" styles={inputNoMargin} w="185" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Extra SS </Text></Center>
          <Select {...getFieldProps('or_extra_ss')} styles={inputNoMargin} w="87" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
        <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Case</Text></Center>
          <TextInput {...getFieldProps('or_frame_case')} placeholder="Select Case" styles={inputNoMargin} w="275" />
        </Stack>
      </Group>
      <Space h="md" />
      <Group>
      <Stack>
          <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Special</Text></Center>
          <Select {...getFieldProps('or_add_on_1')} placeholder="Select Special Add on" styles={inputNoMargin} w="322" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select {...getFieldProps('or_add_on_2')} placeholder="Select Special Add on" styles={inputNoMargin} w="322" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
          <Select {...getFieldProps('or_add_on_3')} placeholder="Select Special Add on" styles={inputNoMargin} w="322" data={['Visa', 'MasterCard', 'Discover','American Express']}/>
        </Stack>
      </Group>
      <Space h="md" />
      <Center> <Text c="rgba(0, 84, 194, 1)"td="underline">Notes</Text></Center>
      <Textarea {...getFieldProps('or_notes')} w="1034" resize="vertical" />
      <Space h="md" />

    </Container>
    <Button variant="filled" mt="350" type="submit" >Save As Pending</Button>
    </form>
    </>
  );
}
