import React, { useState } from 'react';
import List from '@/components/todo/list';
import { Button } from '@/components/atoms/button';

const Lists = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // 더미 데이터 생성
    const dummyData = Array.from({ length: 10 }, (_, index) => ({
        image: `/images/cat_3.png`,
        title: `제목${index + 1}`,
        detail: `글${index + 1}`,
        tag: `태그${index + 1}`
    }));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(dummyData.length / itemsPerPage);
    const renderPageNumbers = Array.from({ length: totalPages }, (_, i) => (
        <Button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </Button>
    ));

    return (
        <>
            <div className='flex flex-row flex-wrap gap-8 min-h-[640px]'> {/* Adjust minHeight based on your item height */}
                {currentItems.map((item, index) => (
                    <div key={index} className='flex flex-col w-1/5'>
                        <List image={item.image} title={item.title} detail={item.detail} tag={item.tag} />
                    </div>
                ))}
                {Array.from({ length: 8 - currentItems.length }, (_, i) => (
                    <div key={i} className='flex flex-col w-1/5 invisible'>
                        <List image="" title="" detail="" tag="" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4 gap-4">
                {renderPageNumbers}
            </div>
        </>
    );
}

export default Lists;