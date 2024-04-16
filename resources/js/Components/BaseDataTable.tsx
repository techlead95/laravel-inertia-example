import { DataTable, DataTableProps } from 'mantine-datatable';

export default function BaseDataTable<T = Record<string, unknown>>({
  minHeight = 150,
  ...props
}: DataTableProps<T>) {
  return <DataTable minHeight={180} {...props} />;
}
