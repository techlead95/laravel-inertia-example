import { ActionIcon, Table } from '@mantine/core';
import { Delete } from '@mui/icons-material';

interface Props {
  onDelete: () => void;
}

export default function DeleteIconCell({ onDelete }: Props) {
  return (
    <Table.Td>
      <ActionIcon variant="subtle" color="red" onClick={onDelete}>
        <Delete />
      </ActionIcon>
    </Table.Td>
  );
}
