import { Poppins } from 'next/font/google';
import React from 'react'
import '../globals.css'

type Props = {
    children: React.ReactNode
}
const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: "500"
});


function AuthLayout({ children }: Props) {
    return (
        <html lang='en'>
            <body className={poppins.className + ' m-0 p-0'}>
                {children}
            </body>
        </html>
    )
}

export default AuthLayout