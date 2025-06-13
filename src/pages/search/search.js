import { useEffect } from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridProducts, NoResult, Pagination } from "@/components/Shared";

export default function SearchPage(props) {
    const { products, pagination, searchText } = props;
    const hasResult = size(products) > 0 

    useEffect(() => {
      document.getElementById("search-products").focus();
    }, [])
    
    
    return (
        <>
            <BasicLayout relative isOpenSearch>
                <Container maxW="container.xl">
                    <Box h={50} />
                    <Heading as={"h2"} size={"md"}>Buscando: {searchText}</Heading>
                    {hasResult ? (
                        <>
                            <GridProducts products={products}/>
                            <Box h={30} />
                            <Pagination 
                            currentPage={pagination.page} 
                            totalPages={pagination.pageCount}
                            />
                        </>
                    ): (
                        <NoResult text="No se han encontrado resultados" />
                    )}
                </Container>
            </BasicLayout>
        </>
    )
}
