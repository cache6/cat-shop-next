import React from 'react';
import List from '@/components/features/list';



const Lists = () => {
    const Lists = [
        {
            image: "/images/cat_1.jpg",
            title: "제목1",
            description: "글",
            tag: "태그1",
        },
        {
            image: "/images/cat_1.jpg",
            title: "제목2",
            description: "글2",
            tag: "태그2",
        },
        {
            image: "/images/cat_1.jpg",
            title: "제목3",
            description: "글3",
            tag: "태그3",
        },
        {
            image: "/images/cat_1.jpg",
            title: "제목4",
            description: "글4",
            tag: "태그4",
        }
    ]
    return (
        <>
            {Lists.map((lists, index) => (
                <List key={index} image={lists.image} title={lists.title} description={lists.description} tag={lists.tag} />
            ))}
        </>
    )
}

export default Lists