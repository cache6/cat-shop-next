import React from 'react';

interface ListProps {
    image: string
    title: string
    description: string
    tag: string
}

const List = ({ image, title, description, tag }: ListProps) => {
    return (
        <>
            <div className='flex w-1/4 flex-col gap-2'>
                <img src={image} />
                <div className="flex flex-col gap-2 p-2">
                    <div className='text-lg font-bold'>{title}</div>
                    <div>{description}</div>
                    <div className="flex flex-row gap-4 justify-between">
                        <div className="justify-start">
                            {tag}
                        </div>
                        <div className="justify-end">
                            <p>선택</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default List