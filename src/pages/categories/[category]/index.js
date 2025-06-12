import { Category, Product } from "@/api";

export { default } from "./category";

export async function getServerSideProps(context) {
    const { query, params } = context;
    const { page = 1 } = query;
    const { category } = params;

    const categoryCtrl = new Category();
    const responseCategory = await categoryCtrl.getBySlug(category);

    const productCtrl = new Product();
    const responseProduct = await productCtrl.getProductsByCategorySlug(category, page);
    
    return {
        props: {
            category: responseCategory,
            products: responseProduct.data,
            pagination: responseProduct.meta.pagination,
        }
    }
}