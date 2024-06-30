import Link from 'next/link'
import React from 'react'

type Props = {}

function GetStarted({ }: Props) {
    return (
        <div className='w-full h-[100dvh] flex p-10 gap-5 items-start mt-10 justify-center text-center'>
            <div className='w-[50%] bg-[#EBEBEB] p-5 flex flex-col gap-5 pt-10 pb-10 rounded-2xl'>
                <h1 className="text-[#416644] font-bold text-[1.3rem]">Sign up as a publisher</h1>
                <p>Are you a therapist or a mental advisor? <br />
                    Then join Mentee as a writer. <br />
                    Post articles about mental health and inform people about various information they do not know about mental health.
                </p>
                <Link href="/auth/publisher-signup">
                    <button className='bg-[#416644]  p-4 text-white'>Sign up</button>
                </Link>

                <p>
                    Already have an account? <Link href="/auth/login" className='font-bold'>Login</Link>
                </p>
            </div>
            <div className='flex flex-col gap-5 w-[50%]'>
                <h1 className='text-[#416644] text-[4rem]'>Welcome To Mentee</h1>
                <div className="bg-[#416644] w-full p-5 text-white flex flex-col gap-5 pt-10 pb-10 rounded-2xl">
                    <h1 className='font-bold text-[1.3rem]'>Sign up as a user</h1>
                    <p>
                        Are you a therapist or a mental advisor? <br />
                        Then join Mentee as a writer. <br />
                        Post articles about mental health and inform people about various information they do not know about mental health.
                    </p>

                    <Link href="/auth/user-signup">
                        <button className='bg-[#416644]  p-4 border'>Sign up</button>
                    </Link>

                    <p>     Already have an account? <Link href="/auth/login" className='font-bold'>Login</Link></p>

                </div>
            </div>
        </div>
    )
}

export default GetStarted