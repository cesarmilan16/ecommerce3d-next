import { HStack, Button, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router"

export function Pagination(props) {
    const { currentPage, totalPages } = props;
    const router = useRouter();

    const handlePageChange = (newPage) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: newPage,
            },
        });
    };
    
    return (
        <HStack spacing={2} justify="center" mt={6} mb={12}>
            <IconButton
                icon={<ChevronLeftIcon />}
                aria-label="Página anterior"
                isDisabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
                size="sm"
            />

            {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                return (
                    <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        bg={page === currentPage ? "primary" : "backgroundTertiary"}
                        size="sm"
                        borderWidth={page === currentPage ? "2px" : "1px"}
                        borderColor={page === currentPage ? "white" : "gray.400"}
                        color="textPrimary"
                    >
                        {page}
                    </Button>
                );
            })}

            <IconButton
                icon={<ChevronRightIcon />}
                aria-label="Página siguiente"
                isDisabled={currentPage >= totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                size="sm"
            />
        </HStack>
    );
}
