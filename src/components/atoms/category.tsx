import React from 'react';
import Link from 'next/link';
import type { Category } from '@/entities/category';

interface CategoryProps {
    category: Category;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <>
            <div className='flex flex-col items-center border border-gray-300 rounded-md p-4 shadow'>
                <Link href="/" className='text-center' >{category.title}</Link>
                <Link href="/">
                    <img className='w-full h-auto' id={category.id.toString()} src={category.categoryImageUrl} alt={category.title} />
                </Link>
            </div>
        </>
    );
};

export default Category;