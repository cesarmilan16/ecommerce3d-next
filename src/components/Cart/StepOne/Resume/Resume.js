import { useState, useEffect } from "react";
import { Box, Heading, Text, Stack, Divider, Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { forEach } from "lodash";
import { fn } from "@/utils";

export function Resume({ products }) {
    const router = useRouter();
    const [totals, setTotals] = useState(null);

    useEffect(() => {
        let totals = {
            original: 0,
            discount: 0,
            price: 0,
        };

        forEach(products, (product) => {
            const price = fn.calcDiscountedPrice(
                product.price,
                product.discount
            );

            totals = {
                original: totals.original + product.price * product.quantity,
                discount:
                    totals.discount + (product.price - price) * product.quantity,
                price: totals.price + price * product.quantity,
            };
        });

        setTotals(totals);
    }, [products]);

    const goToStepTwo = () => {
        router.replace({ query: { ...router.query, step: 2 } });
    };

    if (!totals) return null;

    return (
        <Box
            bg="backgroundTertiary"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            w="100%"
            border="1px solid"
            borderColor="whiteAlpha.400"
        >
            <Heading as="h2" size="md" mb={4}>Resumen</Heading>

            <Stack spacing={3} mb={4}>
                <Box display="flex" justifyContent="space-between">
                    <Text color="textSecondary">Precio oficial</Text>
                    <Text>{totals.original.toFixed(2)}€</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Text color="textSecondary">Descuento</Text>
                    <Text>{totals.discount.toFixed(2)}€</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Text fontWeight="bold">Subtotal</Text>
                    <Text fontWeight="bold">{totals.price.toFixed(2)}€</Text>
                </Box>
            </Stack>

            <Button
                width="100%"
                onClick={goToStepTwo}
                isDisabled={totals.price === 0}
            >
                Proceder con el pago
            </Button>

            <Link href="/" passHref>
                <ChakraLink mt={4} display="block" textAlign="center" color="teal.500">
                    Continuar comprando
                </ChakraLink>
            </Link>
        </Box>
    );
}
