import { CardElement } from "@stripe/react-stripe-js";
import { Box, Heading } from "@chakra-ui/react";

export function Payment() {
  const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontSize: "16px",
        "::placeholder": {
          color: "#909090",
        },
      },
    },
  };

  return (
    <Box mt={8}>
      <Heading as="h2" size="md" mb={4} color="white">
        Métodos de pago
      </Heading>

      <Box
        p={4}
        bg="gray.800"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="gray.600"
      >
        <CardElement options={cardStyle} />
      </Box>
    </Box>
  );
}
