import { Head, router } from '@inertiajs/react';
import { ActionIcon, Group, Title, useMantineTheme } from '@mantine/core';
import { ChevronLeft } from '@mui/icons-material';

interface Props {
  title: string;
  showBackButton?: boolean;
  backUrl?: string;
}

export default function PageTitle({ title, showBackButton, backUrl }: Props) {
  const theme = useMantineTheme();

  return (
    <>
      <Head title={title} />
      <Group>
        {showBackButton && (
          <ActionIcon
            variant="transparent"
            color={theme.black}
            onClick={() => {
              if (backUrl) {
                router.visit(backUrl);
              } else {
                history.back();
              }
            }}
          >
            <ChevronLeft />
          </ActionIcon>
        )}
        <Title order={1}>{title}</Title>
      </Group>
    </>
  );
}
