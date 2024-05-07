import React from 'react';
import Link from 'next/link';
import { Product } from '@/entities/product';

interface ProductProps {
    popularProduct: Product[];
}

const PopularProduct: React.FC<ProductProps> = ({ popularProduct }) => {
    return (
        <div className='flex gap-4'>
            {popularProduct.map((popularProduct, index) => (
                <div key={index} className='flex flex-col items-center border border-gray-300 rounded-md p-4 shadow'>
                    <Link href="/">
                        <img src={popularProduct.productImageUrl} alt={popularProduct.title} />
                    </Link>
                    <div className='text-center'>{popularProduct.title}</div>
                    <div className='text-center'>${popularProduct.price.toLocaleString()}</div>
                </div>
            ))}
        </div>
    );
};

export default PopularProduct;

