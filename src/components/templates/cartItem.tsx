import React, { useState } from 'react';
import { Button } from "@/components/atoms/button";
import { updateCartQuantity } from "@/api/cartApi";

const CartItem = ({ cartId, productId, initialQuantity, displayToast, updateCartQuantityInState }: { cartId: number, productId: number, initialQuantity: number, displayToast: (message: string) => void, updateCartQuantityInState: (cartId: number, newQuantity: number) => void }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increaseQuantity = async () => {
        const newQuantity = quantity + 1;
        try {
            await updateCartQuantity(cartId, productId, newQuantity);
            setQuantity(newQuantity);
            updateCartQuantityInState(cartId, newQuantity);  // 상태 직접 갱신
        } catch (error) {
            console.error("Failed to update quantity", error);
            displayToast("수량 업데이트 중 오류가 발생했습니다.");
        }
    };

    const decreaseQuantity = async () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            try {
                await updateCartQuantity(cartId, productId, newQuantity);
                setQuantity(newQuantity);
                updateCartQuantityInState(cartId, newQuantity);  // 상태 직접 갱신
            } catch (error) {
                console.error("Failed to decrease quantity", error);
                displayToast("수량 감소 중 오류가 발생했습니다.");
            }
        } else {
            displayToast("최소 수량은 1개입니다.");
        }
    };

    return (
        <div className="flex flex-row gap-4 px-8 items-center">
            <Button className="w-5 h-5" onClick={decreaseQuantity}>-</Button>
            <div>{quantity}</div>
            <Button className="w-5 h-5" onClick={increaseQuantity}>+</Button>
        </div>
    );
};

export default CartItem;