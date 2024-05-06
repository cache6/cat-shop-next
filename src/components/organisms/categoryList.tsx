import React, { useState, useEffect } from 'react';
import Category from '../todo/category';

const Categories = () => {
    const [categories, setCategories] = useState<{ src: string; name: string; }[]>([]);

    useEffect(() => {
        const dummyData = [
            { src: "/images/cat_category.png", name: "Category 1" },
            { src: "/images/cat_category.png", name: "Category 2" },
            { src: "/images/cat_category.png", name: "Category 3" },
        ];
        setCategories(dummyData);
    }, []);

    return (
        <div className="flex p-8 gap-4">
            {categories.map((category, index) => (
                <div key={index}>
                    <Category src={category.src} name={category.name} />
                </div>
            ))}
        </div>
    );
};

export default Categories;