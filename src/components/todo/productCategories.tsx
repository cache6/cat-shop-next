import React from 'react';
import Sort from '@/components/todo/sort';
import Dropdown from '@/components/todo/dropdown';

const ProductCategories = () => {
    return (
        <>
            <div className="flex flex-1 pr-8 gap-8 pb-2">
                <div className='flex flex-1 border-b border-gray-300'>
                    <div className='flex flex-1 gap-8'>
                        <div className='flex'>
                            <button><p>★</p></button>
                        </div>
                        <div className='flex'>
                            <button><p>Top picks</p></button>
                        </div>
                        <div className='flex'>
                            <button><p>New arrivals</p></button>
                        </div>
                        <div className='flex'>
                            <button><p>Best sellers</p></button>
                        </div>
                    </div>
                    <div className='flex flex-1 justify-end'>
                        <Sort />
                        <Dropdown />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCategories;

