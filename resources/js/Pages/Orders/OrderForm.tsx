import useBaseForm from '@/Hooks/useBaseForm';
import useGetFieldStyles from '@/Hooks/useFieldStyles';
import {
  FrameAddon,
  FrameVariation,
  Lens,
  LensCoating,
  Misc,
  Order,
  Tint,
  User,
  PageProps
} from '@/types';
import { router, usePage } from '@inertiajs/react';
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
  NumberInput,
} from '@mantine/core';
import { useEffect, useState, } from 'react';

import OrderTable from './OrderTable';

interface Props {
  //frames: Frame[];
  lenses: Lens[];
  frameVariations: FrameVariation[];
  tints: Tint[];
  form: ReturnType<typeof useBaseForm<Partial<Order>>>;
  miscs: Misc[];
  coatings: LensCoating[];
  //user: User;
}

export default function OrderForm({
  lenses,
  frameVariations,
  tints,
  form,
  miscs,
  coatings,
  //}: PageProps<Props>) {
}: Props) {
  const getFieldStyles = useGetFieldStyles();

  //console.log(user);

  //const [filteredFrames, setFilteredFrames] = useState(frames);
  //const [filteredFrameVariations, setFilteredFrameVariations] = useState(frameVariations);
  //const [filteredRightLenses, setFilteredRightLenses] = useState(lenses);
  //const [filteredLeftLenses, setFilteredLeftLenses] = useState(lenses);
  const [filteredFrameStyles, setFilteredFrameStyles] = useState(['']);
  const [filteredFrameSizes, setFilteredFrameSizes] = useState(['']);
  const [filteredFrameColors, setFilteredFrameColors] = useState(['']);
  const [filteredFrameBrands, setFilteredFrameBrands] = useState(['']);
  const [filteredLensColorsRight, setFilteredLensColorsRight] = useState(['']);
  const [filteredLensStlyesRight, setFilteredLensStylesRight] = useState(['']);
  const [filteredLensMaterialsRight, setFilteredLensMaterialsRight] = useState([
    '',
  ]);
  const [filteredLensColorsLeft, setFilteredLensColorsLeft] = useState(['']);
  const [filteredLensStlyesLeft, setFilteredLensStylesLeft] = useState(['']);
  const [filteredLensMaterialsLeft, setFilteredLensMaterialsLeft] = useState([
    '',
  ]);
  const [filteredLensCoatings, setFilteredLensCoatings] = useState(['']);
  const [filteredLensMirrors, setFilteredLensMirrors] = useState(['']);
  const [filteredSS, setFilteredSS] = useState(['']);
  const [filteredSSColor, setFilteredSSColor] = useState(['']);
  const [frameAddons, setFrameAddons] = useState<FrameAddon[]>([]);
  const [lOcht, setLOcht] = useState(true);
  const [lUpperAdd, setLUpperAdd] = useState(true);
  const [rOcht, setROcht] = useState(true);
  const [rUpperAdd, setRUpperAdd] = useState(true);
  const [dTint, setDTint] = useState(false);
  const [sS, setSS] = useState(true);
  const [lDiasble, setLDisable] = useState(true);
  const [rDiasble, setRDisable] = useState(true);
  //const { register, handleSubmit, setValue } = useForm();
  const { getFieldProps, data, setData, post, processing, errors } = form;
  //console.log(filteredFrameStyles);
  //console.log(filteredFrameSizes);
  //console.log(filteredFrameColors);
  //console.log(errors);
  const xrightBlur = () => {
    var xright = data.or_axis_right;
    while (xright.length < 3) {
      xright = '0' + xright;
    }
    setData('or_axis_right', xright)
  };
  const xleftBlur = () => {
    var xleft = data.or_axis_left;
    while (xleft.length < 3) {
      xleft = '0' + xleft;
    }
    setData('or_axis_left', xleft)
  };
  useEffect(() => {
    var frameFinal = [];
    if (
      data.or_frame_style ||
      data.or_frame_color ||
      data.or_frame_size ||
      data.or_frame_manufacturer
    ) {
      frameFinal = frameVariations.filter((frameVariation) => {
        if (
          data.or_frame_style &&
          !frameVariation.frame.fr_frame_name?.includes(
            data.or_frame_style ?? '',
          )
        )
          return false;
        if (
          data.or_frame_color &&
          !frameVariation.fv_frame_color?.includes(data.or_frame_color ?? '')
        )
          return false;
        if (
          data.or_frame_size &&
          !frameVariation.fv_size?.includes(data.or_frame_size ?? '')
        )
          return false;
        if (
          data.or_frame_manufacturer &&
          !frameVariation.frame.fr_brand?.includes(data.or_frame_manufacturer)
        )
          return false;

        return true;
      });
    } else {
      frameFinal = frameVariations;
    }

    if (data.or_frame_style && data.or_frame_color && data.or_frame_size) {
      var framevar = frameFinal[0];
      setSS(false);
      var addons = framevar.frame.addons;
      //console.log(addons);
      if (addons) {
        var sideshields = addons.map((addon) => addon.fa_side_shield_type);
        var ssfiltered = [...new Set(sideshields)];
        setFilteredSS(ssfiltered as string[]);
        var sideshieldcolors = addons.map(
          (addon) => addon.fa_side_shield_color,
        );
        var sscolorfiltered = [...new Set(sideshieldcolors)];
        setFilteredSSColor(sscolorfiltered as string[]);
        setFrameAddons(addons);
      } else {
        setSS(true);
      }
    } else {
      setSS(true);
    }

    //setFilteredFrameVariations(frameFinal);
    var frameStyle = [];
    frameStyle = frameFinal.map(
      (frameVariation) => frameVariation.frame.fr_frame_name ?? '',
    );
    var frameStyleFiltered = [...new Set(frameStyle)];
    setFilteredFrameStyles(frameStyleFiltered);
    var frameSize = [];
    frameSize = frameFinal.map(
      (frameVariation) => frameVariation.fv_size ?? '',
    );
    var frameSizeFiltered = [...new Set(frameSize)];
    setFilteredFrameSizes(frameSizeFiltered);
    var frameColor = [];
    frameColor = frameFinal.map(
      (frameVariation) => frameVariation.fv_frame_color ?? '',
    );
    var frameColorFiltered = [...new Set(frameColor)];
    setFilteredFrameColors(frameColorFiltered);
    var frameBrand = [];
    frameBrand = frameFinal.map(
      (frameVariation) => frameVariation.frame.fr_brand ?? '',
    );
    var frameBrandFiltered = [...new Set(frameBrand)];
    setFilteredFrameBrands(frameBrandFiltered);

    //console.log(lenses);
  }, [
    data.or_frame_style,
    data.or_frame_color,
    data.or_frame_size,
    data.or_frame_manufacturer,
  ]);

  useEffect(() => {
    var fAddon = frameAddons.filter((addon) => {
      if (
        data.or_frame_side_shield &&
        !addon.fa_side_shield_type?.includes(data.or_frame_side_shield)
      )
        return false;
      if (
        data.or_frame_side_shield_color &&
        !addon.fa_side_shield_color?.includes(data.or_frame_side_shield_color)
      )
        return false;
      return true;
    });
    var frameSS = [];
    frameSS = fAddon.map((addon) => addon.fa_side_shield_type ?? '');
    var frameSSFiltered = [...new Set(frameSS)];
    setFilteredSS(frameSSFiltered);
    var frameSSColor = [];
    frameSSColor = fAddon.map((addon) => addon.fa_side_shield_color ?? '');
    var frameSSColorFiltered = [...new Set(frameSSColor)];
    setFilteredSSColor(frameSSColorFiltered);
  }, [data.or_frame_side_shield, data.or_frame_side_shield_color]);
  useEffect(() => {
    if (data.or_eyes) {
      if ("Both" == data.or_eyes || "Right" == data.or_eyes)
        setRDisable(false);
      else
        setRDisable(true);
      if ("Both" == data.or_eyes || "Left" == data.or_eyes)
        setLDisable(false);
      else
        setLDisable(true);

    } else {
      setRDisable(true);
      setLDisable(true);
    }


  }, [data.or_eyes]);
  useEffect(() => {
    var lensRightFinal = [];
    //if (data.or_material_right || data.or_lens_style_right || data.or_lens_color_right || data.or_coating) {
    if (
      data.or_material_right ||
      data.or_lens_style_right ||
      data.or_lens_color_right
    ) {
      //var filtered = [];
      lensRightFinal = lenses.filter((lens) => {
        if (
          data.or_material_right &&
          !lens.le_lens_mat?.includes(data.or_material_right ?? '')
        )
          return false;
        if (
          data.or_lens_style_right &&
          !lens.le_lens_style?.includes(data.or_lens_style_right ?? '')
        )
          return false;
        if (
          data.or_lens_color_right &&
          !lens.le_lens_col?.includes(data.or_lens_color_right ?? '')
        )
          return false;

        /*if (data.or_coating) {

          var coatings = lens.coatings?.filter(coating => {
            if (!coating.lc_lens_coating.includes(data.or_coating ?? ''))
              return false;
            return true;
          })

          console.log(coatings)
          if (!(coatings && coatings.length > 0))
            return false;
        }*/
        return true;
      });
    } else {
      lensRightFinal = lenses;
    }

    if (
      data.or_material_right &&
      data.or_lens_style_right &&
      data.or_lens_color_right
    ) {
      var lens = lensRightFinal[0];
      if (true == lens.le_ocht) {
        setROcht(false);
      } else {
        setROcht(true);
      }
      if (true == lens.le_upper_add) {
        setRUpperAdd(false);
      } else {
        setRUpperAdd(true);
      }
    } else {
      setROcht(true);
      setRUpperAdd(true);
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
    /*var lensCoating = [];
    lensCoating = lensRightFinal.map((lens) => lens.coatings?.map((coating) => coating.lc_lens_coating)).flat();
    var lensCoatingFiltered = [...new Set(lensCoating)];
    setFilteredLensCoatings(lensCoatingFiltered);*/
    //console.log(filteredRightLenses)
  }, [
    data.or_material_right,
    data.or_lens_style_right,
    data.or_lens_color_right,
  ]);
  //}, [data.or_material_right, data.or_lens_style_right, data.or_lens_color_right, data.or_coating]);
  useEffect(() => {
    var lensLeftFinal = [];
    if (
      data.or_material_left ||
      data.or_lens_style_left ||
      data.or_lens_color_left
    ) {
      //var filtered = [];
      lensLeftFinal = lenses.filter((lens) => {
        if (
          data.or_material_left &&
          !lens.le_lens_mat?.includes(data.or_material_left ?? '')
        )
          return false;
        if (
          data.or_lens_style_left &&
          !lens.le_lens_style?.includes(data.or_lens_style_left ?? '')
        )
          return false;
        if (
          data.or_lens_color_left &&
          !lens.le_lens_col?.includes(data.or_lens_color_left ?? '')
        )
          return false;

        return true;
      });
    } else {
      lensLeftFinal = lenses;
    }

    //console.log(document.getElementsByName("or_ocht_left")?.getAttribute("diabled"))
    //console.log(document.getElementsByName("or_lens_color_left")?.getAttribute("diabled"))
    if (
      data.or_material_left &&
      data.or_lens_style_left &&
      data.or_lens_color_left
    ) {
      var lens = lensLeftFinal[0];
      if (true == lens.le_ocht) {
        setLOcht(false);
      } else {
        setLOcht(true);
      }
      if (true == lens.le_upper_add) {
        setLUpperAdd(false);
      } else {
        setLUpperAdd(true);
      }
    } else {
      setLOcht(true);
      setLUpperAdd(true);
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
  useEffect(() => {
    var filterCoating = [];
    if (data.or_coating || data.or_tint_color || data.or_mirror) {
      filterCoating = coatings.filter((coating) => {
        if (
          data.or_coating &&
          !coating.lc_lens_coating.includes(data.or_coating)
        )
          return false;
        console.log(coating.lc_tintable);
        if (data.or_tint_color && false == coating.lc_tintable) return false;
        if (data.or_mirror) {
          var mirrors = coating.mirrors?.filter((mirror) => {
            if (!mirror.mr_mirror.includes(data.or_mirror ?? '')) return false;
            return true;
          });
          if (!(mirrors && mirrors.length > 0)) return false;
        }

        return true;
      });
    } else {
      filterCoating = coatings;
    }
    if (data.or_coating) {
      var coating = filterCoating[0];
      if (false == coating.lc_tintable) {
        setDTint(true);
      } else {
        setDTint(false);
      }
    } else {
      setDTint(false);
    }
    var lensCoatings = [];
    lensCoatings = filterCoating.map(
      (coating) => coating.lc_lens_coating ?? '',
    );
    var lensCatingsFiltered = [...new Set(lensCoatings)];
    setFilteredLensCoatings(lensCatingsFiltered);
    var lensMirror = [];
    lensMirror = filterCoating
      .map((coating) => coating.mirrors?.map((mirror) => mirror.mr_mirror))
      .flat();
    var lensMirrorFiltered = [...new Set(lensMirror)] as string[];
    setFilteredLensMirrors(lensMirrorFiltered);
  }, [data.or_coating, data.or_tint_color, data.or_mirror]);
  let errormessage;
  if (Object.keys(errors).length > 0) {
    //console.log(Object.values(errors)[0]);
    if (!('' == Object.values(errors)[0])) {
      errormessage = <Flex justify="center"> <Text c="red" fw="bold">Please see errors below</Text>    </Flex>;
    }
  }
  return (
    <>

      <Box>
        <Button onClick={() => router.get(route('orders.index'))}>
          Back to Home
        </Button>
      </Box>
      {errormessage}
      <Grid columns={5} gutter="xl" align="center">
        <Grid.Col span={2}>
          <Stack>
            <TextInput
              label="Ship To Account"
              {...getFieldProps('or_ship_to')}
              disabled={true}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              label="Employee First Name"
              {...getFieldProps('or_emp_name_first')}
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              label="Employee Phone"
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
              <a rel="noopener noreferrer" href="https://us.hoyasafety.com/GetToken/" target="_blank">
                <Button mt={25}>Get a Token</Button>
              </a>
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
              label="Employee Last Name"
              styles={getFieldStyles({ blueLabel: true })}
            />
            <TextInput
              {...getFieldProps('or_emp_email')}
              label="Employee Email"
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
            name="or_jobtype"
            label="Job Type"
            value={data.or_jobtype}
            onChange={e => setData('or_jobtype', e)}
            styles={getFieldStyles({ blueLabel: true })}
          >
            <Stack mt="xs">
              <Radio value="New" label="New Job" />
              <Radio value="Remake" label="Remake / Warranty" />
            </Stack>
          </Radio.Group>
          <Radio.Group
            name="or_eyes"
            label="Eyes"
            value={data.or_eyes}
            onChange={e => setData('or_eyes', e)}
            styles={getFieldStyles({ blueLabel: true })}
            mt="xl"
          >
            <Stack mt="xs">
              <Radio value="Both" label="Both" />
              <Radio value="Left" label="Left" />
              <Radio value="Right" label="Right" />
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
          headers={['Material', 'Style', 'Color', 'OC Ht', 'Measurement']}
          hasRL
          hasEditable
        >
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_material_right')}
                disabled={rDiasble}
                placeholder="Select Material"
                //data={[]}
                data={filteredLensMaterialsRight}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_style_right')}
                disabled={rDiasble}
                placeholder="Select Lens Style"
                data={filteredLensStlyesRight}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_color_right')}
                disabled={rDiasble}
                placeholder="Select Lens Color"
                data={filteredLensColorsRight}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_ocht_right')} disabled={rOcht} />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_measurement_right')}
                data={['Above Frame', 'Below Frame']}
                disabled={rOcht}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_material_left')}
                disabled={lDiasble}
                placeholder="Select Material"
                data={filteredLensMaterialsLeft}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_style_left')}
                disabled={lDiasble}
                placeholder="Select Lens Style"
                data={filteredLensStlyesLeft}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_lens_color_left')}
                disabled={lDiasble}
                placeholder="Select Lens Color"
                data={filteredLensColorsLeft}
              //data={['test', 'test2', 'test3', 'test4']}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_ocht_left')} disabled={lOcht} />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_measurement_left')}
                data={['Above Frame', 'Below Frame']}
                disabled={lOcht}
              />
            </Table.Td>
          </Table.Tr>
        </OrderTable>
        <OrderTable
          headers={[
            'Sphere',
            'Cyl',
            'Axis',
            'Dist PD',
            'Near PD',
            'Prism (U/D)',
            'Prism (I/O)',
          ]}
          hasRL
          hasEditable
        >
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_sphere_right')}
                disabled={rDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_cyl_right')}
                disabled={rDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_axis_right')}
                disabled={rDiasble}
                onBlur={xrightBlur}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_dist_right')}
                disabled={rDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_near_right')}
                disabled={rDiasble}
              />
            </Table.Td>
            <Table.Td w="200">
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_up_right')}
                  disabled={rDiasble}

                  data={['*', 'UP', 'DOWN']} />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_up_right_value')}
                  disabled={rDiasble}
                />
              </Group>
            </Table.Td>
            <Table.Td w="200">
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_in_right')}
                  disabled={rDiasble}

                  data={['*', 'IN', 'OUT']} />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_in_right_value')}
                  disabled={rDiasble}
                />
              </Group>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_sphere_left')}
                disabled={lDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_cyl_left')}
                disabled={lDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_axis_left')}
                disabled={lDiasble}
                onBlur={xleftBlur}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_dist_left')}
                disabled={lDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_pd_near_left')}
                disabled={lDiasble}
              />
            </Table.Td>
            <Table.Td>
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_up_left')} data={['*', 'UP', 'DOWN']}
                  disabled={lDiasble}
                />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_up_left_value')}
                  disabled={lDiasble}
                />
              </Group>
            </Table.Td>
            <Table.Td>
              <Group>
                <Select mr="-10" w="83"  {...getFieldProps('or_prism_in_left')}
                  disabled={lDiasble}

                  data={['*', 'IN', 'OUT']} />
                <TextInput ml="-10" w="94" {...getFieldProps('or_prism_in_left_value')}
                  disabled={lDiasble}
                />
              </Group>
            </Table.Td>
          </Table.Tr>
        </OrderTable>
        <OrderTable
          headers={[
            'Add',
            'Upper Add',
            'Seg Height',
            'Coating',
            'Tint Color',
            'Tint %',
            'Mirror',
          ]}
          hasRL
          hasEditable
        >
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_add_right')}
                disabled={rDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput
                {...getFieldProps('or_upper_add_right')}
                disabled={rUpperAdd}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_seg_height_right')}
                disabled={rDiasble}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_coating')}
                placeholder="Select Coating"
                data={filteredLensCoatings}
              //data={lensCoatings.map((lensCoating) => lensCoating.lc_lens_coating ?? '')}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_tint_color')}
                placeholder="Select Tint"
                data={tints.map((tint) => tint.ti_color ?? '')}
                disabled={dTint}
              />
            </Table.Td>
            <Table.Td>
              <TextInput
                {...getFieldProps('or_tint_percent')}
                disabled={dTint}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_mirror')}
                placeholder="Select Mirror"
                data={filteredLensMirrors}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <TextInput {...getFieldProps('or_add_left')}
                disabled={lDiasble}
              />
            </Table.Td>
            <Table.Td>
              <TextInput
                {...getFieldProps('or_upper_add_left')}
                disabled={lUpperAdd}
              />
            </Table.Td>
            <Table.Td>
              <TextInput {...getFieldProps('or_seg_height_left')}
                disabled={lDiasble}
              />
            </Table.Td>
            <Table.Td />
            <Table.Td />
            <Table.Td />
            <Table.Td />
          </Table.Tr>
        </OrderTable>

        <OrderTable
          ml={26}
          headers={['Frame Source', 'Frame Manufacturer', 'Frame Style']}
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
                data={filteredFrameBrands}
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
          headers={[
            'Color',
            'Size',
            'Side Shield',
            'Side Shield Color',
            'Extra SS',
          ]}
        >
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_color')}
                //data={filteredFrames.map((frame) => frame.fr_frame_color ?? '')}
                //data={frames.map((frame) => frame.variations?.fv_frame_color ?? '')}
                //data={frames.map((frame) => frame.variations?.map((frameVariation) => frameVariation.fv_frame_color ?? ''))}
                data={filteredFrameColors}
              //onDropdownOpen={ }
              //data={[]}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_size')}
                //data={filteredFrames.map((frame) => frame.fr_eyesize ?? '')}
                data={filteredFrameSizes}
              //data={[]}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_side_shield')}
                data={filteredSS}
                disabled={sS}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_frame_side_shield_color')}
                data={filteredSSColor}
                disabled={sS}
              />
            </Table.Td>
            <Table.Td>
              <Select
                {...getFieldProps('or_extra_ss')}
                data={['n/a', '1', '2']}
                disabled={sS}
              />
            </Table.Td>
          </Table.Tr>
        </OrderTable>

        <OrderTable ml={26} maw={380} headers={['Special']}>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_add_on_1')}
                placeholder="Select Special Add on"
                data={miscs.map((misc) => misc.mi_item_name ?? '')}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_add_on_2')}
                placeholder="Select Special Add on"
                data={miscs.map((misc) => misc.mi_item_name ?? '')}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Select
                {...getFieldProps('or_add_on_3')}
                placeholder="Select Special Add on"
                data={miscs.map((misc) => misc.mi_item_name ?? '')}
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
        <Button
          type="submit"
          name="action"
          value="save"
          onClick={() => setData('method', 'save')}
        >
          Save as Pending
        </Button>
        <Button
          type="submit"
          name="action"
          value="submit"
          onClick={() => setData('method', 'submit')}
        >
          Submit
        </Button>
      </Group>
    </>
  );
}
