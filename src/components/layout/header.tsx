import React from 'react';
import Logo from '@/components/layout/logo';
import NavigationBar from '@/components/layout/navigationbar';
import Search from '@/components/features/search';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <div className='flex pb-4 '>
                <div className='flex flex-1 flex-row pb-4 border-b border-gray-300'>
                    <div className='flex flex-1 justify-start place-items-center gap-2'>
                        <Logo />
                    </div>
                    <div className='flex flex-1 justify-center gap-4 place-items-center'>
                        <NavigationBar />
                    </div>
                    <div className='flex flex-1 justify-end place-items-center gap-1'>
                        <Search />
                        <Link href='/login'>
                            <img src="/images/login.png" alt="login" className='w-8 h-8' />
                        </Link>
                        <Link href='/cart'>
                            <img src="/images/cart.png" alt="cart" className='w-8 h-8' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

