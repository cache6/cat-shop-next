import React from 'react';
import MenuLink from '@/components/atoms/menuLink';

const NavigationBar = () => {
    return (
        <>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/shop">Shop</MenuLink>
            {/* TODO: 
            <MenuLink href="/categories">Categories</MenuLink>
            <MenuLink href="/about">About</MenuLink> */}
        </>
    );
};

export default NavigationBar;