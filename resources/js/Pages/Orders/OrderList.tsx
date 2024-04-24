import BaseDataTable from '@/Components/BaseDataTable';
import DateRangeFilterForm from '@/Components/DateRangeFilterForm';
import PageTitle from '@/Components/PageTitle';
import SearchForm from '@/Components/SearchForm';
import { DATE_DISPLAY_FORMAT } from '@/constants';
import { Order } from '@/types';
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
  const [ostatus, setOStatus] = useState(OrderStatus.Active);

  const [filteredOrders, setFilteredOrders] = useState(orders);

  const columns = useMemo(() => {
    const result: DataTableColumn<Order>[] = [
      {
        accessor: 'created_at',
        title: 'Date Created',
        render: (order) => dayjs(order.created_at).format(DATE_DISPLAY_FORMAT),
      },
      { accessor: 'or_portal_order_number', title: 'RX Number' },
      { accessor: 'orderBy', title: 'Order By' },
      { accessor: 'orderByName', title: 'Order By Name' },
      { accessor: 'or_emp_name_last', title: 'Patient Name' },
    ];

    if (ostatus === OrderStatus.Active) {
      result.push(
        { accessor: 'status.ot_station_description', title: 'Location' },
        { accessor: 'status.ot_status', title: 'Status' },
        //{ accessor: 'eta', title: 'ETA' },
      );
      setFilteredOrders(orders.filter(order => order.status.ot_status.includes("In Process") || order.status.ot_status.includes("Pending")));
    }

    if (ostatus === OrderStatus.Shipped) {
      result.push({ accessor: 'status.ot_tracking_no', title: 'Tracking Number' });
      setFilteredOrders(orders.filter(order => order.status.ot_status.includes("Shipped")));
    }

    if (ostatus === OrderStatus.Problem) {
      result.push({ accessor: 'status.ot_station_description', title: 'Location' });

      setFilteredOrders(orders.filter(order => order.status.ot_status.includes("Problem")));
    }

    return result;
  }, [status]);

  return (
    <>
      <PageTitle title="Orders" />
      <Group mt="xl" justify="space-between">
        <SegmentedControl
          value={status}
          onChange={(newStatus) => setOStatus(newStatus as OrderStatus)}
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
        rowBackgroundColor={({ status }) => {
          if (status.ot_status === 'In Process') return 'green';
          if (status.ot_status === 'Problem') return 'red';
        }}
        mt="xl"
        highlightOnHover
        withTableBorder
        withColumnBorders
        columns={columns}
        records={filteredOrders}
        onRowClick={(row) => {
          router.get(route('orders.show', { id: row.record.id }));
        }}
      />
    </>
  );
}
