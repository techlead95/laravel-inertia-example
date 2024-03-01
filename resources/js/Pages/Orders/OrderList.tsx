import BaseDataTable from '@/Components/BaseDataTable';
import DateRangeFilterForm from '@/Components/DateRangeFilterForm';
import PageTitle from '@/Components/PageTitle';
import SearchForm from '@/Components/SearchForm';
import { Order } from '@/types';
import { DATE_DISPLAY_FORMAT } from '@/utils';
import { router } from '@inertiajs/react';
import { Group, SegmentedControl } from '@mantine/core';
import dayjs from 'dayjs';
import { DataTableColumn } from 'mantine-datatable';
import { useMemo, useState } from 'react';

enum OrderStatus {
  Active = 'Active Orders',
  Shipped = 'Shipped Orders',
  Problem = 'Problem Orders',
}

interface Props {
  search: string | null;
  startDate: string | null;
  endDate: string | null;
  orders: Order[];
}

export default function Orders({ search, startDate, endDate, orders }: Props) {
  const [status, setStatus] = useState(OrderStatus.Active);

  const columns = useMemo(() => {
    const result: DataTableColumn<Order>[] = [
      {
        accessor: 'created_at',
        title: 'Date Created',
        render: (order) => dayjs(order.created_at).format(DATE_DISPLAY_FORMAT),
      },
      { accessor: 'or_rx_number', title: 'RX Number' },
      { accessor: 'orderBy', title: 'Order By' },
      { accessor: 'orderByName', title: 'Order By Name' },
      { accessor: 'patientName', title: 'Patient Name' },
    ];

    if (status === OrderStatus.Active) {
      result.push(
        { accessor: 'location', title: 'Location' },
        { accessor: 'status', title: 'Status' },
        { accessor: 'eta', title: 'ETA' },
      );
    }

    if (status === OrderStatus.Shipped) {
      result.push({ accessor: 'trackingNumber', title: 'Tracking Number' });
    }

    if (status === OrderStatus.Problem) {
      result.push({ accessor: 'location', title: 'Location' });
    }

    return result;
  }, [status]);

  return (
    <>
      <PageTitle title="Orders" />
      <Group mt="xl" justify="space-between">
        <SegmentedControl
          value={status}
          onChange={(newStatus) => setStatus(newStatus as OrderStatus)}
          data={Object.values(OrderStatus)}
        />
        <SearchForm
          initialValue={search}
          onSearch={(newSearch) => {
            router.get(route('orders.index', { search: newSearch }));
          }}
          inputWidth={220}
          hideClear
        />
      </Group>
      <DateRangeFilterForm
        mt="lg"
        label="Filter by date created"
        initialStartDate={startDate}
        initialEndDate={endDate}
        onApply={(newStartDate, newEndDate) => {
          router.get(
            route('orders.index', {
              startDate: newStartDate,
              endDate: newEndDate,
            }),
          );
        }}
      />
      <BaseDataTable
        mt="xl"
        withTableBorder
        withColumnBorders
        columns={columns}
        records={orders}
      />
    </>
  );
}
