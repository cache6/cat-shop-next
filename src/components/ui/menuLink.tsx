import React, { ReactNode } from 'react';
import Link from 'next/link';

interface MenuLinkProps {
    href: string;
    children: ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, children }) => {
    return (
        <div>
            <Link href={href}>{children}</Link>
        </div>
    );
};

export default MenuLink;