import { Container, Box, Heading } from "@chakra-ui/react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridProducts, NoResult, Pagination, Seo } from "@/components/Shared";

export default function CategoryPage(props) {
    const { products, category, pagination } = props;
    const hasProducts = size(products) > 0;
    
    return (
        <>
            <Seo title={category.title}/>
            <BasicLayout relative>
                <Container maxW="container.lg" textAlign={"center"}>
                    <Box h={50} />

                    <Heading
                        as="h2"
                        size="lg"
                        px={4}
                        color="textPrimary"
                        borderBottom="2px solid"
                        borderColor="primary"
                        display="inline-block"
                    >
                        {category.title}
                    </Heading>

                    {hasProducts ? (
                        <>
                            <GridProducts products={products} />
                            <Box h={30} />
                            <Pagination 
                            currentPage={pagination.page} 
                            totalPages={pagination.pageCount} 
                            />
                        </>
                    ) : (
                        <NoResult text={`La categoria ${category.title} aún no tiene productos`} />
                    )}

                </Container>
            </BasicLayout>
        </>
    )
}
