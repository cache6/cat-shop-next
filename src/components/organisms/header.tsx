import React from 'react';
import Logo from '@/components/atoms/logo';
import NavigationBar from '@/components/todo/navigationbar';
import Search from '@/components/molecules/search';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface HeaderProps {
    onInputValueChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onInputValueChange }) => {
    const notify = () => {
        toast("구현 예정입니다.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

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
                        <Search onInputValueChange={onInputValueChange} />
                        <button onClick={notify}>
                            <img src="/images/login.png" alt="login" className='w-8 h-8' />
                        </button>
                        <Link href='/cart'>
                            <img src="/images/cart.png" alt="cart" className='w-8 h-8' />
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Header;