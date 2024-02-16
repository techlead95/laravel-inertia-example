import BaseDataTable from '@/Components/BaseDataTable';
import { Checkbox, Stack } from '@mantine/core';

export default function InventoryPanel() {
  return (
    <Stack>
      <Checkbox label="Show Discontinued" />
      <BaseDataTable
        columns={[
          { accessor: 'eye', title: 'Eye' },
          { accessor: 'bridge', title: 'Bridge' },
          { accessor: 'templeType', title: 'Temple Type' },
          { accessor: 'templeSize', title: 'Temple Size' },
          { accessor: 'color', title: 'Color' },
          { accessor: 'stockStatus', title: 'Stock Status' },
          { accessor: 'qoh', title: 'QOH' },
          { accessor: 'qoo', title: 'QOO' },
          { accessor: 'upc', title: 'UPC' },
          { accessor: 'legacyClc', title: 'Legacy CLC' },
          { accessor: 'currentMonthUsage', title: 'Current Month Usage' },
          { accessor: 'lastMonthUsage', title: 'Last Month Usage' },
          { accessor: '3MonthAvg', title: '3 Month Avg' },
          { accessor: 'eta', title: 'ETA' },
        ]}
      />
    </Stack>
  );
}
