import { useState } from "react";
import {
  Box, Container, Heading, Image, Flex, Button, Text,
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody,
  ModalCloseButton, IconButton, useToast
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCart, useAuth } from "@/hooks";
import { fn } from "@/utils";
import { WishlistIcon } from "@/components/Shared";

export function Panel(props) {
  const { productId, product, productDocumentId } = props;
  const [loading, setLoading] = useState(false);
  const { addCart } = useCart();
  const { user } = useAuth();
  const toast = useToast();

  const finalPrice = fn.calcDiscountedPrice(product.price, product.discount).toFixed(2);
  const images = [product.cover, ...product.gallery];
  const [imageIndex, setImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addCartWrapper = () => {
    if (!user) {
      toast({
        title: "Debes iniciar sesión para añadir productos al carrito.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    addCart(productId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const openModal = (index) => {
    setImageIndex(index);
    onOpen();
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
        <Box flex="1" p={4} position="relative">
          {/* Imagen clicable */}
          <Image
            src={images[imageIndex].url}
            alt={product.title}
            objectFit="cover"
            w="100%"
            h="auto"
            maxH="400px"
            borderRadius="md"
            mb={4}
            cursor="pointer"
            onClick={() => openModal(imageIndex)}
          />

          {/* Icono wishlist */}
          <Box position="absolute" top="6" left="6">
            <WishlistIcon productId={productId} productDocumentId={productDocumentId} />
          </Box>

          {/* Miniaturas */}
          <Flex gap={3} overflowX="auto">
            {images.map((img, i) => (
              <Image
                key={img.id || img.url}
                src={img.url}
                alt={img.name}
                boxSize="80px"
                objectFit="cover"
                borderRadius="md"
                cursor="pointer"
                border={imageIndex === i ? "2px solid gold" : "2px solid transparent"}
                onMouseEnter={() => setImageIndex(i)}
                onClick={() => setImageIndex(i)}
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

          <Button
            size="lg"
            w="100%"
            onClick={addCartWrapper}
            isLoading={loading}
          >
            Comprar ahora
          </Button>
        </Box>
      </Flex>

      {/* Modal con imagen ampliada y navegación */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none" position="relative">
          <ModalCloseButton color="white" />

          {/* Flechas */}
          <IconButton
            icon={<FaArrowLeft />}
            aria-label="Anterior"
            onClick={prevImage}
            position="absolute"
            top="50%"
            left="4"
            transform="translateY(-50%)"
            zIndex="2"
            bg="#transparent"
            color="#ffffff"
            transition={"all 0.2s ease-in-out"}
            _hover={{
              bg: "#a73740",
              borderColor: "#a73740",
              transform: "translateY(-50%) scale(1.1)",
            }}
            _active={{
              transform: "translateY(-50%) scale(0.95)",
              bg: "none",
              borderColor: "none",
            }}
            size="md"
            rounded="full"
          />
          <IconButton
            icon={<FaArrowRight />}
            aria-label="Siguiente"
            onClick={nextImage}
            position="absolute"
            top="50%"
            right="4"
            transform="translateY(-50%)"
            zIndex="2"
            bg="#transparent"
            color="#ffffff"
            transition={"all 0.2s ease-in-out"}
            _hover={{
              bg: "#a73740",
              borderColor: "#a73740",
              transform: "translateY(-50%) scale(1.1)",
            }}
            _active={{
              transform: "translateY(-50%) scale(0.95)",
              bg: "none",
              borderColor: "none",
            }}
            size="md"
            rounded="full"
          />

          <ModalBody p={0}>
            <Image
              src={images[imageIndex].url}
              alt={`Imagen ampliada ${imageIndex}`}
              objectFit="contain"
              w="100%"
              maxH="90vh"
              borderRadius="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}
