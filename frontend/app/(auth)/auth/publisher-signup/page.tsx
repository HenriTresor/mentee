'use client'
import api from '@/utils/api'
import { Input } from 'antd'
import { Briefcase, Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { RefObject, useRef, useState } from 'react'
import toast from 'react-hot-toast'

type Props = {}

function PublisherSignup({ }: Props) {

    const [emailStatus, setEmailStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [pwdStatus, setPwdStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [phoneStatus, setPhoneStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [fieldStatus, setFieldStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [nameStatus, setNameStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [loading, setLoading] = useState(false)

    const form: RefObject<HTMLFormElement> = useRef(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            let formData: FormData = new FormData();
            if (form.current) {
                formData = new FormData(form.current);
            } else {
                console.error("Form element not found");
                return
            }

            const email = formData.get('email')
            const password = formData.get('password')
            const phoneNumber = formData.get('phoneNumber')
            const field = formData.get('field')
            const fullName = formData.get('fullName')
            if (!email) {
                toast.error("email is required")
                return setEmailStatus("error")
            } else { setEmailStatus("") }
            if (!password) {
                toast.error("password is required")
                return setPwdStatus("error")
            } else { setPwdStatus("") }
            if (!phoneNumber) {
                toast.error("phone Number is is required")
                return setPhoneStatus("error")
            } else { setPhoneStatus("") }

            if (!field) {
                toast.error("field is required")
                return setFieldStatus("error")
            } else { setFieldStatus("") }

            if (!fullName) {
                toast.error("Full Name is required")
                return setNameStatus("error")
            } else { setNameStatus("") }

            const res = await api.server.POST('/users', { email, password, field, fullName, phoneNumber, accountType: 'publisher' }, '')
            const data = await res.json()
            if (!data.status) return toast.error(data.message)
            toast.success("User added successfully!")
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='w-full flex'>
            <div className='w-[50%] p-10 text-center flex flex-col gap-10'>
                <h1 className="text-[#416644] font-bold text-[1.3rem]">Sign up as a publisher</h1>

                <form action="" className='flex flex-col gap-4' onSubmit={(e) => handleSubmit(e)} ref={form}>
                    <div className='input__container'>
                        <Input name='fullName' status={nameStatus} placeholder='Full Name' />
                        <User />
                    </div>

                    <div className='input__container'>
                        <Input name='email' status={emailStatus} placeholder='Email' />
                        <Mail />
                    </div>

                    <div className='input__container'>
                        <Input.Password
                            className='bg-[#DADADA]'
                            name='password' status={pwdStatus}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div>

                    <div className='input__container'>
                        <Input name='phoneNumber' status={phoneStatus} placeholder='Phone Number' />
                        <Phone />
                    </div>


                    <div className='input__container'>
                        <Input name='field' status={fieldStatus} placeholder='Field' />
                        <Briefcase />
                    </div>


                    <div className=''>
                        <button disabled={loading} className="bg-[#6E956C] disabled:bg-[#7f8c7e]  disabled:cursor-not-allowed p-4 text-white w-full" type='submit'>
                            Sign up
                        </button>
                    </div>
                    <p className='text-left'>Continue with: </p>
                    <div className="flex justify-start gap-3">
                        <button className="border-[#6E956C] border  p-4 text-[#6E956C]"
                            type='button'
                            onClick={() => {
                                window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
                            }}
                        >
                            Google
                        </button>

                    </div>
                    <p className='text-left'>
                        Already have an account? <Link href="/auth/login" className='font-bold'>Login</Link>
                    </p>
                </form>
            </div>
            <div className='w-[50%] flex justify-end items-center h-full'>
                <Image
                    src={'/publisher.svg'}
                    width={100}
                    height={100}
                    alt=''
                    className='w-[40%] fixed top-0 right-0  object-fill h-full'
                />
            </div>
        </div>
    )
}

export default PublisherSignup