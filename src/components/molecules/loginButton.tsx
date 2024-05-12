import React, { useState } from 'react';
import { Button } from '@/components/atoms/button';
import Cookies from 'js-cookie';

export default function LoginButton() {
    const [isClicked, setIsClicked] = useState(false);  // 버튼 클릭 상태를 관리하는 state

    async function handleLogin() {
        setIsClicked(true);  // 버튼 클릭 시, 클릭 상태를 true로 설정
        // 로그인 성공을 가정하고 임의의 토큰 생성
        const fakeToken = "fUF8qwPMuPeuKipbfGlY9i2ED";
        // 토큰을 쿠키에 저장
        setTokenCookie(fakeToken);
    }

    return (
        <div className='flex flex-col items-center gap-8'>
            <Button onClick={handleLogin} disabled={isClicked}>{isClicked ? '로그인 성공' : '로그인'}</Button>
        </div>
    );
}

function setTokenCookie(token: string) {
    Cookies.set('token', token, {
        expires: 7, // 토큰의 유효 기간을 7일로 설정
        path: '/',
        secure: false, // HTTPS를 통해서만 쿠키 전송
        httpOnly: false, // JavaScript를 통한 접근 방지
        sameSite: 'strict' // 같은 사이트에서만 쿠키를 전송
    });
}