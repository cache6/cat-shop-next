import React from "react";
import { Button } from "@/components/atoms/button";
import { Cart } from "@/entities/cart";

interface CheckoutSummaryProps {
    carts: Cart[];
    totalPrice: string;
    shippingCost: string;
    totalAmountDue: string;
    onCheckout: () => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ carts, totalPrice, shippingCost, totalAmountDue, onCheckout }) => {
    return (
        <div className="flex flex-1 flex-col items-center gap-4 px-8 relative">
            <div className="sticky top-1/2 transform -translate-y-1/2 w-96">
                <div className="border-2 border-gray-300 rounded-md p-4">
                    <div className="text-2xl font-bold">결제 요약</div>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-row'>
                            <div className="flex-1 text-sm text-gray-400">제품 금액</div>
                            <div className="flex-1 text-sm text-gray-400">{totalPrice}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex-1 text-sm text-gray-400">배송비</div>
                            <div className="flex-1 text-sm text-gray-400">{shippingCost}</div>
                        </div>
                        <div className="flex flex-row border-t border-gray-300 py-4">
                            <div className="flex-1 text-sm font-bold">총 금액</div>
                            <div className="flex-1 text-sm font-bold">{totalAmountDue}</div>
                        </div>
                    </div>
                    <div className="flex py-8">
                        <Button className="w-full" onClick={onCheckout}>결제하기</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;