import { headerItems } from '@/constants/const'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}
 
function LandingFooter({ }: Props) {
    return (
        <div className='w-full p-5 bg-[#6E956C] flex flex-col text-white gap-5'>
            <div className='p-4 flex justify-around'>
                <h1 className='text-[2.rem] font-extrabold'>Mentee</h1>

                <div className='flex items-center gap-11 '>
                    {
                        [...headerItems, {name:"Contact Us", link:""}, {name:"Services", link:''}].map(item => (
                            <Link key={item.name} href={item.link}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <hr className='w-full bg-white' />

            <div className='w-full p-5 flex justify-evenly'>
                <h1 className=' capitalize'>&copy; 2024 Mentee. All Rights reserved</h1>
                <div className='flex items-center gap-11 '>
                    {
                        [{ name: "Terms of Service", link: "" }, { name: "Privacy policy", link: '' }].map(item => (
                            <Link key={item.name} href={item.link}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingFooter