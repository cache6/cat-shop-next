"use client"
import { useState, useEffect } from "react";
import Header from "@/components/organisms/header";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import { Cart } from "@/entities/cart";

// 가정: API에서 제품 데이터를 받아오는 함수
const fetchCarts = async () => {
    // API 호출 로직 구현
    return [
        { id: 1, userId: 1, productId: 1, quantity: 1, product: { id: 1, title: "제품 1", externalNote: '상세 설명1', tag: '태그1', price: 10000, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" } } },
    ];
};

export default function CartPage() {
    const [, setInputValue] = useState('');
    const [carts, setCarts] = useState<Cart[]>([]);
    const [quantity, setQuantity] = useState<{ [key: number]: number }>({});
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedCarts = await fetchCarts();
            setCarts(fetchedCarts);
            // 초기 수량 설정
            const initialQuantities = fetchedCarts.reduce<{ [key: number]: number }>((acc, cart) => {
                acc[cart.productId] = cart.quantity; // 각 제품의 초기 수량을 1로 설정
                return acc;
            }, {});
            setQuantity(initialQuantities);
        };
        loadProducts();
    }, []);

    const handleInputValue = (value: string) => {
        setInputValue(value);
    };

    const increaseQuantity = (productId: number) => {
        setQuantity(prev => ({ ...prev, [productId]: prev[productId] + 1 }));
    };

    const decreaseQuantity = (productId: number) => {
        setQuantity(prev => {
            if (prev[productId] > 1) {
                return { ...prev, [productId]: prev[productId] - 1 };
            } else {
                setToastMessage('Cannot decrease below 1');
                return prev;
            }
        });
    };

    const totalPrice = carts.reduce((total, cart) => {
        return total + (cart.product.price * quantity[cart.productId]);
    }, 0);

    const totalPriceFormatted = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(totalPrice);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
    };

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <div className="border border-gray-300 max-w-7xl mx-auto">
                <div className="flex text-2xl font-bold px-8 py-4">장바구니</div>
                {carts.map(cart => (
                    <div key={cart.id} className="flex flex-row gap-4 px-8 items-center">
                        <div className="flex-1 justify-start">
                            <input type="checkbox" className="w-5 h-5" />
                        </div>
                        <div className="flex flex-1 flex-row gap-4 justify-items-start">
                            <div>
                                <img src={cart.product.productImageUrl} className="w-40 h-24" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span>{cart.product.title}</span>
                                <span>{formatPrice(cart.product.price)}</span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-4 justify-items-start ml-80">
                            <div>
                                <Button className="w-5 h-5" onClick={() => decreaseQuantity(cart.productId)}>-</Button>
                            </div>
                            <div>{quantity[cart.productId]}</div>
                            <div>
                                <Button className="w-5 h-5" onClick={() => increaseQuantity(cart.productId)}>+</Button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-row px-8">
                    <div>총 금액 : {totalPriceFormatted}</div>
                </div>
                <div className="flex flex-row px-8 py-8">
                    <Button>
                        <Link href="/payment">결제하기</Link>
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