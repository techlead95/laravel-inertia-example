import BaseDataTable from '@/Components/BaseDataTable';
import DateRangeFilterForm from '@/Components/DateRangeFilterForm';
import PageTitle from '@/Components/PageTitle';
import SearchForm from '@/Components/SearchForm';
import { Group, SegmentedControl } from '@mantine/core';
import { useMemo, useState } from 'react';

enum OrderStatus {
  Active = 'Active Orders',
  Shipped = 'Shipped Orders',
  Problem = 'Problem Orders',
}

export default function Orders() {
  const [status, setStatus] = useState(OrderStatus.Active);

  const columns = useMemo(() => {
    const result = [
      { accessor: 'dateCreated', title: 'Date Created' },
      { accessor: 'rxNumber', title: 'RX Number' },
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
          initialValue="Smith"
          onSearch={() => {}}
          inputWidth={220}
          hideClear
        />
      </Group>
      <DateRangeFilterForm mt="lg" label="Filter by date created" />
      <BaseDataTable
        mt="xl"
        withTableBorder
        withColumnBorders
        columns={columns}
        records={[]}
      />
    </>
  );
}
