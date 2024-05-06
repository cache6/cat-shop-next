"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
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

    return (
        <>
            <Header onInputValueChange={handleInputValue} />
            {keyword ? <div className='text-2xl font-bold pb-4 px-8'>Results for &quot;{keyword}&quot;</div> : <div className='py-6'></div>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
                <div className="md:col-span-1 max-w-sm">
                    <FilterOptionList />
                    <div className="flex justify-center">
                        <Button>Clear filters</Button>
                    </div>
                </div>
                <div className="md:col-span-2 grid grid-rows-1 gap-4 items-start">
                    <div className="max-h-8">
                        <ProductCategories />
                    </div>
                    <div className="overflow-auto pt-8">
                        <Lists />
                    </div>
                    <div className="flex flex-row gap-4 pt-8">
                        <div>
                            <Button>1</Button>
                        </div>
                        <div>
                            <Button>2</Button>
                        </div>
                        <div>
                            <Button>3</Button>
                        </div>
                        <div>
                            <Button>4</Button>
                        </div>
                        <div>
                            <Button>5</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}