'use client'
import React from "react";
import toast from "react-hot-toast";
import api from "@/utils/api";
import { useDispatch } from "react-redux";
import { authenticate } from "@/app/redux/slicers/userSlice";
import { useSearchParams } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()
    const searchParams = useSearchParams()



    React.useEffect(() => {
        if (searchParams?.size !== undefined && searchParams?.size > 0) {
            const token = searchParams.get('token')
            const user = JSON.parse(searchParams.get('user') || '{}')
            dispatch(authenticate({ token: token, user: user }))
        }
    }, [])

    React.useEffect(() => {
        const login = async (token: string) => {
            try {
                const res = await api.server.POST(`/auth/login`, {}, token)
                const data = await res.json()
                if (!data.status) throw new Error(data.message)
                dispatch(authenticate({ token: data.token, user: data.user }))
                toast.success(`auto-authenticated user with email ${data.user.email}`)
            } catch (error: any) {
                toast.error(error.message)
            }
        }

        const token = localStorage.getItem('token')
        if (token != undefined) {
            login(token)
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default AuthProvider;