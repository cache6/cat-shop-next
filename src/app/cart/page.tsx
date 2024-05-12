"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/organisms/header";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import { useCartsQuery } from "@/api/cart";
import CartList from "@/components/templates/cartList";
import { Cart } from '@/entities/cart';

export default function CartPage() {
    const [, setInputValue] = useState('');
    const [carts, setCarts] = useState<Cart[]>([]);
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const fetchedCarts = useCartsQuery(); // 훅을 최상위에서 호출

    useEffect(() => {
        const loadCarts = async () => {
            setCarts(await fetchedCarts);
        };
        loadCarts();
    }, []); // fetchedCarts를 의존성 배열에 추가

    const displayToast = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setToastMessage('');
        }, 3000);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
    };

    const totalPrice = carts.reduce((total, cart) => total + cart.product.price * cart.quantity, 0);
    const totalPriceFormatted = formatPrice(totalPrice);

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }

    const updateCartQuantityInState = (cartId: number, newQuantity: number) => {
        setCarts(currentCarts => currentCarts.map(cart =>
            cart.id === cartId ? { ...cart, quantity: newQuantity } : cart
        ));
    };

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <div className="border border-gray-300 max-w-7xl mx-auto">
                <div className="flex text-2xl font-bold px-8 py-4">장바구니</div>
                <CartList carts={carts} displayToast={displayToast} formatPrice={formatPrice} updateCartQuantityInState={updateCartQuantityInState} />                <div className="flex flex-row px-8">
                    <div>총 금액 : {totalPriceFormatted}</div>
                </div>
                <div className="flex flex-row px-8 py-8">
                    <Button>
                        <Link href="/payment">결제하러가기</Link>
                    </Button>
                </div>
            </div>
            {showToast && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
                    {toastMessage}
                </div>
            )}
        </>
    );
};