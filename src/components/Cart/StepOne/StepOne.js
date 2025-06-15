import { Flex, Box } from "@chakra-ui/react";
import { Basket } from "./Basket";
import { Resume } from "./Resume";

export function StepOne({ products }) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="flex-start"
      gap={6}
      w="100%"
    >
      {/* Cesta */}
      <Box flex="1">
        <Basket products={products} />
      </Box>

      {/* Resumen */}
      <Box w={{ base: "100%", md: "300px" }} mt={46}>
        <Resume products={products} />
      </Box>
    </Flex>
  );
}
