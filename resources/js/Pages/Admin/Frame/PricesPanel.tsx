import { DataTable } from 'mantine-datatable';

export default function PricesPanel() {
  return (
    <DataTable
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
      records={[
        {
          id: 1,
          eye: '1',
          bridge: '2',
          templeType: '3',
          templeSize: '4',
          color: '5',
          cost: '6',
          retail: '7',
          offloadCost: '8',
        },
      ]}
    />
  );
}
