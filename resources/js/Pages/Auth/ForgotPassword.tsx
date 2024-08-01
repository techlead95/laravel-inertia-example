
import { Box, Container, Flex, Group, Center, Text, Stack, TextInput, Button } from '@mantine/core';
import safeVisionImage from '../../../images/safe-vision.png';
import useBaseForm from '@/Hooks/useBaseForm';
import { Session } from 'inspector';
import { get } from 'lodash';
import { PasswordForgot } from '@/types';


export default function ForgotPassword() {
    const { getFieldProps, data, setData, post, errors } = useBaseForm<PasswordForgot>();
    console.log(errors);

    return (
        <Flex h="100%" direction="column">
            <Box>
                <Container size="xl">
                    <Group justify="space-between" align="center" py="xs">
                        <img src={safeVisionImage} />
                        <Group gap={4}>
                        </Group>
                    </Group>
                    <Group></Group>
                </Container>
            </Box>

            <Box bg="blue" py="lg">
                <Container size="xl" mih={24}>
                </Container>
            </Box>

            <Box style={{ flex: 1 }}>
                <Container size="xl" h="100%">
                    <Flex py="xl" direction="column" h="100%">
                        <Center>

                            <Stack
                                component="form"
                                gap="xl"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    post(route('password.username'));
                                }}
                            >
                                <Text size="xl" fw={700}>Forgot Password?</Text>

                                <Text size="md">
                                    If you've forgotten your password, please enter your registered username (not your email address) below and we will send a link you can use to reset it.
                                </Text>
                                <TextInput
                                    {...getFieldProps('username')}
                                    value={data.username}
                                    onChange={(event) => setData('username', event.currentTarget.value)}
                                />

                                <Button type="submit">Recover Account</Button>

                                <Text size="xl" fw={700}>Forgotten username?</Text>

                                <Text size="md">
                                    If you've forgotten your username, please get in touch with via email at <a href="mailto:safevision@hoya.com">safevision@hoya.com</a>. Please include account number, name and contact information within your requests to expedite the reset process.
                                </Text>
                            </Stack>
                        </Center>
                    </Flex>
                </Container>
            </Box>
        </Flex >
    );


}