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
            <div className='flex p-8 gap-4 text-center'>
                {categories.map((category, index) => (
                    <div key={index} className='flex flex-col items-center border border-gray-300 rounded-md p-4 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out'>
                        <Category  src={category.src} name={category.name} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Categories;