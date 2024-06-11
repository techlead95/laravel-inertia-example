import LabelledContent from '@/Components/LabelledContent';
import { DATE_DISPLAY_FORMAT } from '@/constants';
import { Order } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Box, Button, Grid, Group, Stack, Table, Text, Popover } from '@mantine/core';
import dayjs from 'dayjs';

import OrderTable from './OrderTable';

interface Props {
  order: Order;
}

export default function OrderDetail({ order }: Props) {

  //console.log(order)

  const btndisable = !("Pending" == order.status.ot_status);
  return (
    <>

      <Head title="Order Detail" />
      <Grid columns={5} align="center">
        <Grid.Col span={1}>
          <Button onClick={() => router.get(route('orders.index'))}>
            Back to Orders
          </Button>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="RX Number">
            {order.or_portal_order_number}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>

          <LabelledContent label="Employee Name">
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button>
                  {order.or_emp_name_first} {order.or_emp_name_last}
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Text >
                  First Name: {order.or_emp_name_first} <br />
                  Last Name: {order.or_emp_name_last} <br />
                  Phone: {order.or_emp_phone} <br />
                  Employee Number: {order.or_emp_no} <br />
                  Email: {order.or_emp_email} <br />
                  Employee Dept: {order.or_dept} <br />
                  PO: {order.or_po_no} <br />
                  Req: {order.or_req}
                </Text>
              </Popover.Dropdown>
            </Popover>
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Status">
            {order.status.ot_status}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="ETA"></LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Date Created">
            {dayjs(order.created_at).format(DATE_DISPLAY_FORMAT)}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Hoya Lab">
            {order.status.ot_description_text_1}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Tray Id">
            {order.status.ot_description_text_2}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Location">
            {order.status.ot_station_description}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Order By">
            624 - Johns Perfect Symposium
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={4} mt="lg">
          <Group justify="space-between">
            <Button
              onClick={() => router.get(route('orders.edit', { id: order.id }))}
              disabled={btndisable}
            >
              Edit
            </Button>
          </Group>
          <Stack
            mt="lg"
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
                'Sphere',
                'Cyl',
                'Axis',
                'Dist PD',
                'Near PD',
                'Prism (U/D)',
                'Prism (I/O)',
              ]}
              hasRL
            >
              <Table.Tr>
                <Table.Td ta="center">{order.or_sphere_right}</Table.Td>
                <Table.Td ta="center">{order.or_cyl_right}</Table.Td>
                <Table.Td ta="center">{order.or_axis_right}</Table.Td>
                <Table.Td ta="center">{order.or_pd_dist_right}</Table.Td>
                <Table.Td ta="center">{order.or_pd_near_right}</Table.Td>
                <Table.Td ta="center">{order.or_prism_up_right}{order.or_prism_up_right_value}</Table.Td>
                <Table.Td ta="center">{order.or_prism_in_right}{order.or_prism_in_right_value}</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td ta="center">{order.or_sphere_left}</Table.Td>
                <Table.Td ta="center">{order.or_cyl_left}</Table.Td>
                <Table.Td ta="center">{order.or_axis_left}</Table.Td>
                <Table.Td ta="center">{order.or_pd_dist_left}</Table.Td>
                <Table.Td ta="center">{order.or_pd_near_left}</Table.Td>
                <Table.Td ta="center">{order.or_prism_up_left}{order.or_prism_up_left_value}</Table.Td>
                <Table.Td ta="center">{order.or_prism_in_left}{order.or_prism_in_left_value}</Table.Td>
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
            >
              <Table.Tr>
                <Table.Td ta="center">{order.or_add_right}</Table.Td>
                <Table.Td ta="center">{order.or_upper_add_right}</Table.Td>
                <Table.Td ta="center">{order.or_seg_height_right}</Table.Td>
                <Table.Td ta="center">{order.or_coating}</Table.Td>
                <Table.Td ta="center">{order.or_tint_color}</Table.Td>
                <Table.Td ta="center">{order.or_tint_percent}</Table.Td>
                <Table.Td ta="center">{order.or_mirror}</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td ta="center">{order.or_add_left}</Table.Td>
                <Table.Td ta="center">{order.or_upper_add_left}</Table.Td>
                <Table.Td ta="center">{order.or_seg_height_left}</Table.Td>
                <Table.Td ta="center">{order.or_coating}</Table.Td>
                <Table.Td ta="center">{order.or_tint_color}</Table.Td>
                <Table.Td ta="center">{order.or_tint_percent}</Table.Td>
                <Table.Td ta="center">{order.or_mirror}</Table.Td>
              </Table.Tr>
            </OrderTable>
            <OrderTable
              headers={['Material', 'Style', 'Color', 'OC Ht', 'Measurement']}
              hasRL
            >
              <Table.Tr>
                <Table.Td ta="center">{order.or_material_right}</Table.Td>
                <Table.Td ta="center">{order.or_lens_style_right}</Table.Td>
                <Table.Td ta="center">{order.or_lens_color_right}</Table.Td>
                <Table.Td ta="center">{order.or_ocht_right}</Table.Td>
                <Table.Td ta="center">{order.or_measurement_right}</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td ta="center">{order.or_material_left}</Table.Td>
                <Table.Td ta="center">{order.or_lens_style_left}</Table.Td>
                <Table.Td ta="center">{order.or_lens_color_left}</Table.Td>
                <Table.Td ta="center">{order.or_ocht_left}</Table.Td>
                <Table.Td ta="center">{order.or_measurement_left}</Table.Td>
              </Table.Tr>
            </OrderTable>
            <Group ml={26} gap="xl" align="flex-start">
              <Stack flex={1}>
                <OrderTable headers={['Special']}>
                  <Table.Tr>
                    <Table.Td ta="center">{order.or_add_on_1}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">{order.or_add_on_2}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">{order.or_add_on_3}</Table.Td>
                  </Table.Tr>
                </OrderTable>
                <OrderTable headers={['Notes']}>
                  <Table.Tr>
                    <Table.Td>
                      <Box mih={150}>
                        {order.or_notes}
                      </Box>
                    </Table.Td>
                  </Table.Tr>
                </OrderTable>
              </Stack>
              <Box flex={1}>
                <OrderTable headers={['Frame Source']}>
                  <Table.Tr>
                    <Table.Td ta="center">{order.or_frame_info}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Frame Style: {order.or_frame_style}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Frame Size {order.or_frame_size}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Color: {order.or_frame_color}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">SideSheilds: {order.or_frame_side_shield}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">SideShield Qty: {order.or_extra_ss}</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Case: {order.or_frame_case}</Table.Td>
                  </Table.Tr>
                </OrderTable>
              </Box>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
}
