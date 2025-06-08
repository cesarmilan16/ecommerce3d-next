import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

export function GridProducts(props) {
    const { products } = props;
    console.log(products);


    return (
        <Box py={10}> {/* Separación vertical */}
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {map(products, (product) => (
                    <Link key={product.id} href={`/${product.slug}`}>
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            _hover={{
                                boxShadow: "xl",
                                transform: "scale(1.03)",
                                opacity: 0.7,
                            }}
                            cursor="pointer"
                        >
                            <Image
                                src={product.cover.url}
                                alt={product.title}
                                objectFit="cover"
                                w="100%"
                                h="200px"
                            />
                            <Box p="4">
                                <Text fontWeight="bold">{product.title}</Text>
                                <Text color="gray.500">{fn.calcDiscountedPrice(product.price, product.discount)}</Text>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    )
}
