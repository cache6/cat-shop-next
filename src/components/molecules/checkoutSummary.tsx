import React from "react";
import { Button } from "@/components/atoms/button";

interface CheckoutSummaryProps {
    totalPrice: number;
    shippingCost: number;
    totalAmountDue: number;
    onCheckout: () => void;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ totalPrice, shippingCost, totalAmountDue, onCheckout }) => {
    return (
        <div className="flex flex-1 flex-col items-center gap-4 px-8 relative">
            <div className="sticky top-1/2 transform -translate-y-1/2 w-96">
                <div className="border-2 border-gray-300 rounded-md p-4">
                    <div className="text-2xl font-bold">Checkout Summary</div>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-row'>
                            <div className="flex-1 text-sm text-gray-400">Items in Cart</div>
                            <div className="flex-1 text-sm text-gray-400">${totalPrice.toFixed(2)}</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex-1 text-sm text-gray-400">Shipping</div>
                            <div className="flex-1 text-sm text-gray-400">${shippingCost.toFixed(2)}</div>
                        </div>
                        <div className="flex flex-row border-t border-gray-300 py-4">
                            <div className="flex-1 text-sm font-bold">Total Amount Due:</div>
                            <div className="flex-1 text-sm font-bold">${totalAmountDue.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="flex py-8">
                        <Button className="w-full" onClick={onCheckout}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;