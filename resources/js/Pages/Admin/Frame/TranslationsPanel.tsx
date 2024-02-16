import BaseDataTable from '@/Components/BaseDataTable';
import { Stack, Text } from '@mantine/core';

export default function TranslationsPanel() {
  return (
    <Stack>
      <Stack>
        <Text fw="bold" size="lg">
          Optic Legacy
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'eye', title: 'Eye' },
            { accessor: 'bridge', title: 'Bridge' },
            { accessor: 'templeType', title: 'Temple Type' },
            { accessor: 'templeSize', title: 'Temple Size' },
            { accessor: 'color', title: 'Color' },
            { accessor: 'opticLegacy', title: 'Optic Legacy' },
            { accessor: 'legacyAddCode', title: 'Legacy Add Code' },
            { accessor: 'legacyStockCode', title: 'Legacy Stock Code' },
            { accessor: 'o2AddCode', title: 'O2 Add Code' },
            { accessor: 'o2StockCode', title: 'O2 Stock Code' },
          ]}
          records={[]}
        />
      </Stack>

      <Stack>
        <Text fw="bold" size="lg">
          DVI
        </Text>
        <BaseDataTable
          columns={[
            { accessor: 'eye', title: 'Eye' },
            { accessor: 'bridge', title: 'Bridge' },
            { accessor: 'templeType', title: 'Temple Type' },
            { accessor: 'templeSize', title: 'Temple Size' },
            { accessor: 'color', title: 'Color' },
            { accessor: 'dviFrmMfr', title: 'DVI FRM MFR' },
            { accessor: 'dviFrmStyle', title: 'DVI FRM Style' },
            { accessor: 'dviFrmColor', title: 'DVI FRM Color' },
            { accessor: 'dviFrmEye', title: 'DVI FRM Eye' },
            { accessor: 'dviFrmBridge', title: 'DVI FRM Bridge' },
            { accessor: 'dviFrmTemple', title: 'DVI FRM Temple' },
            { accessor: 'dviFrmTplType', title: 'DVI FRM TPL Type' },
          ]}
          records={[]}
        />
      </Stack>
    </Stack>
  );
}
