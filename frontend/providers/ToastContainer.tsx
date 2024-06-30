import React from "react";
import { Toaster } from "react-hot-toast";

const ToastContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
}

export default ToastContainer;