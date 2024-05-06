import React from 'react';
import Filter from '@/components/atoms/filter';

interface FilterOptionListProps {
    resetKey: number;
}

const FilterOptionList: React.FC<FilterOptionListProps> = ({ resetKey }) => {
    return (
        <>
            <div className='flex flex-col gap-4 '>
                <Filter title="Your Title1" options={[{ id: "Option1", label: "Option1" }, { id: "Option2", label: "Option2" }]} resetKey={resetKey} />
                <Filter title="Your Title2" options={[{ id: "Option1", label: "Option1" }, { id: "Option2", label: "Option2" }]} resetKey={resetKey} />
                <Filter title="Your Title3" options={[{ id: "Option1", label: "Option1" }, { id: "Option2", label: "Option2" }]} resetKey={resetKey} />
            </div>
        </>
    );
};

export default FilterOptionList;