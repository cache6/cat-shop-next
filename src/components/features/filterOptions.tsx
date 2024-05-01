import React from 'react';
import FilterOption from './filterOption'; // 경로는 실제 프로젝트 구조에 맞게 조정하세요.

// 예시 데이터, 실제 데이터 구조에 맞게 조정해야 합니다.
const filterData = {
    "Category": ["Books", "Electronics", "Clothing"],
    "Price Range": ["$1-$20", "$21-$50", "$51-$100"]
};

const FilterOptions = () => {
    return (
        <div className='pb-8'>
            {Object.entries(filterData).map(([title, options], index) => (
                <FilterOption
                    key={index}
                    title={title}
                    options={options.map((option, idx) => ({
                        id: `${title}-${idx}`, // 고유 ID 생성
                        label: option
                    }))}
                />
            ))}
        </div>
    );
};

export default FilterOptions;