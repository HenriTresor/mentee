'use client'
import { RootState } from '@/app/redux/store'
import { headerItems } from '@/constants/const'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

function LandingHeader({ }: Props) {

    const { authenticated, user } = useSelector((state: RootState) => state.user)

    return (
        <div className='w-full p-2 pl-6 pr-6 bg-[#6E956C] flex justify-between items-center sticky top-0 z-50'>
            <Image
                src={"/logo.svg"}
                width={70}
                height={70}
                alt=''
            />

            <div className='flex items-center gap-11 text-[#d5d5d5]'>
                {
                    headerItems.map(item => (
                        <Link key={item.name} href={item.link}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>

           {
            authenticated ? (
                <div>{user.fullName}</div>
            ): 
            (
                 <Link href={"/auth/get-started"}>
                <button className='btn btn-outlined'>
                    get started
                </button>
            </Link>
            )
           }
        </div>
    )
}

export default LandingHeader