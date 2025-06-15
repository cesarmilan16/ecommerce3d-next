import { Box, Heading, Text, Button, Icon, color } from "@chakra-ui/react";
import Link from "next/link";
import { CheckCircleIcon } from "@chakra-ui/icons";

export function StepThree() {
    return (
        <Box
            textAlign="center"
            py={10}
            px={6}
            bg="backgroundTertiary"
            borderRadius="lg"
            boxShadow="md"
            border="1px solid"
            borderColor="whiteAlpha.400"
        >
            <CheckCircleIcon boxSize={14} color="green.400" mb={4} />
            <Heading as="h2" size="lg" mb={4}>
                ¡Compra exitosa!
            </Heading>
            <Text mb={6} color="gray.300">
                Gracias por tu pedido. Puedes ver los detalles en tu cuenta.
            </Text>
            <Link href="/account" passHref>
                <Button as="a" _hover={{ color: "white", bg: "primaryHover" }}>
                    Ver pedido
                </Button>
            </Link>
        </Box>
    );
}
