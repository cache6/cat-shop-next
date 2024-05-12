import { User } from "@/entities/user";

// 사용자 정보와 그의 장바구니 정보를 함께 반환
export const useUserQuery: () => Promise<User> = async () => {
    const user: User = {
        id: 1,
        name: "홍길동",
        email: "hong@example.com",
        address: "서울시 강남구",
        phone: "010-1234-5678"
    };
    return Promise.resolve(user);
};