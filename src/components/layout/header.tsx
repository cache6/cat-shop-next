import React from 'react';
import Logo from '@/components/layout/logo';
import NavigationBar from '@/components/layout/navigationbar';
import Search from '@/components/features/search';

const Header = () => {
    return (
        <div className='flex justify-between p-8 '>
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
    );
};

export default Header;

