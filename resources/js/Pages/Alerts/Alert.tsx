import { Stack, Text, Title } from "@mantine/core";
import { DateTime } from "luxon";

interface Props {
  date: DateTime;
  title: string;
  body: string;
}

export default function Alert({ date, title, body }: Props) {
  return <Stack gap="xs">
    <Title order={3}>{date.toFormat('MM-dd-yyyy t ZZZZ')} - {title}</Title>
    <Text>{body}</Text>
  </Stack>
}
