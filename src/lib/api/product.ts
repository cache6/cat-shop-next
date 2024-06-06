import { useQuery } from 'react-query'
import apiClient from '../axios'

const fetchProducts = async () => {
    const { data } = await apiClient.get('/api/product')
    console.log(data)
    if (!Array.isArray(data)) {
        throw new Error('API response is not an array')
    }
    return data
}

const mergeData = (apiData: any[], dummyData: any[]) => {
    console.log("apiData:", apiData)
    console.log("dummyData:", dummyData)
    return apiData.map(apiItem => {
        const dummyItem = dummyData.find(d => d.id === apiItem.id)
        return dummyItem ? { ...apiItem, ...dummyItem } : apiItem
    })
}

export const useProducts = () => {
    return useQuery('products', async () => {
        const apiData = await fetchProducts()

        // 더미 데이터 생성
        const dummyData = [
            { id: 1, name: "제품 1", externalNote: '상세 설명1', tag: '태그1', price: 100, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 1, name: "Category 1", categoryImageUrl: "/images/cat_category.png" } },
            { id: 2, name: "제품 2", externalNote: '상세 설명2', tag: '태그2', price: 150, productImageUrl: '/images/cat_3.png', isRecommended: true, category: { id: 2, name: "Category 2", categoryImageUrl: "/images/cat_category.png" } },
        ]

        // API 데이터와 더미 데이터 병합
        return mergeData(apiData, dummyData)
    })
}