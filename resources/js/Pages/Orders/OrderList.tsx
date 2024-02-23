import PageTitle from '@/Components/PageTitle';
import SearchForm from '@/Components/SearchForm';
import { Group, SegmentedControl } from '@mantine/core';
import { useState } from 'react';

enum OrderStatus {
  Active = 'Active Orders',
  Shipped = 'Shipped Orders',
  Problem = 'Problem Orders',
}

export default function Orders() {
  const [status, setStatus] = useState(OrderStatus.Active);

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
    </>
  );
}
