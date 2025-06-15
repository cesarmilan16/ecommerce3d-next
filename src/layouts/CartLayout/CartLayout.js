import { Container, Box } from "@chakra-ui/react";
import { Footer, HeaderCart } from "@/components/Layout";

export function CartLayout(props) {
    const { children } = props;

    return (
        <>
            <Box display="flex" flexDirection="column" minH="100vh">
                <HeaderCart />
                <Box h={{ base: 200, md: 150 }} />
                <Container maxW="container.xl" flex={1}>{children}</Container>
                <Box h={70} />
                <Footer />
            </Box>
        </>
    );
}
