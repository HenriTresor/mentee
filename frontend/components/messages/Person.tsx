import React from 'react'
import Image from 'next/image'

type Props = {}

function Person({}: Props) {
  return (
     <div className="flex gap-5 items-center">
                    <Image 
                    
                    src={"/logo.svg"}
                    width={60}
                    height={60}
                    alt=""
                    className="rounded-full bg-[#5c5c5c]"
                    />

                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className={`text-[18px] font-bold`}>Amanda Nkusi </h1>
                        <div className={`w-[7px] h-[7px] bg-green-500 rounded-full`}></div>
                        </div>

                        <p className={`text-[#5c5c5c] text-[12px]`}>Active</p>
                    </div>
                </div>
  )
}

export default Person