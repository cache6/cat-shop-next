import React from 'react';
import Link from 'next/link';

interface CategoryProps {
    src: string;
    name: string;
}

const Category = ({ src, name }: CategoryProps) => {
    return (
        <>
            <div className='flex-col items-center'>
                <Link href="/" className='text-center' >{name}</Link>
                <Link href="/">
                    <img src={src} alt={name} />
                </Link>

            </div>
        </>
    );
};

export default Category;