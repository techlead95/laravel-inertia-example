import BaseDataTable from '@/Components/BaseDataTable';
import DateRangeFilterForm from '@/Components/DateRangeFilterForm';
import MultiSearchForm from '@/Components/MultiSearchForm';
import PageTitle from '@/Components/PageTitle';
import { DATE_DISPLAY_FORMAT } from '@/constants';
import { Order } from '@/types';
import { router } from '@inertiajs/react';
import { Group, SegmentedControl, TextInput } from '@mantine/core';
import dayjs from 'dayjs';
import sortBy from 'lodash/sortBy';
import { DataTableColumn } from 'mantine-datatable';
import { type DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useMemo, useState } from 'react';

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

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Order>>({
    columnAccessor: 'Rx Number',
    direction: 'desc',
  });

  const [filteredOrders, setFilteredOrders] = useState(
    sortBy(orders, 'Rx Number'),
  );

  useEffect(() => {
    const data = sortBy(orders, sortStatus.columnAccessor) as Order[];
    setFilteredOrders(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  const columns = useMemo(() => {
    const result: DataTableColumn<Order>[] = [
      {
        accessor: 'created_at',
        title: 'Date Created',
        render: (order) => dayjs(order.created_at).format(DATE_DISPLAY_FORMAT),
        sortable: true,
      },
      {
        accessor: 'or_portal_order_number',
        title: 'RX Number',
        sortable: true,
      },
      //{ accessor: 'or_portal_order_number', title: 'or_portal_order_number' },
      { accessor: 'or_ordby_billto_dash', title: 'Order By', sortable: true },
      { accessor: 'or_ordby_name', title: 'Order By Name', sortable: true },
      {
        accessor: 'Employee Name',
        render: ({ or_emp_name_first, or_emp_name_last }) =>
          `${or_emp_name_first} ${or_emp_name_last}`,
        sortable: true,
      },
    ];

    if (ostatus === OrderStatus.Active) {
      result.push(
        {
          accessor: 'status.ot_station_description',
          title: 'Location',
          sortable: true,
        },
        { accessor: 'status.ot_status', title: 'Status', sortable: true },
        //{ accessor: 'eta', title: 'ETA' },
      );
      setFilteredOrders(
        orders.filter(
          (order) =>
            order.status?.ot_status?.includes('In Process') ||
            order.status?.ot_status?.includes('Pending'),
        ),
      );
    }

    if (ostatus === OrderStatus.Shipped) {
      result.push({
        accessor: 'status.ot_tracking_no',
        title: 'Tracking Number',
        sortable: true,
      });
      setFilteredOrders(
        orders.filter((order) => order.status?.ot_status?.includes('Shipped')),
      );
    }

    if (ostatus === OrderStatus.Problem) {
      result.push({
        accessor: 'status.ot_station_description',
        title: 'Location',
        sortable: true,
      });

      setFilteredOrders(
        orders.filter((order) => order.status?.ot_status?.includes('Problem')),
        /*orders.filter(
          (order) =>
            !(order.status?.ot_status?.includes('In Process') ||
              order.status?.ot_status?.includes('Pending') ||
              order.status?.ot_status?.includes('Shipped'))
        ),*/
      );
    }

    return result;
  }, [ostatus]);

  return (
    <>
      <PageTitle title="Orders" />
      <Group mt="xl" justify="space-between">
        <SegmentedControl
          value={ostatus}
          onChange={(newStatus) => setOStatus(newStatus as OrderStatus)}
          data={Object.values(OrderStatus)}
        />
        <MultiSearchForm
          initialValues={{ search }}
          onSearch={(newValues) => {
            router.get(route('orders.index', newValues ?? {}));
          }}
        >
          {({ getFieldProps }) => (
            <TextInput
              placeholder="Search Rx #, First or Last name"
              {...getFieldProps('search')}
              description="Search Rx #, Patient First or Last name"
            />
          )}
        </MultiSearchForm>
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
          //console.log(status, status.ot_status)
          //console.log(status.ot_status)
          //if (status.ot_status === 'In Process') return '#232b25';
          if (status.ot_status === 'Problem') return 'red';
          //if (Status === 'In Process') return '#232b25';
          //if (Status === 'Problem') return 'red';
        }}
        /*rowBackgroundColor={({ or_portal_order_number }) => {
          if (or_portal_order_number == 10006) return 'violet';
        }}
        rowColor={({ or_portal_order_number }) => {
          if (or_portal_order_number == 10006) return '#232b25';
        }}*/
        //rowBackgroundColor=
        //backgroundColor='green'
        mt="xl"
        highlightOnHover
        withTableBorder
        withColumnBorders
        columns={columns}
        records={filteredOrders}
        onRowClick={(row) => {
          router.get(route('orders.show', { id: row.record.id }));
        }}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
    </>
  );
}
