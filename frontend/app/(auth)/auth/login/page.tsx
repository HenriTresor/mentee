'use client'
import { Input } from 'antd'
import { Briefcase, Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Login({ }: Props) {
    return (
        <div className='w-full flex'>
            <div className='w-[50%] p-10 text-center flex flex-col gap-10'>
                <h1 className="text-[#416644] font-bold text-[1.3rem]">Log In</h1>

                <form action="" className='flex flex-col gap-4 h-[80dvh] justify-center'>

                    <div className='input__container'>
                        <Input placeholder='Email' />
                        <Mail />
                    </div>

                    <div className='input__container'>
                        <Input.Password
                            className='bg-[#DADADA]'
                            placeholder="Password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div>

                    <div className=''>
                        <button className="bg-[#6E956C]  p-4 text-white w-full">
                            Log in
                        </button>
                    </div>
                    <p className='text-left'>Continue with: </p>
                    <div className="flex justify-start gap-3">
                        <button className="border-[#6E956C] border  p-4 text-[#6E956C]">
                            Google
                        </button>
                        <button className="border-[#6E956C] border  p-4 text-[#6E956C]">
                            Apple
                        </button>
                    </div>
                    <p className='text-left'>
                        Don't have an account yet? <Link href="/auth/get-started" className='font-bold'>Create One!</Link>
                    </p>
                </form>
            </div>
            <div className='w-[50%] flex justify-end items-center h-full'>
                <Image
                    src={'/user.svg'}
                    width={100}
                    height={100}
                    alt=''
                    className='w-[40%] fixed top-0 right-0  object-fill h-full'
                />
            </div>
        </div>
    )
}

export default Login