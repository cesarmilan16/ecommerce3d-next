import { map } from "lodash";
import { fn } from "@/utils";
import { Box, Image, Text, SimpleGrid, Badge, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Wishlist } from "@/api";
import Link from "next/link";

const wishlistCtrl = new Wishlist();

export function GridProducts(props) {
    const { products: initialItems } = props; // <-- Ahora recibes los items de wishlist
    const [items, setItems] = useState(initialItems);
    console.log(items);

    const handleRemove = async (documentId) => {
        try {
            await wishlistCtrl.delete(documentId);
            console.log("Eliminado:", documentId);
            setItems((prev) => prev.filter((item) => item.documentId !== documentId));
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    if (!items || items.length === 0) {
        return <Text textAlign="center" mt={10}>Tu lista de deseos está vacía.</Text>;
    }

    return (
        <Box py={10}>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {map(items, (item) => {
                    const product = item.product;

                    return (
                        <Box key={item.documentId} position="relative">
                            <Link href={`/${product.slug}`}>
                                <Box
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

                            {/* Botón para eliminar de la wishlist */}
                            <IconButton
                                icon={<FaHeart />}
                                position="absolute"
                                top="2"
                                right="2"
                                bg="gray.700"
                                color={"#e74c3c"}
                                _hover={{ bg: "gray.600"}}
                                _focus={{ boxShadow: "none" }}
                                size="sm"
                                zIndex={2}
                                aria-label="Eliminar de favoritos"
                                onClick={() => handleRemove(item.documentId)}
                            />
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}
