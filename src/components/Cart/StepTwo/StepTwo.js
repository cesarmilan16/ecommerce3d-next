import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Flex } from "@chakra-ui/react";
import { ENV } from "@/utils";
import { Addresses } from "./Addresses";
import { Payment } from "./Payment";
import { Resume } from "./Resume";

const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

export function StepTwo({ products }) {
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeInit}>
      <Flex direction={{ base: "column", md: "row" }} gap={10} mt={10}>
        {/* Parte izquierda */}
        <Box flex="1">
          <Addresses
            addressSelected={addressSelected}
            setAddressSelected={setAddressSelected}
          />
          {addressSelected && (
            <Box mt={8}>
              <Payment />
            </Box>
          )}
        </Box>

        {/* Parte derecha */}
        <Box w={{ base: "100%", md: "400px" }}>
          <Resume products={products} addressSelected={addressSelected} />
        </Box>
      </Flex>
    </Elements>
  );
}
