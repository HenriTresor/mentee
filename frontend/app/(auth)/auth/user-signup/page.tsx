'use client'
import { Input } from 'antd'
import { Briefcase, Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function UserSignup({ }: Props) {
    return (
        <div className='w-full flex'>
            <div className='w-[50%] p-10 text-center flex flex-col gap-10'>
                <h1 className="text-[#416644] font-bold text-[1.3rem]">Sign up as a user</h1>

                <form action="" className='flex flex-col gap-4'>
                    <div className='input__container'>
                        <Input placeholder='Full Name' />
                        <User />
                    </div>

                    <div className='input__container'>
                        <Input placeholder='Email' />
                        <Mail />
                    </div>

                    <div className='input__container'>
                        <Input.Password
                            className='bg-[#DADADA]'
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div> <div className='input__container'>
                        <Input.Password
                            className='bg-[#DADADA]'
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div>


                    <div className=''>
                        <button className="bg-[#6E956C]  p-4 text-white w-full">
                            Sign up
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
                        Already have an account? <Link href="/auth/login" className='font-bold'>Login</Link>
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

export default UserSignup