import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

function GetStarted({}: Props) {
  return (
      <div className='w-full p-5 flex justify-center mt-16 items-center flex-col gap-28'>
          <Image
              src={"/get_started.svg"}
              width={500}
              height={500}
              alt=''
          />

          <button className='btn-filled flex items-center  p-3 pl-5  rounded-2xl gap-5 '>

              <span className='text-[1.15rem]'>Get Started</span>

              <span className='p-2 bg-[#B6D5B6] pl-5 pr-5 rounded-2xl'>
                  <ArrowRight/>
              </span>
          </button>
    </div>
  )
}

export default GetStarted