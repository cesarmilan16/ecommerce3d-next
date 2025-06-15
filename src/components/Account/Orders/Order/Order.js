import { useState } from "react";
import {
    Box,
    Flex,
    Text,
    Image,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { forEach, map } from "lodash";
import { fn } from "@/utils";

export function Order(props) {
    const { order } = props;
    const [showModal, setShowModal] = useState(false);
    const createdAt = new Date(order.createdAt).toISOString();
    const products = order.products;
    const address = order.addressShipping;

    const openCloseModal = () => setShowModal((prev) => !prev);

    const getTotalProducts = () => {
        let total = 0;
        forEach(products, (product) => {
            total += product.quantity;
        });
        return total;
    };

    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                bg="backgroundQuaternary"
                p={4}
                borderRadius="lg"
                border="1px solid"
                borderColor="borderPrimary"
                cursor="pointer"
                onClick={openCloseModal}
                _hover={{ bg: "borderSecondary" }}
            >
                <Box>
                    <Text fontSize="sm" color="textSecondary">
                        {DateTime.fromISO(createdAt, { locale: "es" }).toFormat("dd/MM/yyyy")}
                    </Text>
                    <Text fontSize="md" color="textPrimary">
                        {getTotalProducts()} productos
                    </Text>
                </Box>
                <Text fontWeight="bold" color="textPrimary">
                    {order.totalPayment.toFixed(2)}€
                </Text>
            </Flex>

            <Modal isOpen={showModal} onClose={openCloseModal} size="lg" isCentered>
                <ModalOverlay />
                <ModalContent bg="backgroundTertiary" color="textPrimary" border="1px solid" borderColor="borderPrimary">
                    <ModalHeader>Información del pedido</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Box>
                            {map(products, (item, index) => {
                                const product = item;

                                return (
                                    <Flex key={index} mb={4} gap={4} align="flex-start">
                                        <Image
                                            src={product?.cover?.url || "/no-image.png"}
                                            alt={product?.title || "Sin título"}
                                            boxSize="80px"
                                            objectFit="cover"
                                            borderRadius="md"
                                            border="1px solid"
                                            borderColor="borderSecondary"
                                        />
                                        <Flex direction="column" flex="1" justify="space-between">
                                            <Box>
                                                <Text fontWeight="bold">{product?.title || "Producto sin título"}</Text>
                                                <Text fontSize="sm" color="textSecondary">
                                                    {product?.category?.title || "Sin categoría"}
                                                </Text>
                                            </Box>
                                            <Flex justify="space-between" mt={2}>
                                                <Text>x{item.quantity}</Text>
                                                <Text>
                                                    {fn.calcDiscountedPrice(item.price, item.discount)}€
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                );
                            })}

                            <Divider my={4} borderColor="borderSecondary" />

                            <Box mb={4}>
                                <Text fontWeight="bold" mb={1}>
                                    Dirección de envío:
                                </Text>
                                <Text color="textSecondary">
                                    {address.title} - {address.name},{" "}
                                    {address.address}, {address.state},{" "}
                                    {address.city}, {address.postal_code}
                                </Text>
                            </Box>

                            <Text fontWeight="bold" fontSize="lg">
                                TOTAL: {order.totalPayment.toFixed(2)}€
                            </Text>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
