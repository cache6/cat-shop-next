import React from 'react';
import { Button } from '@/components/atoms/button';
import type { Product } from '@/entities/product';

interface ProductProps {
    product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <>
            <div>
                <img src={product.productImageUrl} />
                <div className='text-lg font-bold'>{product.title}</div>
                <div>{product.detail}</div>
                <div className="flex flex-row gap-4">
                    <div className="justify-start flex-1">
                        {product.tag}
                    </div>
                    <div className="flex justify-end flex-1">
                        <Button>
                            장바구니 담기
                        </Button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product

