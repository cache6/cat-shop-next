"use client"
import FilterOptions from "@/components/features/filterOptions"
import { Button } from "@/components/ui/button"
import Lists from "@/components/features/lists"
import ProductCategories from "@/components/features/productCategories"
import Header from "@/components/layout/header"
import Paging from "@/components/features/paging"

export default function ShopPage() {
    return (
        <>
            <div className='grid p-8'>
                <Header />
                <p className='text-2xl font-bold pb-4'>Results for &quot;입력값&quot;</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1 max-w-sm">
                        <FilterOptions />
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
            </div>
        </>
    );
}