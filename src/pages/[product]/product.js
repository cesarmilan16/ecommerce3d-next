import { BasicLayout } from "@/layouts";
import { Product } from "@/components/Product";
import { Box } from "@chakra-ui/react";

export default function ProductPage(props) {
    const { product } = props;
    const cover = product.cover;
    console.log(props);
    
    return (
        <>
            <BasicLayout>
                <Product.HeaderCover image={cover.url} />
                <Product.Panel productId={product.id} product={product} />

                <Box h={50} />
            </BasicLayout>
        </>
    )
}
