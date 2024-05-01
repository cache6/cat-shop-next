import React, { useState } from 'react';

interface Option {
    id: string;
    label: string;
}

interface FilterOptionProps {
    title: string;
    options: Option[];
}

const FilterOption: React.FC<FilterOptionProps> = ({ title, options }) => {
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className='flex flex-col border border-gray-300 px-8 pb-8 pt-4'>
                <div className='flex flex-row py-4'>
                    <div className="w-full font-bold">{title}</div>
                    <button onClick={toggleExpand} className=" px-2 border rounded w-6 h-6">
                        {expanded ? <img src='/images/up_arrow.png' className='w-2 h-2' /> : <img src='/images/down_arrow.png' className='w-2 h-2' />}
                    </button>
                </div>
                {expanded && (
                    <div className='flex flex-col gap-2'>
                        {options.map(option => (
                            <>
                                <div key={option.id} className='flex flex-row gap-2'>
                                    <div><input type="checkbox" id={option.id} /></div>
                                    <div>{option.label}</div>
                                </div>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default FilterOption;