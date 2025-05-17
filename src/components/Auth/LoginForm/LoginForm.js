import { Box, Stack, FormControl, FormErrorMessage, Input, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form"

export function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log("OK INICIO DE SESIÓN")
                console.log(formValue);
                
            } catch (error) {
                console.error(error);
                
            }
        }
    })

    return (
        <Box as="form" onSubmit={formik.handleSubmit} w="100%">
            <Stack spacing={2}>
                <FormControl>
                    <Input
                        name="identifier"
                        type="text"
                        placeholder="Correo electrónico o usuario" _placeholder={{ fontSize: { base: "sm", md: "md" } }}
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.identifier}</FormErrorMessage>
                </FormControl>
                <FormControl >
                    <Input
                        name="password"
                        type="password"
                        placeholder="Contraseña" _placeholder={{ fontSize: { base: "sm", md: "md" } }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <FormErrorMessage>{formik.errors.identifier}</FormErrorMessage>
                </FormControl>
                <Button type="submit" isLoading={formik.isSubmitting}  w="100%" h="38px">
                    Entrar
                </Button>
            </Stack>
        </Box>
    )
}
