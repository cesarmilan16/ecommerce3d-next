import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { User } from '@/api';
import { useAuth } from '@/hooks';
import { initialValues, validationSchema } from './ChangePasswordForm.form';

const useCtrl = new User();

export function ChangePasswordForm() {
    const { user, logout } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await useCtrl.updateMe(user.id, { password: formValue.password })
                logout()
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <Box as="form" onSubmit={formik.handleSubmit} width={"50%"} p={"0 10px"}>
            <FormLabel>Cambiar contraseña</FormLabel>

            <FormControl isInvalid={!!formik.errors.password} mb={4}>
                <Input
                    type="password"
                    name="password"
                    placeholder="Nuevo correo electrónico"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!formik.errors.repeatPassword} mb={4}>
                <Input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.repeatPassword}</FormErrorMessage>
            </FormControl>
            <Button type="submit" isLoading={formik.isLoading} >
                Enviar
            </Button>
        </Box>
    )
}
