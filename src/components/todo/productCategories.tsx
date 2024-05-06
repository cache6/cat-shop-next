import React from 'react';
import Sort from '@/components/todo/sort';
import Dropdown from '@/components/todo/dropdown';

const ProductCategories = () => {
    return (
        <>
            <div className="flex flex-1 gap-8 px-8 border-b border-gray-300 pb-2">
                <div>
                    <button><p>★</p></button>
                </div>
                <div>
                    <button><p>Top picks</p></button>
                </div>
                <div>
                    <button><p>New arrivals</p></button>
                </div>
                <div>
                    <button><p>Best sellers</p></button>
                </div>
                <div className='flex flex-1 justify-end'>
                    <Sort />
                    <Dropdown />
                </div>
            </div>
        </>
    );
};

export default ProductCategories;

