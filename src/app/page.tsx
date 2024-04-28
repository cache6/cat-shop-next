"use client";
import Categories from "@/components/features/categories"
import PopularProducts from "@/components/features/popularProducts"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function Page() {
    return (
        <>
            <Header />
            <div className='flex justify-center h-[300px] px-8'>
                <img src="/images/cat_1.jpg" className='w-full h-full object-cover' />
            </div>
            <div className='flex gap-4 px-8'>
            </div>

            <div className='flex justify-start px-8'>추천 상품</div>
            <div className='flex justify-center gap-4 px-8'>
                <PopularProducts />
            </div>
            <Footer />
        </>
    );
}