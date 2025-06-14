import { IconButton, useToast } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

export function WishlistIcon({ productId }) {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const toast = useToast();

    const handleToggle = () => {
        setIsInWishlist(!isInWishlist);
        toast({
            title: isInWishlist
                ? "Eliminado de la lista de deseos"
                : "Añadido a la lista de deseos",
            status: isInWishlist ? "warning" : "success",
            duration: 1500,
            isClosable: true,
        });
    };

    return (
        <IconButton
            icon={isInWishlist ? <FaHeart /> : <FaRegHeart />}
            aria-label="Añadir a la lista de deseos"
            variant="solid"
            bg="gray.700"
            color={isInWishlist ? "#e74c3c" : "gray.300"}
            _hover={{ bg: "gray.600", color: "#e74c3c" }}
            _focus={{ boxShadow: "none" }}
            size="md"
            onClick={handleToggle}
            borderRadius="md"
            mt={2}
        />

    );
}
