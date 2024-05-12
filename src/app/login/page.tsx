"use client"
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import LoginButton from '@/components/molecules/loginButton';

export default function LoginPage() {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_APP_KEY}&autoload=false`
        document.head.appendChild(kakaoMapScript)

        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                var container = document.getElementById('map')
                var options = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 3,
                }

                var map = new window.kakao.maps.Map(container, options)
            })
        }

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
    }, [])

    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen gap-8'>
                <div className=''>
                    <LoginButton />
                </div>
                <div id="map" className="w-[500px] h-[400px]"></div>
            </div>
        </>
    );
}