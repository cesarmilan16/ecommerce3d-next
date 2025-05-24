import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

export function ChangePasswordForm() {
    return (
        <Box as="form" width={"50%"} p={"0 10px"}>
            <FormLabel>Cambiar contraseña</FormLabel>

            <FormControl mb={4}>
                <Input
                    type="password"
                    name="password"
                    placeholder="Nuevo correo electrónico"
                />
                <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl mb={4}>
                <Input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                />
                <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <Button type="submit">
                Enviar
            </Button>
        </Box>
    )
}
