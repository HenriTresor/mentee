import Image from 'next/image'
import React from 'react'

type Props = {}

function Testimonials({}: Props) {
  return (
      <div className='w-full p-5 flex justify-center  mt-10 mb-10 '>
          {/* <h1 className='text-[2rem] text-[#3A6E49] text-center font-extrabold'>What people say about us</h1>
          <p className='text-center text-[#5c5c5c] mt-5'>People say lot’s of things about us. You can see for yourself here below.
              And maybe one day you too you will talk about me! I hope so.</p> */}
      <Image
        src={"/testimonials.svg"}
        width={100}
        height={100}
        alt=""
        className='w-[80%]'
      />
    </div>
  )
}

export default Testimonials