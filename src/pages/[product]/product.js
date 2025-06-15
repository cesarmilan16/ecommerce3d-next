import { BasicLayout } from "@/layouts";
import { Product } from "@/components/Product";
import { Box } from "@chakra-ui/react";
import { Seo } from "@/components/Shared";

export default function ProductPage(props) {
    const { product } = props;
    const cover = product.cover;
    const documentId = product.documentId;
    console.log(documentId);



    return (
        <>
            <Seo title={product.title}/>
            <BasicLayout>
                <Product.HeaderCover image={cover.url} />
                <Product.Panel productId={product.documentId}
                    productDocumentId={documentId}
                    product={product}
                />

                <Box h={50} />
            </BasicLayout>
        </>
    )
}
