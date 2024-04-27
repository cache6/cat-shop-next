"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// const InvoiceTable = dynamic(() => import('./InvoiceTable.client'), { ssr: false });
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Page() {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex justify-start place-items-center gap-2'>
                    <Link href="/">
                        <img src="../images/cat_shop.png" className='w-10 h-10' />
                    </Link>
                    <Link href="/">Cat Shop</Link>
                </div>
                <div className='flex justify-center gap-4 place-items-center'>
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/shop">Shop</Link>
                    </div>
                    <div>
                        <Link href="/categories">Categories</Link>
                    </div>
                    <div>
                        <Link href="/about">About</Link>
                    </div>
                </div>
                <div className='flex justify-end place-items-center gap-1'>
                    <Input className='w-80 h-8' placeholder='Search for your purrfect product' value={keyword}
                        onChange={handleInputChange} />
                    <Link href={`/search?keyword=${encodeURIComponent(keyword)}`}>
                        <Button variant="outline" className="w-12 h-8">
                            <img src="../images/search.png" className='w-3 h-3' />
                        </Button>
                    </Link>
                </div>

            </div>

            <div className='flex justify-center'>
                <img src="../images/cat.png" />
            </div>
            <div className='flex justify-center gap-4 px-8'>
                <div className='flex-col'>
                    <div className='flex justify-center'>카테고리1</div>
                    <img src="../images/cat_1.jpg" />
                </div>
                <div>
                    <div className='flex justify-center'>카테고리2</div>
                    <img src="../images/cat_2.jpg" />
                </div>
                <div>
                    <div className='flex justify-center'>카테고리3</div>
                    <img src="../images/cat_3.jpg" />
                </div>
            </div>
            <div className='flex justify-start px-8'>추천 상품</div>
            <div className='flex justify-center gap-4 px-8'>
                <div className='flex-col'>
                    <img src="../images/cat_1.jpg" />
                    <div className='flex justify-center'>고양이1</div>
                    <div className='flex justify-center'>10000</div>
                </div>
                <div>
                    <img src="../images/cat_1.jpg" />
                    <div className='flex justify-center'>고양이2</div>
                    <div className='flex justify-center'>10000</div>
                </div>
                <div>
                    <img src="../images/cat_1.jpg" />
                    <div className='flex justify-center'>고양이3</div>
                    <div className='flex justify-center'>10000</div>
                </div>
                <div>
                    <img src="../images/cat_1.jpg" />
                    <div className='flex justify-center'>고양이4</div>
                    <div className='flex justify-center'>10000</div>
                </div>
            </div>
            <div>
                <a href="https://kr.freepik.com/free-vector/cute-fat-cat-shocked-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-v_34733190.htm#query=%EA%B3%A0%EC%96%91%EC%9D%B4%20%EC%BA%90%EB%A6%AD%ED%84%B0&position=33&from_view=keyword&track=ais&uuid=6485d853-373e-4b63-96ad-0948a62a5fc1">작가 catalyststuff</a> 출처 Freepik
                <a href="https://kr.freepik.com/icon/search_5186446#fromView=search&page=1&position=8&uuid=a1ec8ccc-77e7-4fd7-a105-c999ec5382f3">Yuan Design 제작 아이콘</a>
                <a href="https://kr.freepik.com/icon/cat_5829662#fromView=keyword&page=1&position=34&uuid=08618671-95ec-41c5-9c0d-9048431eba12">Ayub Irawan 제작 아이콘</a>
            </div>
        </>
    );
}


{/* <InvoiceTable /> */ }
{/* <Link href="/view">view</Link> */ }