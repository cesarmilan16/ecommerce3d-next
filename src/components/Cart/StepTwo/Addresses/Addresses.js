import { useState, useEffect } from "react";
import { map } from "lodash";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";

const addressCtrl = new Address();

export function Addresses({ addressSelected, setAddressSelected }) {
    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                const response = await addressCtrl.getAll(user.id);
                setAddresses(response.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <Box>
            <Heading as="h2" size="md" mb={4} color="white">
                Dirección
            </Heading>

            <Stack spacing={4}>
                {map(addresses, (address) => {
                    const isActive = address.id === addressSelected?.id;

                    return (
                        <Box
                            key={address.id}
                            p={4}
                            borderWidth="1px"
                            borderRadius="lg"
                            cursor="pointer"
                            bg={isActive ? "blue.700" : "gray.800"}
                            borderColor={isActive ? "blue.400" : "gray.600"}
                            onClick={() => setAddressSelected(address)}
                            _hover={{ bg: isActive ? "blue.600" : "gray.700" }}
                            transition="background 0.2s"
                        >
                            <Text fontWeight="bold" color="white">
                                {address.name} ({address.title})
                            </Text>
                            <Text fontSize="sm" color="gray.300">
                                {address.address}, {address.postal_code}, {address.state}, {address.city}
                            </Text>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}
