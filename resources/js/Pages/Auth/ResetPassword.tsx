
import { Box, Container, Flex, Group, Center, Text, Stack, TextInput, Button, PasswordInput } from '@mantine/core';
import safeVisionImage from '../../../images/safe-vision.png';
import useBaseForm from '@/Hooks/useBaseForm';
import { Session } from 'inspector';
import { get } from 'lodash';
import { PasswordForgot } from '@/types';

interface Props {
    token: String;
}
export default function ForgotPassword({ token }: Props) {

    const { getFieldProps, data, setData, post, } = useBaseForm({
        //email: '',
        token: token,
        password: '',
        password_confirmation: '',
    });
    //const { getFieldProps, data, setData, post, errors } = useBaseForm<PasswordForgot>();
    //console.log(errors);

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
                                    post(route('password.store'));
                                }}

                            >
                                <Text size="xl" fw={700}>Set your password</Text>

                                <Text size="md">
                                    Please enter your password below.
                                </Text>

                                <Text size="md">
                                    Your password must be at least 8 characters in length, including one lowercase letter, one uppercase letter, one digit and one special character.
                                </Text>
                                <PasswordInput
                                    {...getFieldProps('password')}
                                    label="Create a new password for your account:"
                                    value={data.password}
                                    onChange={(event) => setData('password', event.currentTarget.value)}

                                />

                                <PasswordInput
                                    {...getFieldProps('password_confirmation')}
                                    label="Confirm your chosen password:"
                                    value={data.password_confirmation}
                                    onChange={(event) => setData('password_confirmation', event.currentTarget.value)}
                                />

                                <Button type="submit">Reset Password</Button>


                            </Stack>
                        </Center>
                    </Flex>
                </Container>
            </Box>
        </Flex >
    );


}