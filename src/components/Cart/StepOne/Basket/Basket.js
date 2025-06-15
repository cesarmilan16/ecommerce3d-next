import { Box, Flex, Heading, Image, IconButton, Select, Text } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";

export function Basket(props) {
    const { products } = props;
    const { changeQuantityItem, deleteItem } = useCart();

    return (
        <Box>
            <Heading as="h2" size="md" mb={5}>
                Tu cesta
            </Heading>

            <Flex direction="column" gap={4}>
                {map(products, (product) => (
                    <Flex
                        key={product.documentId}
                        border="1px solid"
                        borderColor="whiteAlpha.400"
                        borderRadius="md"
                        overflow="hidden"
                        p={3}
                        align="center"
                        gap={4}
                        bg="backgroundTertiary"
                    >
                        <Image
                            src={product.cover.url}
                            alt={product.title}
                            boxSize="80px"
                            objectFit="cover"
                            borderRadius="md"
                            flexShrink={0}
                        />

                        <Flex direction="column" flex="1">
                            <Text fontWeight="bold">{product.title}</Text>
                            <Text fontSize="sm" color="gray.400">
                                {fn.calcDiscountedPrice(product.price, product.discount)} € x {product.quantity}
                            </Text>
                        </Flex>

                        <Flex align="center" gap={3}>
                            <Select
                                size="sm"
                                w="70px"
                                value={product.quantity}
                                onChange={(e) => changeQuantityItem(product.documentId, Number(e.target.value))}
                                color="black"
                                bg="gray.300"
                                borderColor="gray.600"
                            >
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </Select>

                            <IconButton
                                icon={<FaTrashAlt />}
                                size="sm"
                                onClick={() => deleteItem(product.documentId)}
                                aria-label="Eliminar producto"
                                colorScheme="red"
                                variant="ghost"
                            />
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
}
