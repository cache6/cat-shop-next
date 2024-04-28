"use client"
import Logo from "@/components/ui/logo"
import Search from "@/components/ui/search"

export default function ShopPage() {
    return (
        <>
            <div className='flex justify-between'>
                <div className="flex justify-start place-items-center">
                    <Logo />
                </div>
                <div className="flex justify-center ">
                    <Search />
                </div>
                <div className="flex justify-end">
                </div>
            </div>
            <div className="flex">
                Home
            </div>
            <div className="flex">
                <p className='text-2xl font-bold'>Results for "입력값"</p>
            </div>
            <div className="flex gap-2">
                <div className="grid grid-rows-5 grid-flow-col gap-2 auto-cols-fr">
                    <div className='row-span-1 p-10'>
                        <div className='flex justify-between'>
                            <div>제목</div>
                            <div className="flex justify-end">^</div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div><input type="checkbox" /></div>
                            <div>asdf</div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div><input type="checkbox" /></div>
                            <div>sss</div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <div><input type="checkbox" /></div>
                            <div>eee</div>
                        </div>
                    </div>
                    <div className='row-span-1'>2222</div>
                    <div className='row-span-1'>3333</div>
                    <div className='row-span-1'>4444</div>
                    <div className='row-span-1'>필터</div>
                    <div className='col-span-2 row-span-1'>
                        <div className='flex flex-row justify-between w-full'>
                            <div>별</div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>보기형식 선택</div>
                            <div>정렬방법</div>
                        </div>
                    </div>
                    <div className='row-span-2 col-span-2'>
                        <div className='flex flex-row gap-4'>
                            <div className='w-full'>
                                <img src="/images/cat_1.jpg" />
                                <div className="flex flex-col gap-2 p-2">
                                    <p>111</p>
                                    <p>설명</p>
                                    <div className="flex flex-row gap-4 justify-between">
                                        <div className="justify-start">
                                            <p>태그</p>
                                        </div>
                                        <div className="justify-end">
                                            <p>선택</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <img src="/images/cat_1.jpg" />
                            </div>
                            <div className='w-full'>
                                <img src="/images/cat_1.jpg" />
                            </div>
                            <div className='w-full'>
                                <img src="/images/cat_1.jpg" />
                            </div>

                        </div>

                    </div>
                    <div className='col-span-2 row-span-1'>
                        <div className="flex justify-center">
                            <p>더보기</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div>
                                <p>1</p>
                            </div>
                            <div>
                                <p>2</p>
                            </div>
                            <div>
                                <p>3</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}