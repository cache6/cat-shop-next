import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Logo = () => {
    const [keyword, setKeyword] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };
    return (
        <>
            <Input className='w-80 h-8' placeholder='Search for your purrfect product' value={keyword}
                onChange={handleInputChange} />
            <Link href={`/search?keyword=${encodeURIComponent(keyword)}`}>
                <Button variant="outline" className="w-12 h-8">
                    <img src="../images/search.png" className='w-3 h-3' />
                </Button>
            </Link>
        </>
    );
};

export default Logo;