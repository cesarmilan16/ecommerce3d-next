import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { forEach, map } from "lodash";
import { Cart } from "@/api";
import { useAuth, useCart } from "@/hooks";
import { fn } from "@/utils";

const cartCtrl = new Cart();

export function Resume({ products, addressSelected }) {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { deleteAllItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    let totalTemp = 0;

    forEach(products, (product) => {
      const price = fn.calcDiscountedPrice(product.price, product.discount);
      totalTemp += price * product.quantity;
    });

    setTotal(totalTemp.toFixed(2));
  }, [products]);

  const onPay = async () => {
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      console.error(result.error.message);
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        products,
        user.id,
        addressSelected
      );

      if (response.status === 200) {
        deleteAllItems();
        goToStepEnd();
      } else {
        console.error("Error al realizar el pedido");
      }
    }

    setTimeout(() => setLoading(false), 1000);
  };

  const goToStepEnd = () => {
    router.replace({ query: { ...router.query, step: 3 } });
  };

  if (!total) return null;

  return (
    <Box bg="gray.800" p={6} borderRadius="lg" color="white">
      <Heading as="h2" size="md" mb={4}>
        Resumen
      </Heading>

      <Stack spacing={4} mb={4}>
        {map(products, (product) => (
          <Flex key={product.id} justify="space-between">
            <Box>
              <Text fontWeight="bold">{product.title}</Text>
              {product.platform && (
                <Text fontSize="sm" color="gray.400">
                  {product.platform}
                </Text>
              )}
            </Box>
            <Text>
              {product.quantity}x{" "}
              {fn.calcDiscountedPrice(product.price, product.discount)}€
            </Text>
          </Flex>
        ))}
      </Stack>

      <Divider borderColor="gray.600" mb={4} />

      <Flex justify="space-between" mb={4}>
        <Text fontWeight="bold">Total</Text>
        <Text fontWeight="bold">{total}€</Text>
      </Flex>

      <Button
        colorScheme="blue"
        w="100%"
        onClick={onPay}
        isDisabled={!addressSelected}
        isLoading={loading}
      >
        Pagar
      </Button>
    </Box>
  );
}
