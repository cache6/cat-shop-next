"use client"
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
    return (
        <>
            <div className="grid p-8">
                <Header />
                <div className="border border-gray-300 max-w-7xl mx-auto">
                    <div className="flex text-2xl font-bold px-8 py-4">Your Cart</div>
                    <div className="flex flex-row gap-4 px-8 items-center">
                        <div className="flex-1 justify-start">
                            <input type="checkbox" className="w-5 h-5" />
                        </div>
                        <div className="flex flex-1 flex-row gap-4 justify-items-start">
                            <div>
                                <img src="/images/cat_1.jpg" className="w-40 h-20" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span>111</span>
                                <span>$111</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-4 justify-items-start ml-80">
                            <div>
                                <Button className="w-5 h-5">-</Button>
                            </div>
                            <div>1</div>
                            <div>
                                <Button className="w-5 h-5">+</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row px-8">
                        <div>total : $111</div>
                    </div>
                    <div className="flex flex-row px-8 py-8">
                        <Button>
                            <Link href="/payment">Proceed to Checkout</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

