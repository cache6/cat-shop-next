import React, { useState, useEffect } from 'react';
import ProductComponent from '@/components/atoms/product';
import { Button } from '@/components/atoms/button';
import { Product } from '@/entities/product';

interface ProductListProps {
    keyword: string;
}

const ProductList: React.FC<ProductListProps> = ({ keyword }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [filteredData, setFilteredData] = useState<Product[]>([]);

    useEffect(() => {
        const dummyData = Array.from({ length: 10 }, (_, index) => ({
            id: index + 1,
            productImageUrl: `/images/cat_3.png`,
            title: `제목${index + 1}`,
            externalNote: `상세 설명${index + 1}`,
            tag: `태그${index + 1}`,
            price: 1000 * (index + 1),
            isRecommended: index % 2 === 0,
            category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" }
        }));

        const newFilteredData = dummyData.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
        setFilteredData(newFilteredData);
        console.log(newFilteredData.length); // 필터링된 데이터의 길이를 로그로 출력
    }, [keyword]); // keyword가 변경될 때마다 useEffect 실행

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const renderPageNumbers = Array.from({ length: totalPages }, (_, i) => (
        <Button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </Button>
    ));

    return (
        <>
            <div className='flex flex-row flex-wrap gap-8 min-h-[640px]'>
                {currentItems.map((item, index) => (
                    <div key={index} className='flex flex-col w-1/5'>
                        <ProductComponent product={item} />
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