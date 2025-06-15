import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@/api";
import { CartLayout } from "@/layouts";
import { useCart } from "@/hooks";

const productCtrl = new Product();

export default function CartPage() {
    const { query: { step = 1 } } = useRouter();
    const currentStep = Number(step);
    const [products, setProducts] = useState(null);
    const { cart } = useCart();

    useEffect(() => {
        if (!Array.isArray(cart)) return;

        (async () => {
            try {
                const data = [];
                console.log("cart", cart);

                for (const item of cart) {
                    const response = await productCtrl.getProductById(item.id);
                    data.push({ ...response.data, quantity: item.quantity });
                }

                console.log(data);
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [cart]);


    return (
        <>
            <CartLayout>
                {currentStep === 1 && <p>Step ONE</p>}
                {currentStep === 2 && <p>Step TWO</p>}
                {currentStep === 3 && <p>Step THREE</p>}
            </CartLayout>
        </>
    );
}
