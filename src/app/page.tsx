"use client";
import { useState } from "react";
import CategoryList from "@/components/organisms/categoryList"
import PopularProducts from "@/components/organisms/popularProductList"
import Footer from "@/components/organisms/footer"
import Header from "@/components/organisms/header"

export default function Page() {
    const [, setInputValue] = useState('');

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }
    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <div className='flex justify-center h-[300px] px-8'> {/* 메인 이미지 */}
                <img src="/images/cat_main.png" className='w-full h-full object-cover' />
            </div>
            <CategoryList />
            <PopularProducts />
            <Footer />
        </>
    );
}