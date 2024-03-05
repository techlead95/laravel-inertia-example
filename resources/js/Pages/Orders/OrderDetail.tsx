import LabelledContent from '@/Components/LabelledContent';
import { Order } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Button, Grid } from '@mantine/core';

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
      </Grid>
    </>
  );
}
