import React from 'react';
import Category from './category';

const Categories = () => {
    const categories = [
        { src: "../images/cat_1.jpg", name: "카테고리1" },
        { src: "../images/cat_1.jpg", name: "카테고리2" },
        { src: "../images/cat_1.jpg", name: "카테고리3" },
    ];

    return (
        <>
            {categories.map((category, index) => (
                <Category key={index} src={category.src} name={category.name} />
            ))}
        </>
    );
};

export default Categories;