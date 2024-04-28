"use client"
import FilterOptions from "@/components/features/filterOptions"
import { Button } from "@/components/ui/button"
import Lists from "@/components/features/lists"
import ProductCategories from "@/components/features/productCategories"
import Dropdown from "@/components/features/dropdown"
import Sort from "@/components/features/sort"
import Paging from "@/components/features/paging"
import Header from "@/components/layout/header"

export default function ShopPage() {
    return (
        <>
            <Header />
            <div className="flex px-8">
                <p className='flex text-2xl font-bold place-items-end'>Results for "입력값"</p>
            </div>
            <div className="flex max-h-[70vh] ">
                <div className="grid grid-rows-5 grid-flow-col grid-cols-[0.5fr_2fr_0.5fr] ">
                    <div className='row-span-1 p-10'>
                        <FilterOptions />
                    </div>
                    <div className='row-span-1 p-10'>
                        <FilterOptions />
                    </div>
                    <div className='row-span-1 p-10'>
                        <FilterOptions />
                    </div>
                    <div className='row-span-1 p-10'>
                        <FilterOptions />
                    </div>
                    <div className='row-span-1 p-10'>
                        <Button>Clear filters</Button>
                    </div>
                    <div className='flex col-span-1 row-span-1'>
                        <div className='flex flex-row justify-between w-full items-center'>
                            <ProductCategories />
                            <div className="flex justify-end gap-2">
                                <Sort />
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                    <div className='row-span-3 col-span-1'>
                        <div className='flex flex-row gap-4'>
                            <Lists />
                        </div>
                    </div>
                    <div className='row-span-1 col-span-1 gap-12'>
                        <div className="flex flex-row gap-4">
                            <Paging />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}