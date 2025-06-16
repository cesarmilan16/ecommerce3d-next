import { IconButton, useToast } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Wishlist } from "@/api";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks";

const wishlistCtrl = new Wishlist();

export function WishlistIcon(props) {
    const { productId } = props;
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [wishlistId, setWishlistId] = useState(null); // <-- Guarda el ID
    const toast = useToast();
    const { user } = useAuth();

    useEffect(() => {
        if (!user || !productId) return;

        (async () => {
            try {
                const response = await wishlistCtrl.check(user.id, productId);
                
                if (response) {
                    setIsInWishlist(true);
                    setWishlistId(response.id); // Guarda el ID para poder eliminar
                } else {
                    setIsInWishlist(false);
                    setWishlistId(null);
                }
            } catch (error) {
                console.error("Error al consultar wishlist:", error);
                setIsInWishlist(false);
            }
        })();
    }, [user, productId]);

    const handleToggle = async () => {
        if (!user) {
            toast({
                title: "Debes iniciar sesión para usar la lista de deseos.",
                status: "info",
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        try {
            if (isInWishlist) {
                await wishlistCtrl.delete(wishlistId);
                setIsInWishlist(false);
                toast({
                    title: "Eliminado de la lista de deseos",
                    status: "warning",
                    duration: 1500,
                    isClosable: true,
                });
            } else {
                const response = await wishlistCtrl.add(user.id, productId);
                setIsInWishlist(true);
                setWishlistId(response.data.id);
                toast({
                    title: "Añadido a la lista de deseos",
                    status: "success",
                    duration: 1500,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Error al modificar la wishlist:", error);
        }
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
