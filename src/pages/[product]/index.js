import { Product } from "@/api";

export { default } from "./product";

export async function getServerSideProps(context) {
    const { params: { product },
    } = context;

    const productCtrl = new Product()
    const response = await productCtrl.getBySlug(product);

    return {
        props: {
            product: response,
        },
    }
}