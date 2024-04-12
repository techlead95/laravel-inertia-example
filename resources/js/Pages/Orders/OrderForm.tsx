import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import { useState, useEffect } from 'react';
import { Frame, Order, Lens, FrameVariation, Tint, LensCoating, LensCoatingSelect } from '@/types';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Input,
  Radio,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';

import OrderTable from './OrderTable';

interface Props {
  //frames: Frame[];
  lenses: Lens[];
  frameVariations: FrameVariation[];
  tints: Tint[];
  lensCoatingSelects: LensCoatingSelect[];
  form: ReturnType<typeof useBaseForm<Partial<Order>>>;
}

export default function OrderForm({ lenses, frameVariations, tints, lensCoatingSelects, form }: Props) {
  const getFieldStyles = useGetFieldStyles();


  //const [filteredFrames, setFilteredFrames] = useState(frames);
  //const [filteredFrameVariations, setFilteredFrameVariations] = useState(frameVariations);
  //const [filteredRightLenses, setFilteredRightLenses] = useState(lenses);
  //const [filteredLeftLenses, setFilteredLeftLenses] = useState(lenses);
  const [filteredFrameStyles, setFilteredFrameStyles] = useState([""]);
  const [filteredFrameSizes, setFilteredFrameSizes] = useState([""]);
  const [filteredFrameColors, setFilteredFrameColors] = useState([""]);
  const [filteredLensColorsRight, setFilteredLensColorsRight] = useState([""]);
  const [filteredLensStlyesRight, setFilteredLensStylesRight] = useState([""]);
  const [filteredLensMaterialsRight, setFilteredLensMaterialsRight] = useState([""]);
  const [filteredLensColorsLeft, setFilteredLensColorsLeft] = useState([""]);
  const [filteredLensStlyesLeft, setFilteredLensStylesLeft] = useState([""]);
  const [filteredLensMaterialsLeft, setFilteredLensMaterialsLeft] = useState([""]);
  //const { register, handleSubmit, setValue } = useForm();
  const { getFieldProps, data, setData, post, processing, errors } = form;
  useEffect(() => {
    var frameFinal = [];
    if (data.or_frame_style || data.or_frame_color || data.or_frame_size) {
      var filtered = [];
      if (data.or_frame_style) {
        filtered = frameVariations.filter(frameVariation => frameVariation.frame.fr_frame_style?.includes(data.or_frame_style ?? ''));
      } else {
        filtered = frameVariations;
      }
      var filtered2 = [];
      if (data.or_frame_color) {
        filtered2 = filtered.filter(frameVariation => frameVariation.fv_frame_color?.includes(data.or_frame_color ?? ''));
      } else {
        filtered2 = filtered;
      }
      var filtered3 = [];
      if (data.or_frame_size) {
        filtered3 = filtered2.filter(frameVariation => frameVariation.fv_size?.includes(data.or_frame_size ?? ''));
      } else {
        filtered3 = filtered2;
      }
      frameFinal = filtered3;
    } else {
      frameFinal = frameVariations;
    }
    //setFilteredFrameVariations(frameFinal);
    var frameStyle = [];
    frameStyle = frameFinal.map((frameVariation) => frameVariation.frame.fr_frame_style ?? '');
    var frameStyleFiltered = [...new Set(frameStyle)];
    setFilteredFrameStyles(frameStyleFiltered);
    var frameSize = [];
    frameSize = frameFinal.map((frameVariation) => frameVariation.fv_size ?? '');
    var frameSizeFiltered = [...new Set(frameSize)];
    setFilteredFrameSizes(frameSizeFiltered);
    var frameColor = [];
    frameColor = frameFinal.map((frameVariation) => frameVariation.fv_frame_color ?? '');
    var frameColorFiltered = [...new Set(frameColor)];
    setFilteredFrameColors(frameColorFiltered);

    console.log(lensCoatingSelects);
  }, [data.or_frame_style, data.or_frame_color, data.or_frame_size]);

  useEffect(() => {
    var lensRightFinal = [];
    if (data.or_material_right || data.or_lens_style_right || data.or_lens_color_right) {
      var filtered = [];
      if (data.or_material_right) {
        filtered = lenses.filter(lens => lens.le_lens_mat?.includes(data.or_material_right ?? ''));
      } else {
        filtered = lenses;
      }
      var filtered2 = [];
      if (data.or_lens_style_right) {
        filtered2 = filtered.filter(lens => lens.le_lens_style?.includes(data.or_lens_style_right ?? ''));
      } else {
        filtered2 = filtered;
      }
      var filtered3 = [];
      if (data.or_lens_color_right) {
        filtered3 = filtered2.filter(lens => lens.le_lens_col?.includes(data.or_lens_color_right ?? ''));
      } else {
        filtered3 = filtered2;
      }
      lensRightFinal = filtered3;
    } else {
      lensRightFinal = lenses;
    }
    var lensMaterialRight = [];
    lensMaterialRight = lensRightFinal.map((lens) => lens.le_lens_mat ?? '');
    var lensMaterialRightFiltered = [...new Set(lensMaterialRight)];
    setFilteredLensMaterialsRight(lensMaterialRightFiltered);
    var lensStyleRight = [];
    lensStyleRight = lensRightFinal.map((lens) => lens.le_lens_style ?? '');
    var lensStyleRightFiltered = [...new Set(lensStyleRight)];
    setFilteredLensStylesRight(lensStyleRightFiltered);
    var lensColorRight = [];
    lensColorRight = lensRightFinal.map((lens) => lens.le_lens_col ?? '');
    var lensColorRightFiltered = [...new Set(lensColorRight)];
    setFilteredLensColorsRight(lensColorRightFiltered);
    //console.log(filteredRightLenses)
  }, [data.or_material_right, data.or_lens_style_right, data.or_lens_color_right]);

  useEffect(() => {
    var lensLeftFinal = [];
    if (data.or_material_left || data.or_lens_style_left || data.or_lens_color_left) {
      var filtered = [];
      if (data.or_material_left) {
        filtered = lenses.filter(lens => lens.le_lens_mat?.includes(data.or_material_left ?? ''));
      } else {
        filtered = lenses;
      }
      var filtered2 = [];
      if (data.or_lens_style_left) {
        filtered2 = filtered.filter(lens => lens.le_lens_style?.includes(data.or_lens_style_left ?? ''));
      } else {
        filtered2 = filtered;
      }
      var filtered3 = [];
      if (data.or_lens_color_left) {
        filtered3 = filtered2.filter(lens => lens.le_lens_col?.includes(data.or_lens_color_left ?? ''));
      } else {
        filtered3 = filtered2;
      }
      lensLeftFinal = filtered3;
    } else {
      lensLeftFinal = lenses;
    }
    var lensMaterialLeft = [];
    lensMaterialLeft = lensLeftFinal.map((lens) => lens.le_lens_mat ?? '');
    var lensMaterialLeftFiltered = [...new Set(lensMaterialLeft)];
    setFilteredLensMaterialsLeft(lensMaterialLeftFiltered);
    var lensStyleLeft = [];
    lensStyleLeft = lensLeftFinal.map((lens) => lens.le_lens_style ?? '');
    var lensStyleLeftFiltered = [...new Set(lensStyleLeft)];
    setFilteredLensStylesLeft(lensStyleLeftFiltered);
    var lensColorLeft = [];
    lensColorLeft = lensLeftFinal.map((lens) => lens.le_lens_col ?? '');
    var lensColorLeftFiltered = [...new Set(lensColorLeft)];
    setFilteredLensColorsLeft(lensColorLeftFiltered);
  }, [data.or_material_left, data.or_lens_style_left, data.or_lens_color_left]);

  return (
    <>
      <Box>
        <Button onClick={() => router.get(route('orders.index'))}>
          Back to Home
        </Button>
      </Box>
      <Grid columns={5} gutter="xl" align="center">
        <Grid.Col span={2}>
          <Stack>
            <TextInput
              label="Ship To Account"
              {...getFieldProps('or_ship_to')}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              label="Patient First Name"
              {...getFieldProps('or_emp_name_first')}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              label="Patient Phone"
              {...getFieldProps('or_emp_phone')}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              label="Purchase Order"
              {...getFieldProps('or_po_no')}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              label="Employee Number"
              {...getFieldProps('or_emp_no')}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <Group gap="xl">
              <TextInput
                {...getFieldProps('or_cc_emp_copay_token')}
                label="Employee Copay Secure Token"
                styles={getFieldStyles({ blueLabel: true })}
                flex={1}
              />
              <Button mt={25}>Get a Token</Button>
            </Group>
            <Group gap="xl">
              <Select
                {...getFieldProps('or_cc_emp_card_type')}
                label="Card Type"
                placeholder="Type"
                styles={getFieldStyles({ blueLabel: true })}
                data={['Visa', 'MasterCard', 'Discover', 'American Express']}
              />
              <TextInput
                {...getFieldProps('or_cc_emp_card_exp_date')}
                label="Card Exp Date"
                placeholder="MMYY"
                flex={1}
                styles={getFieldStyles({ blueLabel: true })}
              />
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={2}>
          <Stack>
            <TextInput
              {...getFieldProps('or_ordby_billto_dash')}
              label="Ordered By Account Number"
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              {...getFieldProps('or_emp_name_last')}
              label="Patient Last Name"
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              {...getFieldProps('or_emp_email')}
              label="Patient Email"
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              {...getFieldProps('or_req')}
              label="Requisition Number"
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              {...getFieldProps('or_dept')}
              label="Employee Department"
              styles={getFieldStyles({ blueLabel: true })}
            />
            <Group gap="xl">
              <TextInput
                {...getFieldProps('or_cc_company_card_token')}
                label="Company Card Secure Token"
                styles={getFieldStyles({ blueLabel: true })}
                flex={1}
              />
            </Group>
            <Group gap="xl">
              <Select
                {...getFieldProps('or_cc_company_card_type')}
                label="Card Type"
                placeholder="Type"
                styles={getFieldStyles({ blueLabel: true })}
                data={['Visa', 'MasterCard', 'Discover', 'American Express']}
              />
              <TextInput
                {...getFieldProps('or_cc_company_card_exp_date')}
                label="Card Exp Date"
                placeholder="MMYY"
                flex={1}
                styles={getFieldStyles({ blueLabel: true })}
              />
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={1}>
          <Radio.Group
            name="jobtype"
            label="Job Type"
            styles={getFieldStyles({ blueLabel: true })}
          >
            <Stack mt="xs">
              <Radio value="new" label="New Job" />
              <Radio value="remake" label="Remake / Warranty" />
            </Stack>
          </Radio.Group>
          <Radio.Group
            name="eyes"
            label="Eyes"
            styles={getFieldStyles({ blueLabel: true })}
            mt="xl"
          >
            <Stack mt="xs">
              <Radio value="both" label="Both" />
              <Radio value="left" label="Left" />
              <Radio value="right" label="Right" />
            </Stack>
          </Radio.Group>
        </Grid.Col>
      </Grid>
      <Stack
        p="md"
        bg="gray.2"
        style={(theme) => ({ border: `1px solid ${theme.colors.gray[6]}` })}
        gap="lg"
      >
        <Text ta="center" fw="bold" fz="lg">
          Complete RX
        </Text>

        <OrderTable
          headers={[
            'Material',
            'Style',
            'Color',
            'Ocht',
            'Measurement',
          ]}
          hasRL
          hasEditable
        >
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_material_right')}
                placeholder="Select Material"
                //data={[]}
                data={filteredLensMaterialsRight}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_style_right')}
                placeholder="Select Lens Style"
                data={filteredLensStlyesRight}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_color_right')}
                placeholder="Select Lens Color"
                data={filteredLensColorsRight}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_ocht_right')} />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_measurement_right')}
                data={['Above Frame', 'Below Frame']}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_material_left')}
                placeholder="Select Material"
                data={filteredLensMaterialsLeft}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_style_left')}
                placeholder="Select Lens Style"
                data={filteredLensStlyesLeft}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_color_left')}
                placeholder="Select Lens Color"
                data={filteredLensColorsLeft}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_ocht_left')} />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_measurement_left')}
                data={['Above Frame', 'Below Frame']}
              />
            </Table.Td>
          </Table.Tr>
        </OrderTable>
        <OrderTable
          headers={[
            'Sphere',
            'Cly',
            'Axis',
            'Dist PD',
            'Near PD',
            'Prism (I/O)',
            'Prism (U/D)',
          ]}
          hasRL
          hasEditable
        >
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_sphere_right')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_cyl_right')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_axis_right')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_dist_right')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_near_right')} />
            </Table.Td>
            <Table.Td w="200">
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_in_right')}
                  data={['*', 'IN', 'OUT']} />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_in_right_value')} />
              </Group>
            </Table.Td>
            <Table.Td w="200">
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_up_right')}
                  data={['*', 'UP', 'DOWN']} />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_up_right_value')} />
              </Group>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_sphere_left')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_cyl_left')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_axis_left')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_dist_left')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_near_left')} />
            </Table.Td>
            <Table.Td>
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_in_left')}
                  data={['*', 'IN', 'OUT']} /><TextInput ml="-10" w="94" {...getFieldProps('or_prism_in_left_value')} />
              </Group>
            </Table.Td>
            <Table.Td>
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_up_left')} data={['*', 'UP', 'DOWN']} />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_up_left_value')} />
              </Group>
            </Table.Td>
          </Table.Tr>
        </OrderTable>
        <OrderTable
          headers={[
            'Add',
            'Upper Add',
            'Seg Height',
            'Tint Color',
            'Tint %',
            'Mirror',
            'Coating',
          ]}
          hasRL
          hasEditable
        >
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_add_right')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_upper_add_right')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_seg_height_right')} />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_tint_color')}
                placeholder="Select Tint"
                data={tints.map((tint) => tint.ti_color ?? '')}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_tint_percent')} />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_mirror')}
                placeholder="Select Mirror"
              />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_coating')}
                placeholder="Select Coating"
                data={lensCoatingSelects}
              //data={lensCoatings.map((lensCoating) => lensCoating.lc_lens_coating ?? '')}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_add_left')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_upper_add_left')} />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_seg_height_left')} />
            </Table.Td>
            <Table.Td />
            <Table.Td />
            <Table.Td />
            <Table.Td />
          </Table.Tr>
        </OrderTable>

        <OrderTable
          ml={26}
          headers={['Frame Information', 'Frame Manufacturer', 'Frame Style']}
        >
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_info')}
                data={['Frame Supplied', 'Frame To Come']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_manufacturer')}
                data={['Visa', 'MasterCard', 'Discover', 'American Express']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_style')}
                placeholder="Start typing frame name"
                //data={filteredFrames.map((frame) => frame.fr_frame_style ?? '')}
                //data={frames.map((frame) => frame.fr_frame_style ?? '')}
                data={filteredFrameStyles}
                //data={frameVariations.map((frameVariation) => frameVariation.frame.fr_frame_style ?? '')}
                searchable
                allowDeselect
              />
            </Table.Td>
          </Table.Tr>
        </OrderTable>

        <OrderTable
          ml={26}
          headers={['Color', 'Size', 'Side Shield', 'Extra SS', 'Case']}
        >
          <Table.Tr>
            <Table.Td>
              <Select {...getFieldProps('or_frame_color')}
                //data={filteredFrames.map((frame) => frame.fr_frame_color ?? '')}
                //data={frames.map((frame) => frame.variations?.fv_frame_color ?? '')}
                //data={frames.map((frame) => frame.variations?.map((frameVariation) => frameVariation.fv_frame_color ?? ''))}
                data={filteredFrameColors}
              //onDropdownOpen={ }
              //data={[]}
              />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_frame_size')}
                //data={filteredFrames.map((frame) => frame.fr_eyesize ?? '')}
                data={filteredFrameSizes}
              //data={[]}
              />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_frame_side_shield')} data={[]} />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_extra_ss')} data={[]} />
            </Table.Td>
            <Table.Td>
              <Select {...getFieldProps('or_frame_case')} data={[]} />
            </Table.Td>
          </Table.Tr>
        </OrderTable>

        <OrderTable ml={26} maw={380} headers={['Special']}>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_add_on_1')}
                placeholder="Select Special Add on"
                data={[]}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_add_on_2')}
                placeholder="Select Special Add on"
                data={[]}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_add_on_3')}
                placeholder="Select Special Add on"
                data={[]}
              />
            </Table.Td>
          </Table.Tr>
        </OrderTable>

        <OrderTable ml={26} headers={['Notes']}>
          <Table.Tr>
            <Table.Td>
              <Textarea {...getFieldProps('or_notes')} rows={6} />
            </Table.Td>
          </Table.Tr>
        </OrderTable>
      </Stack>

      <Group justify="space-between">
        <Button type="submit" name="action" value="save" onClick={() => setData('method', "save")}>Save as Pending</Button>
        <Button type="submit" name="action" value="submit" onClick={() => setData('method', "submit")}>Submit</Button>
      </Group>
    </>
  );
}
