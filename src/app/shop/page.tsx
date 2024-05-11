"use client"
import React, { useState, useCallback, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/atoms/button"
import ProductList from "@/components/organisms/productList"
import ProductCategories from "@/components/todo/productCategories"
import Header from "@/components/organisms/header"
import FilterOptionList from "@/components/organisms/filterOptionList"

function KeywordDisplay() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("keyword")!;
    return (
        <div>
            {keyword ? <div className='text-2xl font-bold pb-4 px-8'>Results for &quot;{keyword}&quot;</div> : <div className='py-6'></div>}
        </div>
    );
}

export default function ShopPage() {
    const [, setInputValue] = useState('');
    const searchParams = useSearchParams();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        // URL의 검색어가 변경될 때마다 keyword 상태를 업데이트
        const newKeyword = searchParams.get('keyword') || '';
        setKeyword(newKeyword);
    }, [searchParams]); // searchParams가 변경될 때마다 useEffect 실행

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }

    const [resetKey, setResetKey] = useState(0);
    const clearFilters = useCallback(() => {
        setResetKey(prevKey => prevKey + 1);
        setKeyword(''); // 필터를 클리어할 때 검색어도 초기화
    }, [searchParams]);

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            <Suspense fallback={<div>Loading search parameters...</div>}>
                <KeywordDisplay />
            </Suspense>

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
                        <ProductList keyword={keyword} />
                    </div>
                </div>
            </div>
        </>
    );
}