"use client";
import Logo from "@/components/ui/logo"
import NavigationBar from "@/components/ui/navigationbar"
import Search from "@/components/ui/search"
import Categories from "@/components/ui/categories"
import PopularProducts from "@/components/ui/popularProducts"
import Footer from "@/components/ui/footer"

export default function Page() {
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex justify-start place-items-center gap-2'>
                    <Logo />
                </div>
                <div className='flex justify-center gap-4 place-items-center'>
                    <NavigationBar />
                </div>
                <div className='flex justify-end place-items-center gap-1'>
                    <Search />
                </div>
            </div>

            <div className='flex justify-center'>
                <img src="../images/cat.png" />
            </div>
            <div className='flex gap-4 px-8'>
                <Categories />
            </div>

            <div className='flex justify-start px-8'>추천 상품</div>
            <div className='flex justify-center gap-4 px-8'>
                <PopularProducts />
            </div>

            <div className='flex justify-center gap-4 px-8'>
                <Footer />
            </div>
        </>
    );
}