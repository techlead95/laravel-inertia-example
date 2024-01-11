import { Head, router } from '@inertiajs/react';
import { ActionIcon, Group, Title, useMantineTheme } from '@mantine/core';
import { ChevronLeft } from '@mui/icons-material';

interface Props {
  title: string;
  backUrl?: string;
}

export default function PageTitle({ title, backUrl }: Props) {
  const theme = useMantineTheme();

  return (
    <>
      <Head title={title} />
      <Group>
        {backUrl && (
          <ActionIcon
            variant="transparent"
            color={theme.black}
            onClick={() => router.visit(backUrl)}
          >
            <ChevronLeft />
          </ActionIcon>
        )}
        <Title order={1}>{title}</Title>
      </Group>
    </>
  );
}
