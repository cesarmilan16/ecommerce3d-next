import { useState, useEffect } from "react";
import { Product } from "@/api"

const productCtrl = new Product();

const limit = 9;
const categoryId = null;

export function LatestProducts() {
    const [products, setProducts] = useState(null);
    console.log(products);
    

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

    if ( !products ) return null;
    
  return (
    <div>LatestProducts</div>
  )
}
