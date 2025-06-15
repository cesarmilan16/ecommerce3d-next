import { useState, useEffect } from "react";
import { size } from "lodash";
import { Wishlist as WishlistCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { GridProducts } from "./GridProducts";

const wishlistCtrl = new WishlistCtrl();

export function Wishlist() {
    const [wishlist, setWishlist] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await wishlistCtrl.getAll(user.id);
                setWishlist(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return size(wishlist) === 0 ? (
        <NoResult text="No tienes ningún juego en la lista de deseos" />
    ) : (
        <GridProducts products={wishlist} />
    );
}
