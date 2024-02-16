import BaseDataTable from '@/Components/BaseDataTable';

export default function PricesPanel() {
  return (
    <BaseDataTable
      columns={[
        { accessor: 'eye', title: 'Eye' },
        { accessor: 'bridge', title: 'Bridge' },
        { accessor: 'templeType', title: 'Temple Type' },
        { accessor: 'templeSize', title: 'Temple Size' },
        { accessor: 'color', title: 'Color' },
        { accessor: 'cost', title: 'Cost' },
        { accessor: 'retail', title: 'Retail' },
        { accessor: 'offloadCost', title: 'Offload Cost' },
      ]}
      records={[]}
    />
  );
}
