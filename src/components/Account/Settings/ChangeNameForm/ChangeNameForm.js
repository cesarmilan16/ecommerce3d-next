import { Box, Flex, FormLabel, Input, Button } from '@chakra-ui/react';

export function ChangeNameForm() {
  return (
    <Box as="form">
      <FormLabel>Nombre y apellidos</FormLabel>

      <Flex align="center">
        <Box flex="1">
          <Input placeholder="Nombre" name="firstname" />
        </Box>
        <Box flex="1" ml="4">
          <Input placeholder="Apellidos" name="lastname" />
        </Box>
        <Box ml="4">
          <Button type="submit" colorScheme="orange">
            Enviar
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
