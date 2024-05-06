import React from 'react';
import { Button } from '../atoms/button';

interface ListProps {
    image: string
    title: string
    detail: string
    tag: string
}

const List = ({ image, title, detail, tag }: ListProps) => {
    return (
        <>
            <div>
                <img src={image} />
            </div>
            <div className='text-lg font-bold'>{title}</div>
            <div>{detail}</div>
            <div className="flex flex-row gap-4">
                <div className="justify-start flex-1">
                    {tag}
                </div>
                <div className="flex justify-end flex-1">
                    <Button>
                        장바구니 담기
                    </Button>
                </div>
            </div>

        </>
    )
}

export default List