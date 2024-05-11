import React from 'react';
import { Category } from '@/entities/category';

interface ProductCategoriesProps {
    category: Category | null;
    onCategoryChange: (newCategory: Category | null) => void; // 카테고리 객체 또는 null을 받도록 타입 수정
}

const categories: Category[] = [
    { id: 1, name: "Favorites", categoryImageUrl: "/path/to/image" },
    { id: 2, name: "Top picks", categoryImageUrl: "/path/to/image" },
    { id: 3, name: "New arrivals", categoryImageUrl: "/path/to/image" },
    { id: 4, name: "Best sellers", categoryImageUrl: "/path/to/image" }
];


const ProductCategories: React.FC<ProductCategoriesProps> = ({ category, onCategoryChange }) => {
    const handleCategoryChange = (categoryName: string) => {
        const newCategory = categories.find(cat => cat.name === categoryName);
        onCategoryChange(newCategory || null);
    };

    return (
        <>
            <div className='flex'>
                <button onClick={() => handleCategoryChange('Favorites')}><p>★</p></button>
            </div>
            <div className='flex'>
                <button onClick={() => handleCategoryChange('Top picks')}><p>Top picks</p></button>
            </div>
            <div className='flex'>
                <button onClick={() => handleCategoryChange('New arrivals')}><p>New arrivals</p></button>
            </div>
            <div className='flex'>
                <button onClick={() => handleCategoryChange('Best sellers')}><p>Best sellers</p></button>
            </div>
        </>
    );
};

export default ProductCategories;