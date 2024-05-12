import { NextRequest, NextResponse } from 'next/server';
import Cors from 'cors';

// CORS 미들웨어 설정
const cors = Cors({
    methods: ['GET', 'POST', 'OPTIONS'], // 허용할 HTTP 메소드
    origin: '*', // 모든 도메인에서의 요청을 허용
});

// 미들웨어를 실행하는 함수
function runMiddleware(req: NextRequest, res: NextResponse, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req: NextRequest) {
    const res = new NextResponse();
    // CORS 미들웨어 실행
    await runMiddleware(req, res, cors);

    // 요청 처리 로직
    return new NextResponse(JSON.stringify({ message: 'Hello from Next.js!' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}