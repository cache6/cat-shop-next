import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/organisms/header';
import FilterOptionList from '@/components/organisms/filterOptionList';
import ProductCategories from '@/components/todo/productCategories';
import ProductList from '@/components/organisms/productList';
import { Button } from '@/components/atoms/button';
import { Category } from '@/entities/category';
import { Product } from '@/entities/product';
import Sort from '@/components/atoms/sort';
import { FilterOptionsProps } from '@/components/atoms/filterOptions';

function KeywordDisplay() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("keyword")!;
    return (
        <div>
            {keyword ? <div className='text-2xl font-bold pb-4 px-8'>Results for &quot;{keyword}&quot;</div> : <div className='py-6'></div>}
        </div>
    );
}

const SearchPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState<Category | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [sort, setSort] = useState('');
    const [keyword, setKeyword] = useState(''); // 검색 키워드 상태 추가
    const [selectedOptions, setSelectedOptions] = useState<FilterOptionsProps[]>([]);
    const totalPage = 10;

    useEffect(() => {
        const perPage = 8;  // 페이지당 제품 수 설정
        // API 호출 함수
        const fetchProducts = async () => {
            // API 호출 로직 (더미 데이터로 대체)
            const fetchedProducts: Product[] = [
                { id: 1, title: "제품 1", externalNote: '상세 설명1', tag: '태그1', price: 100, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" } },
                { id: 2, title: "제품 2", externalNote: '상세 설명2', tag: '태그2', price: 150, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 2, name: "Category 2", categoryImageUrl: "/images/cat_category.png" } },
                { id: 3, title: "제품 3", externalNote: '상세 설명3', tag: '태그3', price: 200, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 3, name: "Category 3", categoryImageUrl: "/images/cat_category.png" } },
                { id: 4, title: "제품 4", externalNote: '상세 설명4', tag: '태그4', price: 250, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 4, name: "Category 4", categoryImageUrl: "/images/cat_category.png" } },
                { id: 5, title: "제품 5", externalNote: '상세 설명5', tag: '태그5', price: 300, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 5, name: "Category 5", categoryImageUrl: "/images/cat_category.png" } },
                { id: 6, title: "제품 6", externalNote: '상세 설명6', tag: '태그6', price: 350, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 6, name: "Category 6", categoryImageUrl: "/images/cat_category.png" } },
                { id: 7, title: "제품 7", externalNote: '상세 설명7', tag: '태그7', price: 400, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 7, name: "Category 7", categoryImageUrl: "/images/cat_category.png" } },
                { id: 8, title: "제품 8", externalNote: '상세 설명8', tag: '태그8', price: 450, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 8, name: "Category 8", categoryImageUrl: "/images/cat_category.png" } },
            ];

            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, [keyword, category, sort, currentPage, selectedOptions]);  // 필터 또는 페이지 변경 시 API 호출

    const handleKeywordChange = (newKeyword: string) => {
        setKeyword(newKeyword);
    };

    const handleFilterChange = (title: string, options: { name: string, checked: boolean }[]) => {
        // 새로운 필터 옵션을 생성하거나 기존 옵션을 업데이트
        const newSelectedOptions = selectedOptions.map(filter => {
            if (filter.title === title) {
                return { ...filter, options: options };
            }
            return filter;
        });

        // 현재 변경된 필터 타이틀이 기존에 없다면 새로 추가
        const existingFilterIndex = selectedOptions.findIndex(filter => filter.title === title);
        if (existingFilterIndex === -1) {
            newSelectedOptions.push({ title, options });
        }

        setSelectedOptions(newSelectedOptions);
    };

    const clearSelectedOptions = () => {
        const resetOptions = selectedOptions.map(option => ({
            ...option,
            options: option.options.map(opt => ({ ...opt, checked: false }))
        }));
        setSelectedOptions(resetOptions);
    };

    return (
        <>
            <Header onInputValueChange={handleKeywordChange} />
            <Suspense fallback={<div>Loading search parameters...</div>}>
                <KeywordDisplay />
            </Suspense>

            <div className="flex flex-row gap-8">
                <div className="flex pl-8 flex-1 max-w-[24rem]">
                    <div className='w-full'>
                        <FilterOptionList onFilterChange={handleFilterChange} selectedOptions={selectedOptions} />
                        <div className='py-8'>
                            <Button className='w-full' onClick={clearSelectedOptions}>Clear filters</Button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="flex flex-1 pr-8 gap-8 pb-2">
                        <div className='flex flex-1 border-b border-gray-300'>
                            <div className='flex flex-1 gap-8 py-4'>
                                <ProductCategories category={category} onCategoryChange={setCategory} />
                                <div className='flex flex-1 justify-end'>
                                    <Sort selectedValue={sort} onValueChange={setSort} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductList
                        products={products}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPage={totalPage}
                    />
                </div>
            </div>
        </>
    );
};

export default SearchPage;