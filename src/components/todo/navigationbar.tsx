import React from 'react';
import MenuLink from './menuLink'; // MenuLink 컴포넌트를 임포트합니다.

const NavigationBar = () => {
    return (
        <>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/shop">Shop</MenuLink>
            <MenuLink href="/categories">Categories</MenuLink>
            <MenuLink href="/about">About</MenuLink>
        </>
    );
};

export default NavigationBar;