import React from 'react';
import { Category } from '@/entities/category';

interface ProductCategoriesProps {
    category: Category | null;
    onCategoryChange: (newCategory: Category | null) => void; // 카테고리 객체 또는 null을 받도록 타입 수정
}

const categories: Category[] = [
    { id: 1, name: "추천", categoryImageUrl: "/path/to/image" },
    { id: 2, name: "세일", categoryImageUrl: "/path/to/image" },
    { id: 3, name: "신상", categoryImageUrl: "/path/to/image" },
    { id: 4, name: "베스트", categoryImageUrl: "/path/to/image" }
];


const ProductCategories: React.FC<ProductCategoriesProps> = ({ category, onCategoryChange }) => {
    const handleCategoryChange = (categoryName: string) => {
        const newCategory = categories.find(cat => cat.name === categoryName);
        onCategoryChange(newCategory || null);
    };

    return (
        <>
            <div className='flex border-l border-gray-300'>
                {categories.map(category => (
                    <div className='flex px-8 border-r border-gray-300' key={category.id}>
                        <button onClick={() => handleCategoryChange(category.name)}><p>{category.name}</p></button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductCategories;