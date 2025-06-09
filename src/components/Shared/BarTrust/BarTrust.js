import { Box, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { data } from "./BarTrust.data";

export function BarTrust() {
    return (
        <SimpleGrid columns={[1, 3]} spacing={8} bg="backgroundTertiary" py={6}>
            {data.map((item, i) => (
                <Box key={i} textAlign="center" borderRight={"1px"} borderColor={"borderPrimary"}>
                    <Icon as={item.icon} boxSize={10} color="primary" mb={2} />
                    <Text fontWeight="bold" color="textPrimary" textTransform="uppercase">{item.title}</Text>
                    <Text fontSize="sm" color="textSecondary">{item.description}</Text>
                </Box>
            ))}
        </SimpleGrid>
    );
};
