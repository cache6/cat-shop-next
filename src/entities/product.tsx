import { Category } from "@/entities/category";

export interface Product {
    id: number;
    productImageUrl: string;
    title: string;
    externalNote?: string;
    tag?: string;
    price: number;
    isRecommended: boolean;
    category: Category;
}

