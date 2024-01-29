import { includesIgnoreCase, inputHorizontalStyles } from '@/utils';
import { Head, Link } from '@inertiajs/react';
import { Button, Group, Stack, Switch, TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  email: string;
  stAccount: string;
  stName: string;
}

interface Props {
  users: User[];
}

export default function AdminHome({ users }: Props) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [accountNumberFilter, setAccountNumberFilter] = useState('');

  useEffect(() => {
    if (users.length) {
      setSelectedUsers([users[0]]);
    }
  }, [users]);

  return (
    <>
      <Head title="Admin Home" />
      <Group style={{ flex: 1 }} gap="xl" align="flex-start">
        <Stack style={{ flex: 3 }} h="100%">
          <Group>
            <TextInput
              placeholder="Search by Account Number"
              w={280}
              value={accountNumberFilter}
              onChange={(e) => setAccountNumberFilter(e.target.value)}
            />
            <Button variant="outline" leftSection={<Search />}>
              Search
            </Button>
          </Group>
          <DataTable
            style={{ flex: 1 }}
            striped
            withTableBorder
            borderRadius="md"
            columns={[
              { accessor: 'id', title: 'ID' },
              { accessor: 'email', title: 'PORTAL LOGIN (Email)' },
              { accessor: 'stAccount', title: 'ST Account' },
              { accessor: 'stName', title: 'ST Name' },
            ]}
            records={users.filter((user) =>
              includesIgnoreCase(user.stName, accountNumberFilter),
            )}
            selectedRecords={selectedUsers}
            onRowClick={({ record }) => setSelectedUsers([record])}
            onSelectedRecordsChange={setSelectedUsers}
          />
        </Stack>
        <Stack component="form" h="100%" style={{ flex: 2 }} gap="xs">
          <TextInput label="Email Address" styles={inputHorizontalStyles} />
          <TextInput label="Ship To Account" styles={inputHorizontalStyles} />
          <TextInput label="Title" styles={inputHorizontalStyles} />
          <TextInput label="First Name" styles={inputHorizontalStyles} />
          <TextInput label="Last Name" styles={inputHorizontalStyles} />
          <TextInput label="Business Name" styles={inputHorizontalStyles} />
          <TextInput label="Address 1" styles={inputHorizontalStyles} />
          <TextInput label="Address 2" styles={inputHorizontalStyles} />
          <TextInput label="PO Box" styles={inputHorizontalStyles} />
          <TextInput label="City" styles={inputHorizontalStyles} />
          <TextInput label="State\Province" styles={inputHorizontalStyles} />
          <TextInput label="Zip" styles={inputHorizontalStyles} />
          <TextInput label="Country" styles={inputHorizontalStyles} />
          <TextInput label="NickName" styles={inputHorizontalStyles} />
          <TextInput label="EXTRA 4" styles={inputHorizontalStyles} />
          <TextInput label="EXTRA 5" styles={inputHorizontalStyles} />
          <TextInput label="EXTRA 6" styles={inputHorizontalStyles} />
          <TextInput label="EXTRA 7" styles={inputHorizontalStyles} />
        </Stack>
        <Stack style={{ flex: 1 }} gap="xs">
          <Switch defaultChecked label="Portal Active" mb="xl" />
          <Link href="/admin/ship-to-account-maintenance">
            <Button variant="outline">Ship to Account Maintenance</Button>
          </Link>
          <Link href="/admin/modules">
            <Button variant="outline" w="100%">
              Modules
            </Button>
          </Link>
          <Button variant="outline" disabled>
            Default Settings
          </Button>
          <Button variant="outline" disabled>
            FUTURE 1
          </Button>
          <Button variant="outline" disabled>
            FUTURE 2
          </Button>
          <Button variant="outline" disabled>
            FUTURE 3
          </Button>
          <Button variant="outline" disabled>
            FUTURE 4
          </Button>
          <Button variant="outline" disabled>
            FUTURE 5
          </Button>
        </Stack>
      </Group>
    </>
  );
}
