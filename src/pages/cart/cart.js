import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@/api";
import { CartLayout } from "@/layouts";
import { useCart } from "@/hooks";
import { Cart } from "@/components/Cart";
import { Seo } from "@/components/Shared";

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

                for (const item of cart) {
                    const response = await productCtrl.getProductById(item.id);
                    data.push({ ...response.data, quantity: item.quantity });
                }

                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [cart]);


    return (
        <>
            <Seo title={"Carrito"}/>
            <CartLayout>
                {currentStep === 1 && <Cart.StepOne products={products}/>}
                {currentStep === 2 && <Cart.StepTwo products={products}/>}
                {currentStep === 3 && <Cart.StepThree />}
            </CartLayout>
        </>
    );
}
