import { Cart } from '@/entities/cart';

export const useCartsQuery: () => Promise<Cart[]> = async () => {
    // 실제 API 호출 대신 더미 데이터 반환
    return Promise.resolve([
        { id: 1, userId: 1, quantity: 1, product: { id: 1, title: "제품 1", externalNote: '상세 설명1', tag: '태그1', price: 10000, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" } } },
    ]);
};

export const useUpdateCartQuantityMutation = () => {
    return async (cartId: number, productId: number, newQuantity: number): Promise<void> => {
        // API 호출 로직 또는 상태 업데이트 로직
        console.log(`Updating cart ${cartId} to new quantity ${newQuantity} for product ${productId}`);
        return Promise.resolve();
    };
};

export const useCartsShipingPriceQuery: () => Promise<number> = async () => {
    return Promise.resolve(2500);
};
