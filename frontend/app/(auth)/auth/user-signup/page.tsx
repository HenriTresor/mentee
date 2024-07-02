'use client'
import api from '@/utils/api'
import { Input } from 'antd'
import { Briefcase, Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { RefObject, useRef, useState } from 'react'
import toast from 'react-hot-toast'

type Props = {}

function UserSignup({ }: Props) {

    const [emailStatus, setEmailStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [pwdStatus, setPwdStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [nameStatus, setNameStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [loading, setLoading] = useState(false)
    const [pwdConfirm, setPwdConfirm] = useState("")

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
            const fullName = formData.get('fullName')
            if (!email) {
                toast.error("email is required")
                return setEmailStatus("error")
            } else { setEmailStatus("") }
            if (!password) {
                toast.error("password is required")
                return setPwdStatus("error")
            } else { setPwdStatus("") }

            if (!fullName) {
                toast.error("Full Name is required")
                return setNameStatus("error")
            } else { setNameStatus("") }


            if (password !== pwdConfirm) {

                return toast.error("Passwords mismatch. Confirm password Again")
            }

            const res = await api.server.POST('/users', { email, password, fullName, accountType:'user' }, '')
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
                <h1 className="text-[#416644] font-bold text-[1.3rem]">Sign up as a user</h1>

                <form action="" className='flex flex-col gap-4' ref={form} onSubmit={(e) => handleSubmit(e)}>
                    <div className='input__container'>
                        <Input name="fullName" status={nameStatus} placeholder='Full Name' />
                        <User />
                    </div>

                    <div className='input__container'>
                        <Input name="email" status={emailStatus} placeholder='Email' />
                        <Mail />
                    </div>

                    <div className='input__container'>
                        <Input.Password
                            className='bg-[#DADADA]'
                            name="password" status={pwdStatus}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div> <div className='input__container'>
                        <Input.Password
                            className='bg-[#DADADA]'
                            value={pwdConfirm}
                            onChange={(vl) => setPwdConfirm(vl.target.value)}
                            placeholder="Confirm password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div>


                    <div className=''>
                        <button className="bg-[#6E956C] disabled:bg-[#546053] disabled:cursor-not-allowed p-4 text-white w-full" disabled={loading}>
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