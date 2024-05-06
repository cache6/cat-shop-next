import React from 'react';
import Product from '../molecules/popularProduct';

interface ProductsProps {
    products: Array<{ src: string; name: string; price: number }>;
}

const Products = ({ products }: ProductsProps) => {
    return (
        <div className='flex justify-center gap-4'>
            {/* {products.map((product, index) => (
                <Product key={index} src={product.src} name={product.name} price={product.price} />
            ))} */}
        </div>
    );
};

export default Products;