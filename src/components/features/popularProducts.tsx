import React from 'react';
import Products from './products';

const PopularProducts = () => {
    const popularProducts = [
        { src: "../images/cat_1.jpg", name: "인기 고양이1", price: 15000 },
        { src: "../images/cat_1.jpg", name: "인기 고양이2", price: 20000 },
        { src: "../images/cat_1.jpg", name: "인기 고양이3", price: 25000 },
        { src: "../images/cat_1.jpg", name: "인기 고양이4", price: 30000 },
        // 추가 인기 상품 데이터
    ];

    return (
        <div className='flex flex-col items-center'>
            <Products products={popularProducts} />
        </div>
    );
};

export default PopularProducts;