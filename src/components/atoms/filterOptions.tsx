import React, { useState, useEffect } from 'react';

export interface FilterOptionsProps {
    title: string;
    options: { name: string, checked: boolean }[];
}

const FilterOptions: React.FC<FilterOptionsProps & { onOptionChange: (title: string, options: { name: string, checked: boolean }[]) => void }> = ({ title, options, onOptionChange }) => {
    const [expanded, setExpanded] = useState(true);
    const [checkedState, setCheckedState] = useState(options.map(option => option.checked));

    useEffect(() => {
        // options prop의 변경을 감지하여 checkedState를 업데이트
        setCheckedState(options.map(option => option.checked));
    }, [options]);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedState = checkedState.map((item, idx) =>
            idx === index ? !item : item
        );
        setCheckedState(updatedCheckedState);

        // 옵션 배열 전체를 업데이트하여 상위 컴포넌트로 전달
        const updatedOptions = options.map((option, idx) => ({
            ...option,
            checked: updatedCheckedState[idx]
        }));
        onOptionChange(title, updatedOptions);
    };


    return (
        <>
            <div className='flex flex-col border border-gray-300 px-8 pb-8 pt-4'>
                <div className='flex flex-row py-4'>
                    <div className="w-full font-bold">{title}</div>
                    <button onClick={toggleExpand} className="px-2 border rounded w-6 h-6">
                        {expanded ? <img src='/images/up_arrow.png' className='w-2 h-2' /> : <img src='/images/down_arrow.png' className='w-2 h-2' />}
                    </button>
                </div>
                {expanded && (
                    <div className='flex flex-col gap-2'>
                        {options.map((option, index) => (
                            <div key={option.name} className='flex flex-row gap-2'>
                                <div>
                                    <input
                                        type="checkbox"
                                        id={option.name}
                                        checked={checkedState[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                </div>
                                <div>{option.name}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default FilterOptions;

