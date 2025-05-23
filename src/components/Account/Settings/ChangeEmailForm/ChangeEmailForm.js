import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

export function ChangeEmailForm() {
  return (
    <Box as="form" width={"50%"} p={"0 10px"}>
          <FormLabel>Cambiar correo</FormLabel>
    
            <FormControl>
              <Input
                placeholder="email"
                name="Nuevo correo electrónico"
                mb={4}
              />
              <Input
                placeholder="repeatEmail"
                name="Repetir correo electrónico"
                mb={4}
              />
              <FormErrorMessage></FormErrorMessage>

              <Button type="submit">
                Enviar
              </Button>
            </FormControl>
        </Box>
  )
}
