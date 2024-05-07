import React, { useState, useEffect } from 'react';
import Category from '@/components/atoms/category';

const Categories = () => {
    const [categories, setCategories] = useState<{ id: number, categoryImageUrl: string, title: string }[]>([]);

    useEffect(() => {
        const dummyData = [
            { id: 1, categoryImageUrl: "/images/cat_category.png", title: "Category 1" },
            { id: 2, categoryImageUrl: "/images/cat_category.png", title: "Category 2" },
            { id: 3, categoryImageUrl: "/images/cat_category.png", title: "Category 3" },
        ];
        setCategories(dummyData);
    }, []);

    return (
        <div className="flex p-8 gap-4">
            {categories.map((category, index) => (
                <div key={index}>
                    <Category category={category} />
                </div>
            ))}
        </div>
    );
};

export default Categories;