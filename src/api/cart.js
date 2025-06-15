import { authFetch, ENV } from "@/utils";
import { forEach } from "lodash";

export class Cart {
    add(productId) {
        const products = this.getAll();
        const objIndex = products.findIndex((product) => product.id === productId)

        if (objIndex < 0) {
            products.push({ id: productId, quantity: 1 });
        } else {
            const product = products[objIndex];
            products[objIndex].quantity = product.quantity + 1;
        }

        localStorage.setItem(ENV.CART, JSON.stringify(products));
    }

    getAll() {
        const response = localStorage.getItem(ENV.CART);

        if (!response) {
            return [];
        } else {
            return JSON.parse(response);
        }
    }

    count() {
        const response = this.getAll();
        let count = 0;

        forEach(response, (item) => {
            count += item.quantity;
        });

        return count;
    }
};
