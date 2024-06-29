import React from 'react'
import Image from 'next/image'
import {Phone, Video, Ellipsis, Search, Paperclip, Smile, Mic, Send} from 'lucide-react'
import Person from '@/components/messages/Person'
type Props = {}

function page({}: Props) {
  return (
    <div className={`bg-[#6E956C] p-5 h-[90dvh] w-full flex items-start justify-normal gap-5`}>
        <div className=" p-3 w-[30%] h-full flex flex-col gap-5">
            <div className={'w-full bg-white flex items-center gap-2 pl-2 rounded-2xl tex-[#5c5c5c]'}>
                <Search className={"text-[#5c5c5c]"}  />
                <input className="bg-none p-3 flex-grow rounded-full" placeholder="Search ..." />
            </div>

             <div className={'w-full p-5  bg-white flex items-center gap-5  rounded-2xl  cursor-pointer mt-5'}>
                <Image
                src={"/ai.svg"}
                width={30}
                height={30}
                alt=""
/>
              <h1 className="text-[1.2rem] font-bold">AI Chat</h1>
            </div>

            <div className="h-full w-full overflow-auto flex flex-col gap-4">
                <div className="bg-white w-full h-auto p-4 rounded-xl">
                    <h1 className={'text-[16px] text-[#5c5c5c]'}>Therapist Chat</h1>
                    <div className="h-full overflow-auto flex flex-col gap-5 p-2 mt-4">
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div>
                </div>
                <div className="bg-white w-full h-auto p-4 rounded-xl">
                     <h1 className={'text-[16px] text-[#5c5c5c]'}>Person-to-Person Chat</h1>
                     <div className="h-full overflow-auto flex flex-col gap-5 p-2 mt-4">
                         <Person />
                        <Person />
                        <Person />
                        <Person />
                        <Person />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-grow p-3 bg-white rounded-2xl h-full flex flex-col w-[25%]"> 
             <div className="w-full border-b flex items-center justify-between p-2">
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

                <div className="flex items-center gap-4">
                    <Phone className="text-[#5c5c5c]" />
                    <Video className="text-[#5c5c5c]"/>
                    <Ellipsis className="text-[#5c5c5c]"/>
                </div>
             </div>

             <div className="flex-grow w-full h-full overflow-auto p-4">

                    {/* sender */}
                <div className="sender">
                    <p className="text-[12px] text-[#5c5c5c]">9:10 pm</p>
                    <div>
                        <p>Hello, how are you doing?</p>
                    </div>
                </div>

                 <div className="sender">
                    <p className="text-[12px] text-[#5c5c5c]">9:10 pm</p>
                    <div>
                        <p>How did your therapy session go?</p>
                    </div>
                </div>


                {/* receiver */}
                <div className="receiver">
                    <p className={'text-[#5c5c5c] text-[12px]'}>6:18 pm</p>
                    <div>
                        <p>It was too relieving am so glad!</p>
                    </div>
                </div>

                 <div className="receiver">
                    <p className={'text-[#5c5c5c] text-[12px]'}>6:18 pm</p>
                    <div>
                        <p>I will give you the details when we meet tomorrow !</p>
                    </div>
                </div>
             </div>

             <div className="w-full p-5">
                <div className="w-full flex items-center border-2 border-[#6E956C] rounded-2xl gap-4 pl-5">
                    <Paperclip className="text-[#5c5c5c]" />
                    <input  placeholder="Type your message here ..." className="flex-grow p-4" />
                    <Smile className="text-[#5c5c5c]" />
                    <Mic className="text-[#5c5c5c]" />
                   <button className="bg-[#6E956C] p-4 h-full rounded-r-2xl border-none text-white">
                     <Send />
                   </button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default page