import LabelledContent from '@/Components/LabelledContent';
import { DATE_DISPLAY_FORMAT } from '@/constants';
import { Order } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Box, Button, Grid, Group, Stack, Table, Text } from '@mantine/core';
import dayjs from 'dayjs';

import OrderTable from './OrderTable';

interface Props {
  order: Order;
}

export default function OrderDetail({ order }: Props) {
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
            {order.or_rx_number}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Patient Name">
            02548137 Juggunenson
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Status">In Process</LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="ETA">5 Days</LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Date Created">
            {dayjs(order.created_at).format(DATE_DISPLAY_FORMAT)}
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Hoya Lab">Ramsey</LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Optic Job Number">02548137</LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Location">Sureface</LabelledContent>
        </Grid.Col>
        <Grid.Col span={1}>
          <LabelledContent label="Order By">
            624 - Johns Perfect Symposium
          </LabelledContent>
        </Grid.Col>
        <Grid.Col span={4} mt="lg">
          <Group justify="space-between">
            <Button>Place on Hold</Button>
            <Button>Cancel</Button>
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
                'Prism (I/O)',
                'Prism (U/D)',
              ]}
              hasRL
            >
              <Table.Tr>
                <Table.Td ta="center">+2.75</Table.Td>
                <Table.Td ta="center">-1.25</Table.Td>
                <Table.Td ta="center">85</Table.Td>
                <Table.Td ta="center" />
                <Table.Td ta="center">64</Table.Td>
                <Table.Td ta="center" />
                <Table.Td ta="center" />
              </Table.Tr>
              <Table.Tr>
                <Table.Td ta="center">+1.75</Table.Td>
                <Table.Td ta="center">-0.75</Table.Td>
                <Table.Td ta="center">75</Table.Td>
                <Table.Td ta="center" />
                <Table.Td ta="center">64</Table.Td>
                <Table.Td ta="center" />
                <Table.Td ta="center" />
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
            >
              <Table.Tr>
                <Table.Td ta="center">2.25</Table.Td>
                <Table.Td ta="center">NA</Table.Td>
                <Table.Td ta="center">24</Table.Td>
                <Table.Td ta="center">Grey 3</Table.Td>
                <Table.Td ta="center">60</Table.Td>
                <Table.Td ta="center">None</Table.Td>
                <Table.Td ta="center">Recharge</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td ta="center">2.25</Table.Td>
                <Table.Td ta="center">NA</Table.Td>
                <Table.Td ta="center">24</Table.Td>
                <Table.Td ta="center">Grey 3</Table.Td>
                <Table.Td ta="center">60</Table.Td>
                <Table.Td ta="center">None</Table.Td>
                <Table.Td ta="center">Recharge</Table.Td>
              </Table.Tr>
            </OrderTable>
            <OrderTable
              headers={['Material', 'Style', 'Color', 'Ocht', 'Measurement']}
              hasRL
            >
              <Table.Tr>
                <Table.Td ta="center">Phoenix</Table.Td>
                <Table.Td ta="center">Single Vision</Table.Td>
                <Table.Td ta="center">Clear</Table.Td>
                <Table.Td ta="center" />
                <Table.Td ta="center" />
              </Table.Tr>
              <Table.Tr>
                <Table.Td ta="center">Phoenix</Table.Td>
                <Table.Td ta="center">Single Vision</Table.Td>
                <Table.Td ta="center">Clear</Table.Td>
                <Table.Td ta="center" />
                <Table.Td ta="center" />
              </Table.Tr>
            </OrderTable>
            <Group ml={26} gap="xl" align="flex-start">
              <Stack flex={1}>
                <OrderTable headers={['Special']}>
                  <Table.Tr>
                    <Table.Td ta="center">Roll and Polish</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>&nbsp;</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>&nbsp;</Table.Td>
                  </Table.Tr>
                </OrderTable>
                <OrderTable headers={['Notes']}>
                  <Table.Tr>
                    <Table.Td>
                      <Box mih={150}>
                        This is a notes section that was entered in by the ECP
                      </Box>
                    </Table.Td>
                  </Table.Tr>
                </OrderTable>
              </Stack>
              <Box flex={1}>
                <OrderTable headers={['Frame Information']}>
                  <Table.Tr>
                    <Table.Td ta="center">Supplied</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Frame Style: ZT200</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Frame Size 57-18-140</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Color: Navy Blue</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">SideSheilds: Integrated</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">SideShield Qty: NA</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td ta="center">Case: D-Case</Table.Td>
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
