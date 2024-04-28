import React, { useState } from 'react';

function Dropdown() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">Sort by</option>
                <option value="recommended">Recommended</option>
                <option value="mostPopular">Most Popular</option>
                <option value="highestRated">Highest Rated</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
}

export default Dropdown;