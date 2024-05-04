import React from 'react';
import { Button } from '../ui/button';

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
                </div>
            </div>


        </>
    )
}

export default List