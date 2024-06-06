import React from 'react';
import ProductCard from '@/components/atoms/productCard';
import { Button } from '@/components/atoms/button';
import { Product } from '@/entities/product';
import { useProducts } from '@/lib/api/product'

interface ProductListProps {
    products: Product[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPage: number;  // 전체 제품 수
}

const ProductList: React.FC<ProductListProps> = ({ products, currentPage, setCurrentPage, totalPage }) => {
    const itemsPerPage = 8;  // 페이지당 제품 수 명시적으로 설정
    const totalPages = Math.ceil(totalPage / itemsPerPage);
    const { data, isLoading, error } = useProducts()
    console.log("data:", data)

    const renderPageNumbers = Array.from({ length: totalPages }, (_, i) => (
        <Button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </Button>
    ));
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>No data available</div> // 데이터가 없을 때 처리

    return (
        <>
            <div className='flex flex-row flex-wrap gap-8 min-h-[640px]'>
                {data.map((product, index) => (
                    <div key={index} className='flex flex-col w-1/5'>
                        <ProductCard product={product} />
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