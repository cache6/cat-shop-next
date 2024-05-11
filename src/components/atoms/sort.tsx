import React from 'react';

interface SortProps {
    selectedValue: string;  // 'selectedValue'의 타입을 string으로 명시
    onValueChange: (newValue: string) => void;  // 'onValueChange' 함수의 매개변수 타입 명시
}

const Sort: React.FC<SortProps> = ({ selectedValue, onValueChange }) => {
    return (
        <select value={selectedValue} onChange={(e) => onValueChange(e.target.value)}>
            <option value="">Sort by</option>
            <option value="recommended">Recommended</option>
            <option value="mostPopular">Most Popular</option>
            <option value="highestRated">Highest Rated</option>
            <option value="newest">Newest</option>
        </select>
    );
}

export default Sort;

