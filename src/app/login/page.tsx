"use client"
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import LoginButton from '@/components/molecules/loginButton';

export default function LoginPage() {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (mapLoaded && window.kakao && window.kakao.maps) {
            const container = document.getElementById('map');
            if (!container) {
                console.error('Map container not found');
                return;
            }
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                level: 3
            };
            const map = new window.kakao.maps.Map(container, options);
            console.log('Map object:', map);
        }
    }, [mapLoaded]);

    return (
        <>
            <Script
                src={`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.KAKAO_APP_KEY}`}
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('Kakao Map SDK is loaded');
                    window.kakao.maps.load(() => {
                        setMapLoaded(true);
                    });
                }}
                onError={(e) => console.error('Error loading Kakao Map SDK', e)}
            />
            <div className='flex flex-col items-center justify-center h-screen gap-8'>
                <div className=''>
                    <LoginButton />
                </div>
                <div id="map" className="w-[500px] h-[400px]"></div>
            </div>
        </>
    );
}