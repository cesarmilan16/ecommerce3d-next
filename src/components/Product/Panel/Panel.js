import { useState } from "react";
import { Box, Container, Heading, Image, Flex, Button, Text } from "@chakra-ui/react";
import { fn } from "@/utils";

export function Panel(props) {
    const { productId, product } = props;
    const finalPrice = fn.calcDiscountedPrice(product.price, product.discount).toFixed(2);

    const [mainImage, setMainImage] = useState(product.cover.url);

    return (
        <Container maxW="6xl" py={10}>
            <Flex
                direction={{ base: "column", md: "row" }}
                bg="backgroundTertiary"
                borderRadius="md"
                overflow="hidden"
                boxShadow="lg"
            >
                {/* Imagen principal + galería */}
                <Box flex="1" p={4}>
                    <Image
                        src={mainImage}
                        alt={product.title}
                        objectFit="cover"
                        w="100%"
                        h="auto"
                        maxH="400px"
                        borderRadius="md"
                        mb={4}
                    />

                    <Flex gap={3} overflowX="auto">
                        {[product.cover, ...product.gallery].map((img) => (
                            <Image
                                key={img.id || img.url}
                                src={img.url}
                                alt={img.name}
                                boxSize="80px"
                                objectFit="cover"
                                borderRadius="md"
                                cursor="pointer"
                                border={mainImage === img.url ? "2px solid gold" : "2px solid transparent"}
                                onMouseEnter={() => setMainImage(img.url)}
                                onClick={() => setMainImage(img.url)}
                                transition="border 0.2s"
                            />
                        ))}
                    </Flex>
                </Box>

                {/* Info del producto */}
                <Box flex="1" p={6} bg="backgroundTertiary" color="textPrimary">
                    <Heading as="h2" size="lg" mb={2}>
                        {product.title}
                    </Heading>

                    <Text mb={1} fontSize="md" color="green.300">
                        En stock
                    </Text>

                    {product.discount > 0 && (
                        <Text fontSize="lg" color="textSecondary" textDecoration="line-through">
                            {product.price.toFixed(2)} €
                        </Text>
                    )}

                    <Text fontSize="3xl" fontWeight="bold" color="gold" mb={4}>
                        {finalPrice} €
                    </Text>

                    <Text fontSize="md" color="textPrimary" mb={6}>
                        {product.summary}
                    </Text>

                    <Button size="lg" w="100%">
                        Comprar ahora
                    </Button>
                </Box>
            </Flex>
        </Container>
    );
}
