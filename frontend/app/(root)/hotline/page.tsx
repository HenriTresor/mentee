'use client'

import Categories from '@/components/Categories'
import { List, Select } from 'antd'
import { Check, MessageSquare, Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

function HotLine({ }: Props) {

    const [selectedCat, setSelectedCat] = useState('')
    return (
        <div className='w-full p-5 flex flex-col items-center justify-center gap-10'>
            <div className='bg-[#3A6E49] text-white w-[85%] p-5 rounded-xl flex flex-col items-center gap-5 pt-10 pb-10 mb-5 mt-5'>
                <h1 className='text-[2rem] font-extrabold'>Reach A Hotline</h1>
                <p className='font-semibold'>Do You have An Immediate Emmergency? <span className='font-extrabold'> Call us now!</span></p>
                <div className='flex items-center gap-4 font-extrabold cursor-pointer'>
                    <Phone />
                    <p>Click to call 112</p>
                </div>
            </div>

            <div className='text-center text-[#3A6E49] text-[1.5rem]'>
                <p>Make a search</p>
                <h1 className='font-bold text-[2rem]'>Find hotlines near you.</h1>
            </div>

            <Select
                className='w-[70%]'
                options={[{ value: 'Rwanda' }]}
                placeholder={'Select your country'}
            />

            <Categories onCategoryChange={() => { }} categories={[
                'Emergency', 'Traffic Accidents', 'Abuse by Police', 'Sexual Harassment', 'Anti-corruption'
            ]} />


            <div className='w-full p-4 '>

                <div className='w-auto max-w-[50%] border overflow-hidden pb-5'>
                    <span className="bg-black text-white p-2 font-bold rounded-br-2xl">
                        1
                    </span>
                    <div className='p-2 flex  justify-evenly items-center '>
                        <div>
                            <Image
                                src={'/rnp.svg'}
                                width={100}
                                height={100}
                                alt=''
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className='flex items-center gap-4'>
                                <MessageSquare />
                                <h1>Anti-corruption and security concerns report</h1>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <Check />
                                    <p>Always open 24/7</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Check />
                                    <p>Phone call & live chat.</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Check />
                                    <p>Following up personal cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HotLine