'use client'
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import store from "@/app/redux/store";
import { Provider } from "react-redux";
import api from "@/utils/api";
import AuthProvider from "./AuthProvider";

const ToastContainer = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = React.useState('')

    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setToken(token)
        }
    }, [])

    React.useEffect(() => {
        const login = async () => {
            try {
                const res = await api.server.POST(`/auth/login`, {}, token)
                const data = await res.json()
                if (!data.status) throw new Error(data.message)
                toast.success(`auto-authenticated user with email ${data.user.email}`)
            } catch (error: any) {
                toast.error(error.message)
            }
        }

        if (token !== '') {
            login()
        }
    }, [token])
    return (
        <Provider store={store}>
            <AuthProvider>
                {children}
                <Toaster position="top-right" reverseOrder={false} />
            </AuthProvider>
        </Provider>
    )
}

export default ToastContainer;