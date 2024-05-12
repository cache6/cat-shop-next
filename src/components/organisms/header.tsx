import React, { useState } from 'react';
import Logo from '@/components/atoms/logo';
import NavigationBar from '@/components/molecules/navigationbar';
import SearchBox from '@/components/molecules/searchBox';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface HeaderProps {
    onInputValueChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onInputValueChange }) => {
    const [toastMessage, setToastMessage] = useState('');

    const handleCheckout = () => {
        setToastMessage('구현 예정입니다');
        setTimeout(() => setToastMessage(''), 3000);
    }

    return (
        <>
            <div className='flex py-4 px-8'>
                <div className='flex flex-1 flex-row pb-4 border-b border-gray-300'>
                    <div className='flex flex-1 justify-start place-items-center gap-2'>
                        <Logo />
                    </div>
                    <div className='flex flex-1 justify-center gap-4 place-items-center'>
                        <NavigationBar />
                    </div>
                    <div className='flex flex-1 justify-end place-items-center gap-1'>
                        <SearchBox onInputValueChange={onInputValueChange} />
                        <button onClick={handleCheckout}>
                            <img src="/images/login.png" alt="login" className='w-8 h-8' />
                        </button>
                        <Link href='/cart'>
                            <img src="/images/cart.png" alt="cart" className='w-8 h-8' />
                        </Link>
                    </div>
                </div>
            </div>
            {toastMessage && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded">
                    {toastMessage}
                </div>
            )}
        </>
    );
};

export default Header;