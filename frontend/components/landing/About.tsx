import Image from 'next/image'
import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <div className='w-full flex justify-center gap-11  p-5 items-center flex-col'>
            <div className='w-full flex justify-around p-2 items-center '>
                <h1 className='text-[3rem] font-extrabold text-center text-[#3A6E49]'>
                    Welcome to <br /> Mentee
                </h1>

                <div className='flex flex-col gap-5  font-extralight'>
                    <p>Your companion in every day life’s situations. <br />
                        Never be alone anymore.</p>
                    <p>
                        I am here to hold you company, you can tell me anything! br
                        Everything actually. <br />
                        So let’s start whenever you want!</p>
                </div>
           </div>

            <Image
                src={"/about.svg"}
                width={500}
                height={500}
                alt=''
                className='w-[80%] '
            />
        </div>
    )
}

export default About