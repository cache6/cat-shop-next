import React, { useState, useEffect } from 'react';

interface FilterProps {
    title: string;
    options: { id: string; label: string; }[];
    resetKey: number;  // 추가: 부모 컴포넌트에서 변경 가능한 키
}

const Filter: React.FC<FilterProps> = ({ title, options, resetKey }) => {
    const [expanded, setExpanded] = useState(true);
    const [checkedState, setCheckedState] = useState(new Array(options.length).fill(false));

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleCheckboxChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    // 리셋 키가 변경될 때마다 체크박스 상태를 초기화
    useEffect(() => {
        setCheckedState(new Array(options.length).fill(false));
    }, [resetKey, options.length]);

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
                            <div key={option.id} className='flex flex-row gap-2'>
                                <div>
                                    <input
                                        type="checkbox"
                                        id={option.id}
                                        checked={checkedState[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                </div>
                                <div>{option.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Filter;