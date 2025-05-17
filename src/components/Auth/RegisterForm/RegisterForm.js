import {
    Box,
    Stack,
    FormControl,
    Input,
    FormErrorMessage,
    Button
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router"
import { Auth } from "@/api"
import { initialValues, validationSchema } from "./RegisterForm.form";

const authCtrl = new Auth();

export function RegisterForm() {

    const router = useRouter();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.register(formValue);
                router.push("/join/sign-in")
            } catch (error) {
                console.error(error);
            }
        }
    })

    return (
        <Box as="form" onSubmit={formik.handleSubmit} w="100%">
            <Stack spacing={4}>
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                    <FormControl isInvalid={formik.errors.email}>
                        <Input
                            name="email"
                            type="text"
                            placeholder="Correo electrónico" _placeholder={{fontSize: { base: "sm", md: "md" }}}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={formik.errors.username}>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Nombre de usuario" _placeholder={{fontSize: { base: "sm", md: "md" }}}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                    </FormControl>
                </Stack>

                <FormControl isInvalid={formik.errors.password}>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Contraseña" _placeholder={{fontSize: { base: "sm", md: "md" }}}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" isLoading={formik.isSubmitting} w="100%" h="38px">
                    Registrarse
                </Button>
            </Stack>
        </Box>
    );
};
