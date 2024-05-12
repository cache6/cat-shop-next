"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/organisms/header";
import AddressForm from "@/components/molecules/addressForm";
import CheckoutSummary from "@/components/molecules/checkoutSummary";
import { Cart } from "@/entities/cart";
import { User } from "@/entities/user";
import { useUserQuery } from "@/api/user";
import { useCartsQuery, useCartsShipingPriceQuery } from "@/api/cart";

export default function PaymentPage() {
    const [, setInputValue] = useState('');
    const [user, setUser] = useState<User | null>(null);
    const [carts, setCarts] = useState<Cart[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [toastMessage, setToastMessage] = useState('');
    const [shippingCost, setShippingCost] = useState(0);
    const totalAmountDue = totalPrice + shippingCost;

    const fetchedUser = useUserQuery();
    const fetchedCarts = useCartsQuery();
    const shippingPrice = useCartsShipingPriceQuery();

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }
    const handleCheckout = () => {
        setToastMessage('구현 예정입니다');
        setTimeout(() => setToastMessage(''), 3000);
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount);
    };

    useEffect(() => {
        const fetchData = async () => {
            setUser(await fetchedUser);
            const cartsData = await fetchedCarts;
            setCarts(cartsData);
            setTotalPrice(cartsData.reduce((sum, cart) => sum + cart.product.price * cart.quantity, 0));
            setShippingCost(await shippingPrice);
        };

        fetchData();
    }, []);

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <div className="flex flex-row gap-4 px-8">
                <div className="flex flex-1 flex-col gap-4 justify-start pl-16">
                    <div className="text-sm text-gray-400">- 돌아가기</div>
                    <div className="text-2xl font-bold">결제 내용</div>
                    <div className="text-1xl font-bold border-t border-gray-300 py-4">배송 주소</div>
                    <div className="flex flex-row gap-4">
                        <AddressForm value={user?.name} label="이름" placeholder="길동" />
                        <AddressForm value={user?.address} label="성" placeholder="홍" />
                    </div>
                    <div className="flex flex-row gap-4">
                        <AddressForm value={user?.phone} label="전화 번호" placeholder="010-1234-5678" />
                        <AddressForm value={user?.email} label="이메일 주소" placeholder="cat@naver.com" />
                    </div>
                    <div className="text-xl font-bold border-t border-gray-300 py-4">
                        배송 주소 입력
                    </div>
                    <AddressForm value={user?.address} label="배송 주소" placeholder="배송 주소 입력" />
                    <AddressForm label="배송 메모" placeholder="배송 메모 입력" />
                </div>
                <CheckoutSummary
                    carts={carts}
                    totalPrice={formatCurrency(totalPrice)}
                    shippingCost={formatCurrency(shippingCost)}
                    totalAmountDue={formatCurrency(totalAmountDue)}
                    onCheckout={handleCheckout}
                />
            </div>
            {toastMessage && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
                    {toastMessage}
                </div>
            )}
        </>
    );
}