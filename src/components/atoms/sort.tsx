import React, { useState } from 'react';

const Sort = () => {
    const [sortMethod, setSortMethod] = useState('products');

    const toggleSortMethod = () => {
        setSortMethod(prevMethod => prevMethod === 'products' ? 'list' : 'products');
    };

    return (
        <>
            <div className="flex gap-3 h-5 w-5 items-center" onClick={toggleSortMethod}>
                {sortMethod === 'products' ? (
                    <img src="/images/products_sort.png" className='h-4' alt="sort products" />
                ) : (
                    <img src="/images/list_sort.png" className='h-4' alt="sort list" />
                )}
            </div>
        </>
    );
};

export default Sort;