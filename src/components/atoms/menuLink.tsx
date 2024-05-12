import React, { ReactNode } from 'react';
import Link from 'next/link';

interface MenuLinkProps {
    href: string;
    children: ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, children }) => {
    return (
        <>
            <Link href={href}>{children}</Link>
        </>
    );
};

export default MenuLink;