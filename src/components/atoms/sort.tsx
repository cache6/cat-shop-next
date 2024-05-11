import React from 'react';

interface SortProps {
    selectedValue: string;  // 'selectedValue'의 타입을 string으로 명시
    onValueChange: (newValue: string) => void;  // 'onValueChange' 함수의 매개변수 타입 명시
}

const Sort: React.FC<SortProps> = ({ selectedValue, onValueChange }) => {
    return (
        <select value={selectedValue} onChange={(e) => onValueChange(e.target.value)}>
            <option value="">정렬 순</option>
            <option value="recommended">추천</option>
            <option value="mostPopular">인기</option>
            <option value="highestRated">평점</option>
            <option value="newest">최신</option>
        </select>
    );
}

export default Sort;

