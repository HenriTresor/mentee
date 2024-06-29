'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import ReactCurvedText from 'react-curved-text';

type Props = {}

function Hero({ }: Props) {
  return (
    <div className='h-auto  w-full bg-[#6E956C] text-white flex justify-center flex-col items-center p-5 '>
      <h1 className='text-[3rem] uppercase font-extrabold'>care for your mental health</h1>

      <div className='mt-10 bg-[rgb(0,0,0,0.3)] p-5 pl-10 pr-10 flex flex-col items-center gap-4'>

        <p className=''>Get Started With Us</p>
        <div className="flex items-center gap-4">
          <button className='bg-[#6E956C] p-4'>Be a publisher</button>
          <Link href="/learn">
          <button className='bg-[#6E956C]  p-4'>Get Help</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero