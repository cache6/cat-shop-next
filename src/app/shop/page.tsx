"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useCallback } from 'react';
import { Button } from "@/components/atoms/button"
import Lists from "@/components/todo/lists"
import ProductCategories from "@/components/todo/productCategories"
import Header from "@/components/organisms/header"
import FilterOptionList from "@/components/organisms/filterOptionList"

export default function ShopPage() {
    const [, setInputValue] = useState('');

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }
    const searchParam = useSearchParams();
    const keyword = searchParam.get("keyword")!;

    const [resetKey, setResetKey] = useState(0);

    const clearFilters = useCallback(() => {
        setResetKey(prevKey => prevKey + 1);  // 키를 변경하여 체크박스 초기화 트리거
    }, []);

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            {keyword ? <div className='text-2xl font-bold pb-4 px-8'>Results for &quot;{keyword}&quot;</div> : <div className='py-6'></div>}

            <div className="flex flex-row gap-8">
                <div className="flex pl-8 flex-1 max-w-[24rem]">
                    <div className='flex flex-col w-full'>
                        <FilterOptionList resetKey={resetKey} />
                        <div className="justify-center py-4">
                            <Button className='w-full' onClick={clearFilters}>Clear filters</Button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <ProductCategories />
                    <div className="pt-8">
                        <Lists />
                    </div>
                </div>
            </div>
        </>
    );
}