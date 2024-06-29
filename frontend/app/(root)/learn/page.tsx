'use client'
import Categories from '@/components/Categories'
import Loader from '@/components/reusables/Loader'
import { ArrowDownCircle, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}

const categories = [
    'depression', 'Suicide thoughts', 'drug abuse', 'sexual harassment', 'stigma', 'low self-esteem'
]

function Page({ }: Props) {
    const [resources, setResources] = useState<{ title: string, description: string }[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getResources = async (category: string) => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:8080/api/v1/resources/${category}`)
            const data = await res.json()

            if (!data.status) throw new Error(data.message)
            setResources(data?.resources);
        } catch (error: any) {
            console.log('error fetching resources: ', error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getResources(categories[0])
    }, [])
    return (
        <div className='w-full h-auto flex flex-col items-center'>
            <div className='w-full h-auto bg-[#6E956C] p-10 flex items-start justify-evenly'>
                <div className='text-white w-1/2 flex flex-col gap-11 justify-evenly items-center'>
                    <h1 className='text-[4rem] font-extrabold uppercase'>
                        INFORM YOURSELF ON
                        MENTAL HEALTH
                    </h1>
                    <p>
                        Get knowledge-based resources and brief topics about various mental health faced by people.
                    </p>

                    <button className='flex items-center gap-2 p-2 w-auto place-self-center capitalize'>
                        <ArrowDownCircle />

                        Scroll down for more
                    </button>
                </div>


                <div className='w-1/2 '>
                    <Image
                        src={"/learn_hero.svg"}
                        width={150}
                        height={150}
                        alt=''
                        className='w-[60%] float-end'
                    />
                </div>
            </div>

            <div className=' shadow-md rounded-2xl gap-5 mb-10 flex mt-10 p-5 items-center w-1/2'>
                <SearchIcon />
                <input placeholder='Search any topic ...' onChange={(vl) => getResources(vl.target.value.toLowerCase())} />
            </div>

            <Categories onCategoryChange={(vl) => getResources(vl.toLowerCase())} categories={categories} />

            <div className='w-full flex flex-col '>
                {
                    loading ? (
                        <div className=''>
                            <Loader />
                        </div>
                    ) : !resources.length ? (
                        <div className='w-full p-5 grid place-content-center'>No Resources for Selected Category Found</div>
                    ) : resources?.map((resource: { title: string, description: string }, index) => {
                        return (
                            <>
                                <div className='bg-[#6E956C] p-4 flex justify-evenly pt-16 pb-16'>
                                    <div className='bg-white p-5 text-[#6E956C] w-[20%] text-center flex flex-col gap-5'>
                                        <h1>{resource.title}</h1>
                                        <hr className='bg-[#6E956C] h-1' />
                                        <p>
                                            {resource.description}
                                        </p>
                                    </div>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <Image
                                            src={"https://www.figma.com/file/OtiU0tN161I7quAizgbrdu/image/30cc885ec4228a659c9ab1889c0c377e1d307a4d"}
                                            width={150}
                                            height={150}
                                            alt=''
                                        /> <Image
                                            src={"https://s3-alpha-sig.figma.com/img/148c/afd7/4f3f168b0ee4cb677b74ef60c4822b20?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eUk0pfRjqJae3ufaQux2HhzVXFvoGWW4KKiLrv5xNPmUO2x-mPEUlbgBq6yLP2Labk7c76t4z5oRMQc6NpSDBaS8QCHdkrIAH1qMa3fMiGlxabq2ZiWySwXvjFJP6WFtkFvJ4Af1bM8a~W8PtRhZGRwiAEHT95eY5SXV7asxgYum6OCMRGWaZt9c40jTE-irbaUYqAVEl9~nOwXYJlyJJGjLa7YcYg8UdO6OADlbDsZs~7R2myCj4FM4mEHKWBpvIDr~T8kfffi8SehjWBNH604ma9IMH2SEWnsiXFX~W6XDbXwGN7MHqp~jhs7fdwK3E~Ud07RCQZov-z1uTKyjGA__"}
                                            width={150}
                                            height={150}
                                            alt=''
                                        /> <Image
                                            src={"https://www.figma.com/file/OtiU0tN161I7quAizgbrdu/image/57f63960113d974fc4ba7a048edda3eef58cbfb2"}
                                            width={150}
                                            height={150}
                                            alt=''
                                        /> <Image
                                            src={"/cigarettes.svg"}
                                            width={150}
                                            height={150}
                                            alt=''
                                        />
                                    </div>
                                    <div
                                        className='bg-white p-5 text-[#6E956C] w-[20%] text-center flex flex-col gap-5'
                                    >

                                        <h1>{resources[index + 1]?.title}</h1>
                                        <hr className='bg-[#6E956C] h-1' />
                                        <p>
                                            {resources[index + 1]?.description}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Page