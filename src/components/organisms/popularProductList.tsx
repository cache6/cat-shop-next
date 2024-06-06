import React, { useEffect, useState } from 'react';
import PopularProduct from '@/components/molecules/popularProduct';
import { Product } from '@/entities/product';

const PopularProductList = () => {
    const [popularProducts, setPopularProducts] = useState<Product[]>([]);

    useEffect(() => {
        // API에서 데이터를 가져오는 것을 시뮬레이션
        const fetchProducts = async () => {
            // 실제 API에서 데이터를 가져올 경우 아래 코드를 사용
            // const response = await fetch('your-api-url');
            // const data = await response.json();

            // 시뮬레이션된 데이터
            const data = [
                { id: 1, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" }, productImageUrl: "/images/cat_popular.png", name: "인기 고양이1", price: 15000, isRecommended: true },
                { id: 2, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" }, productImageUrl: "/images/cat_popular.png", name: "인기 고양이2", price: 20000, isRecommended: true },
                { id: 3, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" }, productImageUrl: "/images/cat_popular.png", name: "인기 고양이3", price: 25000, isRecommended: true },
                { id: 4, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" }, productImageUrl: "/images/cat_popular.png", name: "인기 고양이4", price: 30000, isRecommended: true },
            ];

            setPopularProducts(data);
        };

        fetchProducts();
    }, []);

    const filteredProducts = popularProducts.filter(product => product.isRecommended);

    return (
        <>
            <div className='flex px-8 font-bold'>추천 상품</div>
            <div className='flex flex-col items-center px-8 py-4'>
                <PopularProduct popularProduct={filteredProducts} />
            </div>
        </>
    );
};

export default PopularProductList;

