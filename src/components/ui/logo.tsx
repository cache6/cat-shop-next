import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <>
            <Link href="/">
                <img src="../images/cat_shop.png" className='w-10 h-10' />
            </Link>
            <Link href="/">Cat Shop</Link>
        </>
    );
};

export default Logo;