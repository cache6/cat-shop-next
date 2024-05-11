import React from 'react';
import ProductCard from '@/components/atoms/productCard';
import { Button } from '@/components/atoms/button';
import { Product } from '@/entities/product';

interface ProductListProps {
    products: Product[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPage: number;  // 전체 제품 수
}

const ProductList: React.FC<ProductListProps> = ({ products, currentPage, setCurrentPage, totalPage }) => {
    const itemsPerPage = 8;  // 페이지당 제품 수 명시적으로 설정
    const totalPages = Math.ceil(totalPage / itemsPerPage);

    const renderPageNumbers = Array.from({ length: totalPages }, (_, i) => (
        <Button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </Button>
    ));

    return (
        <>
            <div className='flex flex-row flex-wrap gap-8 min-h-[640px]'>
                {products.map((product, index) => (
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