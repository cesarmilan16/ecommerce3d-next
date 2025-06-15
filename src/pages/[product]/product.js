import { BasicLayout } from "@/layouts";
import { Product } from "@/components/Product";
import { Box } from "@chakra-ui/react";

export default function ProductPage(props) {
    const { product } = props;
    const cover = product.cover;
    const documentId = product.documentId;
    console.log(documentId);



    return (
        <>
            <BasicLayout>
                <Product.HeaderCover image={cover.url} />
                <Product.Panel productId={product.id}
                    productDocumentId={documentId}
                    product={product}
                />

                <Box h={50} />
            </BasicLayout>
        </>
    )
}
