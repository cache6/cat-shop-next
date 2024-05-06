"use client"
import React, { useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/atoms/button"
import Lists from "@/components/todo/lists"
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

    const handleInputValue = (value: string) => {
        setInputValue(value);
    }

    const [resetKey, setResetKey] = useState(0);
    const clearFilters = useCallback(() => {
        setResetKey(prevKey => prevKey + 1);
    }, []);

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
                        <Lists />
                    </div>
                </div>
            </div>
        </>
    );
}