import React, { useState } from 'react';
import Product from '@/components/atoms/product';
import { Button } from '@/components/atoms/button';

const ProductList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // 더미 데이터 생성
    const dummyData = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        productImageUrl: `/images/cat_3.png`, // 이미지 URL 수정
        name: `제품명${index + 1}`,
        title: `제목${index + 1}`,
        detail: `상세 설명${index + 1}`,
        tag: `태그${index + 1}`,
        price: 1000 * (index + 1),
        isRecommended: index % 2 === 0,
        category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" }
    }));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(dummyData.length / itemsPerPage);
    const renderPageNumbers = Array.from({ length: totalPages }, (_, i) => (
        <Button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </Button>
    ));

    return (
        <>
            <div className='flex flex-row flex-wrap gap-8 min-h-[640px]'> {/* Adjust minHeight based on your item height */}
                {currentItems.map((item, index) => (
                    <div key={index} className='flex flex-col w-1/5'>
                        <Product product={item} />
                    </div>
                ))}
                {Array.from({ length: 8 - currentItems.length }, (_, i) => (
                    <div key={i} className='flex flex-col w-1/5 invisible'>
                        <Product product={dummyData[0]} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4 gap-4">
                {renderPageNumbers}
            </div>
        </>
    );
}

export default ProductList;

