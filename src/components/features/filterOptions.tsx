import React, { useState, useEffect } from 'react';

interface Option {
    id: string;
    label: string;
}

const FilterOptions = () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [title, setTitle] = useState('');
    const [expanded, setExpanded] = useState(true); // 접기/열기 상태를 관리하는 상태

    useEffect(() => {
        setOptions([
            { id: 'opt1', label: 'Option 1' },
            { id: 'opt2', label: 'Option 2' },
            { id: 'opt3', label: 'Option 3' }
        ]);
        setTitle('Filter Options');
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className='flex justify-between'>
                <div>{title}</div>
                <button onClick={toggleExpand} className="text-sm px-2 py-1 border rounded">
                    {expanded ? <img src='/images/up_arrow.png' className='w-2 h-2' /> : <img src='/images/down_arrow.png' className='w-2 h-2' />}
                </button>
            </div>
            {expanded && options.map(option => (
                <div key={option.id} className='flex flex-row gap-2'>
                    <div><input type="checkbox" id={option.id} /></div>
                    <div>{option.label}</div>
                </div>
            ))}
        </>
    );
};

export default FilterOptions;