import { IconButton, useToast } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Wishlist } from "@/api";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks";

const wishlistCtrl = new Wishlist();

export function WishlistIcon(props) {
    const { productId } = props;

    // Estado que controla si el producto está en la wishlist (true = corazón rojo)
    const [isInWishlist, setIsInWishlist] = useState(false);

    // Guarda el documentId del ítem en la wishlist → necesario para borrarlo
    const [wishlistId, setWishlistId] = useState(null);

    // Controla si hay una petición en curso para evitar clics dobles
    const [loading, setLoading] = useState(false);

    const toast = useToast(); // Para mostrar notificaciones visuales
    const { user } = useAuth(); // Usuario autenticado

    // Cuando cambie el usuario o el producto, comprobar si ya está en wishlist
    useEffect(() => {
        if (!user || !productId) {
            setIsInWishlist(false);
            setWishlistId(null);
            return;
        }
        (async () => {
            try {
                const response = await wishlistCtrl.check(user.id, productId);

                // Si la API devuelve un array con al menos un item → ya está en wishlist
                if (Array.isArray(response) && response.length > 0) {
                    const item = response[0];
                    setIsInWishlist(true);
                    setWishlistId(item.documentId); // Guardamos el documentId del registro
                } else {
                    // Si no está en wishlist, limpiamos el estado
                    setIsInWishlist(false);
                    setWishlistId(null);
                }
            } catch (error) {
                // Si hay error en la API → lo tratamos como si no estuviera en wishlist
                setIsInWishlist(false);
                setWishlistId(null);
            }
        })();
    }, [user, productId]);

    // Maneja el clic en el icono → añade o elimina el producto de la wishlist
    const handleToggle = async () => {
        if (!user || loading) {
            // Si no hay usuario → aviso con toast
            if (!user) {
                toast({
                    title: "Debes iniciar sesión para usar la lista de deseos.",
                    status: "info",
                    duration: 2000,
                    isClosable: true,
                });
            }
            return;
        }
        setLoading(true); // Bloquea botón mientras se hace la petición
        try {
            if (isInWishlist && wishlistId) {
                // Si ya estaba en wishlist → borrar de la API
                await wishlistCtrl.delete(wishlistId);
                setIsInWishlist(false);
                setWishlistId(null);
                toast({
                    title: "Eliminado de la lista de deseos",
                    status: "warning",
                    duration: 1500,
                    isClosable: true,
                });
            } else if (!isInWishlist) {
                // Si no estaba → añadir a la API
                const response = await wishlistCtrl.add(user.id, productId);
                setIsInWishlist(true);
                setWishlistId(response.data.documentId); // Guardamos el nuevo documentId
                toast({
                    title: "Añadido a la lista de deseos",
                    status: "success",
                    duration: 1500,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Error al modificar la wishlist:", error);
        } finally {
            setLoading(false); // Reactiva el botón
        }
    };

    return (
        <IconButton
            // Cambia el icono según el estado
            icon={isInWishlist ? <FaHeart /> : <FaRegHeart />}
            aria-label={isInWishlist ? "Quitar de la lista de deseos" : "Añadir a la lista de deseos"}
            variant="solid"
            bg="gray.700"
            color={isInWishlist ? "#e74c3c" : "gray.300"}
            _hover={{ bg: "gray.600", color: "#e74c3c" }}
            _focus={{ boxShadow: "none" }}
            size="md"
            onClick={handleToggle} // Acción al hacer clic en el corazón
            borderRadius="md"
            mt={2}
            isDisabled={loading} // Deshabilitado si está cargando
        />
    );
}
