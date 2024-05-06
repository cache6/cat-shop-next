import React from 'react';
import Link from 'next/link';

interface CategoryProps {
    src: string;
    name: string;
}

const Category = ({ src, name }: CategoryProps) => {
    return (
        <>
            <div className='flex flex-col items-center border border-gray-300 rounded-md p-4 shadow'>
                <Link href="/" className='text-center' >{name}</Link>
                <Link href="/">
                    <img className='w-full h-auto' src={src} alt={name} />
                </Link>
            </div>
        </>
    );
};

export default Category;