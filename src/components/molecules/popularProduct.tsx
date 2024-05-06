import React from 'react';
import Link from 'next/link';
import { Product } from '@/entities/product';

interface ProductProps {
    popularProducts: Product[];
}

const PopularProducts: React.FC<ProductProps> = ({ popularProducts }) => {
    return (
        <div className='flex gap-4'>
            {popularProducts.map((popularProduct, index) => (
                <div key={index} className='flex flex-col items-center border border-gray-300 rounded-md p-4 shadow'>
                    <Link href="/">
                        <img src={popularProduct.productImageUrl} alt={popularProduct.name} />
                    </Link>
                    <div className='text-center'>{popularProduct.name}</div>
                    <div className='text-center'>${popularProduct.price.toLocaleString()}</div>
                </div>
            ))}
        </div>
    );
};

export default PopularProducts;