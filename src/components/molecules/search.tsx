import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';

const Search = ({ onInputValueChange }: { onInputValueChange: (value: string) => void }) => {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handleButtonClick = () => {
        onInputValueChange(keyword);
    }
    return (
        <>
            <Input className='w-80 h-8' placeholder='Search for your purrfect product' value={keyword}
                onChange={handleInputChange} />
            <Link href={`/shop?keyword=${encodeURIComponent(keyword)}`}>
                <Button variant="outline" className="w-12 h-8" onClick={handleButtonClick}>
                    <img src="../images/search.png" className='w-3 h-3' />
                </Button>
            </Link>
        </>
    );
};

export default Search;

