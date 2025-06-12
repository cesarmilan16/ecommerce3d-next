import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Box, Image, Text, SimpleGrid, Badge } from "@chakra-ui/react";

export function GridProducts(props) {
    const { products } = props;

    return (
        <Box py={10}> {/* Separación vertical */}
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {map(products, (product) => (
                    <Link key={product.id} href={`/${product.slug}`}>
                        <Box
                            position={"relative"}
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow={"dark-lg"}
                            background={"backgroundTertiary"}
                            _hover={{
                                boxShadow: "xl",
                                transform: "scale(1.03)",
                            }}
                            cursor="pointer"
                            transition="all 0.3s"
                        >
                            <Image
                                src={product.cover.url}
                                alt={product.title}
                                objectFit="cover"
                                w="100%"
                                h="200px"
                            />

                            {product.discount > 0 && (
                                <Badge
                                    colorScheme="red"
                                    position="absolute"
                                    top="2"
                                    left="2"
                                    fontSize="0.8em"
                                    borderRadius="md"
                                >
                                    -{product.discount}%
                                </Badge>
                            )}

                            <Box
                                position="absolute"
                                bottom="0"
                                w="100%"
                                p="2"
                                bg="rgba(0,0,0,0.6)"
                                color="textPrimary"
                                textAlign="center"
                            >
                                <Text fontWeight="bold" fontSize="md">
                                    {product.title}
                                </Text>
                                <Text fontSize="sm">
                                    {fn.calcDiscountedPrice(product.price, product.discount)}€
                                </Text>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    )
}
