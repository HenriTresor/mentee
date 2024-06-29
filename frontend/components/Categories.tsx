'use client'
import React, { useState } from 'react'

type Props = {
    categories: string[],
    onCategoryChange: (vl: string) => void
}

function Categories({ categories, onCategoryChange }: Props) {

    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    return (
        <div className='flex flex-col gap-5 items-center mb-5 '>
            <h1 className='text-[#6E956C] text-[1.2rem] font-bold'>Categories</h1>
            <div className='flex items-center gap-10'>
                {
                    categories.map(item => (
                        <div onClick={() => {
                            setSelectedCategory(item.toString())
                            onCategoryChange(item)
                        }} key={item} className={`p-3 rounded-md ${selectedCategory === item ? 'bg-[#3A6E49] text-white' : 'bg-[#DDDDDD]'} text-[#808080] cursor-pointer`}>{item}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories