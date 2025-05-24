import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './ChangeEmailForm.form';

export function ChangeEmailForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log("SEND FORM");
                console.log(formValue);
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <Box as="form" onSubmit={formik.handleSubmit} width={"50%"} p={"0 10px"}>
            <FormLabel>Cambiar correo</FormLabel>

            <FormControl isInvalid={!!formik.errors.email} mb={4}>
                <Input
                    placeholder="Nuevo correo electrónico"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formik.errors.repeatEmail} mb={4}>
                <Input
                    placeholder="Repetir correo electrónico"
                    name="repeatEmail"
                    value={formik.values.repeatEmail}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.repeatEmail}</FormErrorMessage>
            </FormControl>
            <Button type="submit" isLoading={formik.isSubmitting}>
                Enviar
            </Button>
        </Box>
    )
}
