import React, { useState, useEffect } from 'react';
import FilterOptions from '@/components/atoms/filterOptions';
import { FilterOptionsProps } from '@/components/atoms/filterOptions';

interface FilterOptionListProps {
    onFilterChange: (title: string, options: { name: string, checked: boolean }[]) => void;
    selectedOptions: FilterOptionsProps[];
}

const FilterOptionList: React.FC<FilterOptionListProps> = ({ onFilterChange, selectedOptions }) => {
    const [filterOptions, setFilterOptions] = useState<FilterOptionsProps[]>([]);

    const handleOptionChange = (title: string, options: { name: string, checked: boolean }[]) => {
        onFilterChange(title, options); // 상위 컴포넌트로 전달
    };

    useEffect(() => {
        // API 호출을 시뮬레이션하는 더미 데이터
        const fetchFilters = async () => {
            // 실제 API 호출로 대체 예정
            const fetchedFilters: FilterOptionsProps[] = [
                { title: "Your Title1", options: [{ name: "Option1", checked: false }, { name: "Option2", checked: false }] },
                { title: "Your Title2", options: [{ name: "Option1", checked: false }, { name: "Option2", checked: false }] },
                { title: "Your Title3", options: [{ name: "Option1", checked: false }, { name: "Option2", checked: false }] }
            ];

            // 사용자 선택을 유지하면서 필터 옵션을 업데이트
            const updatedFilters = fetchedFilters.map(filter => {
                const existingFilter = selectedOptions.find(f => f.title === filter.title);
                if (existingFilter) {
                    return {
                        ...filter,
                        options: filter.options.map(option => {
                            const existingOption = existingFilter.options.find(o => o.name === option.name);
                            return existingOption ? existingOption : option;
                        })
                    };
                }
                return filter;
            });

            setFilterOptions(updatedFilters);
        };

        fetchFilters();
    }, [selectedOptions]); // selectedOptions의 변경을 감지

    return (
        <>
            <div className='flex flex-col gap-4 '>
                {filterOptions.map(filterOption => (
                    <FilterOptions key={filterOption.title} title={filterOption.title} options={filterOption.options} onOptionChange={handleOptionChange} />
                ))}
            </div>
        </>
    );
};

export default FilterOptionList;