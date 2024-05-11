"use client"
import { useState } from "react";
import Header from "@/components/organisms/header";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

export default function CartPage() {
    const [, setInputValue] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [toastMessage, setToastMessage] = useState('');

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
        setToastMessage('');  // 토스트 메시지 초기화
    }

    const decreaseQuantity = () => {
        setQuantity(prev => {
            if (prev > 1) {
                return prev - 1;
            } else {
                setToastMessage('Cannot decrease below 1');  // 최소 수량 경고 토스트
                return prev;
            }
        });
    }

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <div className="border border-gray-300 max-w-7xl mx-auto">
                <div className="flex text-2xl font-bold px-8 py-4">Your Cart</div>
                <div className="flex flex-row gap-4 px-8 items-center">
                    <div className="flex-1 justify-start">
                        <input type="checkbox" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-1 flex-row gap-4 justify-items-start">
                        <div>
                            <img src="/images/cat_3.png" className="w-40 h-24" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span>111</span>
                            <span>$111</span>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 justify-items-start ml-80">
                        <div>
                            <Button className="w-5 h-5" onClick={decreaseQuantity}>-</Button>
                        </div>
                        <div>{quantity}</div>
                        <div>
                            <Button className="w-5 h-5" onClick={increaseQuantity}>+</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row px-8">
                    <div>totalPrice : ${111 * quantity}</div>
                </div>
                <div className="flex flex-row px-8 py-8">
                    <Button>
                        <Link href="/payment">Proceed to Checkout</Link>
                    </Button>
                </div>
            </div>
            {toastMessage && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
                    {toastMessage}
                </div>
            )}
        </>
    );
}