import { inputHorizontalStyles } from '@/utils';
import { Group, Stack, Switch, TextInput, Textarea } from '@mantine/core';
import { DataTable } from 'mantine-datatable';

export default function FramePanel() {
  return (
    <>
      <DataTable
        columns={[
          { accessor: 'eye', title: 'Eye' },
          { accessor: 'bridge', title: 'Bridge' },
          { accessor: 'templeType', title: 'Temple Type' },
          { accessor: 'color', title: 'Color' },
          { accessor: 'a', title: 'A' },
          { accessor: 'b', title: 'B' },
          { accessor: 'ed', title: 'ED' },
          { accessor: 'dbl', title: 'DBL' },
          {
            accessor: 'nonDigitalDefaultSeg',
            title: 'Non Digital Default Seg',
          },
          {
            accessor: 'digitalDefaultSeg',
            title: 'Digital Default Seg',
          },
        ]}
        records={[
          {
            id: 1,
            eye: '1',
            bridge: '2',
            templteType: '3',
            color: '4',
            a: '5',
            b: '6',
            ed: '7',
            dbl: '8',
            nonDigitalDefaultSeg: '9',
            digitalDefaultSeg: '10',
          },
        ]}
      />
      <Group component="form" align="flex-start">
        <Stack gap="xs">
          <TextInput label="Edge" styles={inputHorizontalStyles} />
          <TextInput label="Material" styles={inputHorizontalStyles} />
          <TextInput label="Min Edge" styles={inputHorizontalStyles} />
          <TextInput label="Base Curve Min" styles={inputHorizontalStyles} />
          <TextInput label="Base Curve Max" styles={inputHorizontalStyles} />
          <TextInput label="Minimum Near PD" styles={inputHorizontalStyles} />
          <TextInput label="Edge" styles={inputHorizontalStyles} />
          <Switch defaultChecked label="Non-Conductive" ml={166} />
          <Switch defaultChecked label="Tight Fit" ml={166} />
          <Switch defaultChecked label="Wrap" ml={166} />
        </Stack>
        <Textarea
          label="Notes"
          styles={inputHorizontalStyles}
          rows={4}
          miw={580}
        />
      </Group>
    </>
  );
}
