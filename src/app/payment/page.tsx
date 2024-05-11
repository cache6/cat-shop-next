"use client"
import { useState } from "react";
import Header from "@/components/organisms/header";
import AddressForm from "@/components/molecules/addressForm";
import CheckoutSummary from "@/components/molecules/checkoutSummary";

export default function PaymentPage() {
    const [, setInputValue] = useState('');
    // totalPrice를 더미 데이터로 초기화
    const [totalPrice, setTotalPrice] = useState(100.00); // 예시: $100.00
    const [toastMessage, setToastMessage] = useState('');
    const shippingCost = 2.50; // 배송비는 고정
    const totalAmountDue = totalPrice + shippingCost; // 총 금액 계산

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }
    const handleCheckout = () => {
        setToastMessage('구현 예정입니다');
        setTimeout(() => setToastMessage(''), 3000);
    }

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <div className="flex flex-row gap-4 px-8">
                <div className="flex flex-1 flex-col gap-4 justify-start pl-16">
                    <div className="text-sm text-gray-400">- Return to Shop</div>
                    <div className="text-2xl font-bold">Proceed to Checkout</div>
                    <div className="text-1xl font-bold border-t border-gray-300 py-4">Shipping Address</div>
                    <div className="flex flex-row gap-4">
                        <AddressForm label="Full Name" placeholder="Whiskers" />
                        <AddressForm label="Last Name" placeholder="Paws" />
                    </div>
                    <div className="flex flex-row gap-4">
                        <AddressForm label="Phone Number" placeholder="123-456-7890" />
                        <AddressForm label="Email Address" placeholder="whiskers@paws.com" />
                    </div>
                    <div className="text-xl font-bold border-t border-gray-300 py-4">
                        Enter Shipping Address
                    </div>
                    <AddressForm label="Recipient's Address" placeholder="Enter Address" />
                    <AddressForm label="Special Instructions" placeholder="Add Notes" />
                </div>
                <CheckoutSummary totalPrice={totalPrice} shippingCost={shippingCost} totalAmountDue={totalAmountDue} onCheckout={handleCheckout} />
            </div>
            {toastMessage && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
                    {toastMessage}
                </div>
            )}
        </>
    );
}