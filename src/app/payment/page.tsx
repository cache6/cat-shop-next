"use client"
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
    return (
        <>
            <div className="grid p-8">
                <Header />
                <div className="flex flex-row gap-4 px-8">
                    <div className="flex flex-1 flex-col gap-4 justify-start pl-16">
                        <div className="text-sm text-gray-400">
                            - Return to Shop
                        </div>
                        <div className="text-2xl font-bold">
                            Proceed to Checkout
                        </div>
                        <div className="text-1xl font-bold border-t border-gray-300 py-4">
                            Shipping Address
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-1 gap-4">
                                <div className="flex flex-1 flex-col gap-4">
                                    <div className="text-sm font-bold">
                                        Full Name
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Whiskers" className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-1 gap-4">
                                <div className="flex flex-1 flex-col gap-4">
                                    <div className="text-sm font-bold">
                                        Last Name
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Paws" className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-1 gap-4">
                                <div className="flex flex-1 flex-col gap-4">
                                    <div className="text-sm font-bold">Phone Number</div>
                                    <div>
                                        <input type="text" placeholder="123-456-7890" className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-4 pb-4">
                                <div className="flex flex-1 flex-col gap-4">
                                    <div className="text-sm font-bold">Email Address</div>
                                    <div>
                                        <input type="text" placeholder="whiskers@paws.com" className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-xl font-bold border-t border-gray-300 py-4">
                            Enter Shipping Address
                        </div>
                        <div className="text-sm font-bold">
                            Recipient&apos;s Address
                        </div>
                        <div>
                            <input type="text" placeholder="Enter Address" className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
                        </div>
                        <div className="text-sm font-bold">
                            Special Instructions
                        </div>
                        <div>
                            <input type="text" placeholder="Add Notes" className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-4 px-8 relative">
                        <div className="sticky top-1/2 transform -translate-y-1/2 w-96">
                            <div className="border-2 border-gray-300 rounded-md p-4">
                                <div className="text-2xl font-bold">
                                    Checkout Summary
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className='flex flex-row'>
                                        <div className="flex-1 text-sm text-gray-400">Items in Cart</div>
                                        <div className="flex-1 text-sm text-gray-400">$100.00</div>
                                    </div>


                                    <div className="flex flex-row">
                                        <div className="flex-1 text-sm text-gray-400">Shipping</div>
                                        <div className="flex-1 text-sm text-gray-400">
                                            $2.50
                                        </div>
                                    </div>

                                    <div className="flex flex-row border-t border-gray-300 py-4">
                                        <div className="flex-1 text-sm font-bold ">
                                            Total Amount Due:
                                        </div>
                                        <div className="flex-1 text-sm font-bold">
                                            $102.50
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-8">
                                <Button className="w-full">
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

