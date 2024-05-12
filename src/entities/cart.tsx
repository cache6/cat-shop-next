import { Product } from "@/entities/product";

export interface Cart {
    id: number;
    userId: number;
    quantity: number;
    product: Product;
}

