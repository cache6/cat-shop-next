
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface SearchParamsComponentProps {
    onPriceChange: (price: number) => void;
}

const SearchParamsComponent: React.FC<SearchParamsComponentProps> = ({ onPriceChange }) => {
    const searchParams = useSearchParams();
    useEffect(() => {
        const price = parseFloat(searchParams.get("totalPrice") || "0");
        onPriceChange(price);
    }, [searchParams, onPriceChange]);

    return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
};

export default SearchParamsComponent;