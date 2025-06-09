import { useState, useEffect } from "react";
import { Product } from "@/api";
import { Heading, Box } from "@chakra-ui/react";
import { GridProducts } from "@/components/Shared";

const productCtrl = new Product();

export function LatestProducts(props) {
  const { title, limit = 9, categoryId = null } = props;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getLatestPublished({
          limit,
          categoryId,
        });
        setProducts(response.data);

      } catch (error) {
        console.error(error);
      }
    })()
  }, []);

  if (!products) return null;

  return (
    <div>
      <Box textAlign="center">
        <Heading
          as="h2"
          size="lg"
          px={4}
          color="textPrimary"
          borderBottom="2px solid"
          borderColor="primary"
          display="inline-block"
        >
          {title}
        </Heading>
      </Box>
      <GridProducts products={products} />
    </div>
  )
}
