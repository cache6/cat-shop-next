"use client";
import Logo from "@/components/ui/logo"
import NavigationBar from "@/components/ui/navigationbar"
import Search from "@/components/ui/search"
import Categories from "@/components/ui/categories"
import PopularProducts from "@/components/ui/popularProducts"

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
                <a href="https://kr.freepik.com/free-vector/cute-fat-cat-shocked-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-v_34733190.htm#query=%EA%B3%A0%EC%96%91%EC%9D%B4%20%EC%BA%90%EB%A6%AD%ED%84%B0&position=33&from_view=keyword&track=ais&uuid=6485d853-373e-4b63-96ad-0948a62a5fc1">작가 catalyststuff</a> 출처 Freepik
                <a href="https://kr.freepik.com/icon/search_5186446#fromView=search&page=1&position=8&uuid=a1ec8ccc-77e7-4fd7-a105-c999ec5382f3">Yuan Design 제작 아이콘</a>
                <a href="https://kr.freepik.com/icon/cat_5829662#fromView=keyword&page=1&position=34&uuid=08618671-95ec-41c5-9c0d-9048431eba12">Ayub Irawan 제작 아이콘</a>
            </div>
        </>
    );
}


{/* <InvoiceTable /> */ }
{/* <Link href="/view">view</Link> */ }