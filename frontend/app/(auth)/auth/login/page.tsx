'use client'
import { authenticate } from '@/app/redux/slicers/userSlice'
import { RootState } from '@/app/redux/store'
import api from '@/utils/api'
import { Input } from 'antd'
import { Briefcase, Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

type Props = {}

function Login({ }: Props) {
    const [emailStatus, setEmailStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [pwdStatus, setPwdStatus] = useState<"" | "warning" | "error" | undefined>("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { authenticated, user } = useSelector((state: RootState) => state.user)
    const searchParams = useSearchParams()

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
            if (!email) {
                toast.error("email is required")
                return setEmailStatus("error")
            } else { setEmailStatus("") }
            if (!password) {
                toast.error("Password is required")
                return setPwdStatus("error")
            } else { setPwdStatus("") }


            const res = await api.server.POST('/auth/login', { email, password }, '')
            const data = await res.json()
            if (!data.status) return toast.error(data.message)
            dispatch(authenticate({ token: data.token, user: data.user }))
            toast.success(`authenticated user ${data.user?.email}`)
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (searchParams?.size !== undefined && searchParams?.size > 0) {
            const token = searchParams.get('token')
            const user = JSON.parse(searchParams.get('user') || '{}')
            dispatch(authenticate({ token: token, user: user }))
        }
    }, [])

    useEffect(() => {
        if (authenticated) {
            toast.success(`authenticated user ${user?.email}`)
        }
    }, [authenticated])
    return (
        <div className='w-full flex'>
            <div className='w-[50%] p-10 text-center flex flex-col gap-10'>
                <h1 className="text-[#416644] font-bold text-[1.3rem]">Log In</h1>

                <form action="" className='flex flex-col gap-4 h-[80dvh] justify-center' ref={form} onSubmit={(e) => handleSubmit(e)}>

                    <div className='input__container'>
                        <Input status={emailStatus} name="email" placeholder='Email' />
                        <Mail />
                    </div>

                    <div className='input__container'>
                        <Input.Password
                            name='password'
                            status={pwdStatus}
                            className='bg-[#DADADA]'
                            placeholder="Password"
                            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
                        />

                    </div>

                    <div className=''>
                        <button disabled={loading} className="bg-[#6E956C] disabled:bg-[#6a7969] disabled:cursor-not-allowed  p-4 text-white w-full" type='submit'>
                            Log in
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
                        Don&apos;t have an account yet? <Link href="/auth/get-started" className='font-bold'>Create One!</Link>
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