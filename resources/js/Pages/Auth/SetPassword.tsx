
import { Box, Container, Flex, Group, Center, Text, Stack, TextInput, Button, PasswordInput, Checkbox, Anchor } from '@mantine/core';
import safeVisionImage from '../../../images/safe-vision.png';
import useBaseForm from '@/Hooks/useBaseForm';
import { Session } from 'inspector';
import { get } from 'lodash';
import { PasswordForgot } from '@/types';

interface Props {
    token: String;
    firstName: String;
    lastName: String;
    contactID: String;
}
export default function SetPassword({ token, firstName, lastName, contactID }: Props) {

    const { getFieldProps, data, setData, post, } = useBaseForm({
        //email: '',
        token: token,
        contactid: contactID,
        first_name: firstName,
        last_name: lastName,
        password: '',
        password_confirmation: '',
        confirm: false,
        terms: false,

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
                                    post(route('password.initialized'));
                                }}
                            >
                                <Text size="xl" fw={700}>Welcome to your SafeVision Hub account, {firstName + ' ' + lastName}</Text>
                                <Text size="md">
                                    You've been invited to register for the new SafeVision Hub.  To get started, please set your password using the form below.
                                </Text>
                                <Text size="md">
                                    Your password must be at least 8 characters in length, including one lowercase letter, one uppercase letter, one digit and one special character.
                                </Text>
                                <PasswordInput
                                    {...getFieldProps('password')}
                                    label="Create a password for your account:"
                                    value={data.password}
                                    onChange={(event) => setData('password', event.currentTarget.value)}
                                />

                                <PasswordInput
                                    {...getFieldProps('password_confirmation')}
                                    label="Confirm your chosen password"
                                    value={data.password_confirmation}
                                    onChange={(event) => setData('password_confirmation', event.currentTarget.value)}
                                />
                                <Checkbox
                                    {...getFieldProps('confirm')}
                                    label="You confirm that you are the authorized representative to register in SafeVision Hub and authorized to act on behalf ot the above mentioned account to maintain record relating to order processing"
                                    checked={true == data.confirm}
                                    onChange={(event) => setData('confirm', event.currentTarget.checked)}
                                />

                                <Checkbox
                                    {...getFieldProps('terms')}
                                    label={
                                        <>
                                            I agree to the <a href='https://safevision.com/terms-of-use/' target="_blank">terms and conditions</a>, <a href='https://safevision.com/privacy-policy/' target="_blank">privacy policy</a> and the use of cookies for statistical purposes.
                                        </>
                                    }
                                    checked={true == data.terms}
                                    onChange={(event) => setData('terms', event.currentTarget.checked)}
                                />

                                <Button type="submit">Register</Button>


                            </Stack>
                        </Center>
                    </Flex>
                </Container>
            </Box>
        </Flex >
    );


}