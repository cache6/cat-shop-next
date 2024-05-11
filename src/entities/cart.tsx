import { Product } from "./product";

export interface Cart {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    product: Product;
}

