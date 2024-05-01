"use client";
import Categories from "@/components/features/categories"
import PopularProducts from "@/components/features/popularProducts"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function Page() {
    return (
        <>
            <div className='grid p-8'>
                <Header />
                <div className='flex justify-center h-[300px] px-8'>
                    <img src="/images/cat_1.jpg" className='w-full h-full object-cover' />
                </div>
                <Categories />
                <PopularProducts />
                <Footer />
            </div>
        </>
    );
}