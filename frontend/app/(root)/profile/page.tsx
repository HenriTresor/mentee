import Image from 'next/image'
import React from 'react'
import { Tabs } from "antd";
import YourGoalsTab from '@/components/profile/YourGoalsTab';
import YourSettingsTab from '@/components/profile/YourSettingsTab';
import YourHistoryTab from '@/components/profile/YourHistoryTab';

type Props = {}

const tabs = [
    {component: <YourGoalsTab/>, name:"Your Goals"},
    {component: <YourHistoryTab/>, name:"Your History"},
    {component: <YourSettingsTab/>, name:"Your Settings"},
]

function page({ }: Props) {
    return (
        <div className='w-full'>
            <div className='w-full p-5 flex items-center justify-evenly'>
                <div className='flex flex-col gap-4 w-1/2'>
                    <div className='flex flex-col gap-3'>
                        <span className='text-[#AAAAAA] text-[0.8rem]'>Names</span>
                        <h1 className='text-[#6E956C] text-[3rem] font-extrabold '>NIYO Anais</h1>
                    </div>

                    <div className='flex p-2 gap-10'>
                        <div className='flex flex-col gap-3'>
                            <span className='text-[#AAAAAA] text-[0.8rem]'>Gender</span>
                            <h1 className='text-[#6E956C] text-[1rem] font-extrabold '>Female</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='text-[#AAAAAA] text-[0.8rem]'>Age</span>
                            <h1 className='text-[#6E956C] text-[1rem] font-extrabold '>5/2/2000</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='text-[#AAAAAA] text-[0.8rem]'>Location</span>
                            <h1 className='text-[#6E956C] text-[1rem] font-extrabold '>KG 194st</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='text-[#AAAAAA] text-[0.8rem]'>Personal Motto</span>
                        <h1 className='text-[#6E956C] text-[0.8rem] break-before-all font-extrabold '>Life has many ups and downs but the most important is how I react in them.</h1>
                    </div>
                </div>
                <div className='bg-black rounded-full'>
                    <Image
                        src={"/logo.svg"}
                        width={200}
                        height={200}
                        alt=''
                        className='rounded-full bg-black'
                    />
                </div>  
            </div>

            <div>
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={tabs.map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `${_.name}`,
                            key: id,
                            children: <>{ _.component}</>,
                        };
                    })}
                />
            </div>
        </div>
    )
}

export default page