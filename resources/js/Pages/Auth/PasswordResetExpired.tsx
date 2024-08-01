
import { Box, Container, Flex, Group, Center, Text, Stack, TextInput, Button } from '@mantine/core';
import safeVisionImage from '../../../images/safe-vision.png';
import useBaseForm from '@/Hooks/useBaseForm';

import { Link } from '@inertiajs/react';
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

                            <Stack>
                                <Text size="md">
                                    The Password Reset Link has expired.  Please go to <Link href={route('password.request')}>Reset Password </Link>
                                </Text>
                            </Stack>
                        </Center>
                    </Flex>
                </Container>
            </Box>
        </Flex >
    );


}