'use client'
import { paymentMethods } from '@/constants/const'
import { Input } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

function FundMe({ }: Props) {
    const [selectedMethod, setSelectedMethod] = useState<'visa' | 'paypal' | 'bitcoin'>("visa")
    return (
        <div className='w-full p-5 mb-10'>
         <div className='w-full p-5 mt-5 mb-5 ml-5'>
                <h1 className='text-[#6E956C] text-[2rem] font-bold'>PAYMENT METHOD</h1>
         </div>

            <div className='w-full flex items-center justify-center gap-10'>
                <div className='flex flex-col justify-between items-center'>

                    {
                        paymentMethods.map((method) => {
                            return (
                                <div className={`${selectedMethod === method.name.toLowerCase() ? 'bg-[#6E956C]' : 'bg-white'} p-10 cursor-pointer rounded-lg`}
                                    onClick={() => setSelectedMethod(method.name.toLowerCase() as 'visa' | 'paypal' | 'bitcoin')}
                                    key={method.name}>
                                    <Image
                                        className={`${method.name === 'Visa' && 'bg-[#6E956C]'}`}
                                        src={method.image}
                                        alt={method.name}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/2 text-[white]'>
                    {
                        selectedMethod === 'visa' ? (
                            <div className='flex flex-col gap-4'>

                                <div className='bg-[#6E956C] p-5 h-full rounded-xl '>
                                    <div className='p-3 flex flex-col gap-3'>
                                        <label htmlFor="card-number" >Card Number</label>
                                        <Input className='p-2' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className='w-full p-3 flex flex-col gap-3'>
                                            <label htmlFor="code" >Security Code</label>
                                            <Input className='p-2' />
                                        </div>
                                        <div className='w-full p-3 flex flex-col gap-3'>
                                            <label htmlFor="expiry-date" >Expiry Date</label>
                                            <Input className='p-2' />
                                        </div>
                                    </div>
                                    <div className='p-3 flex flex-col gap-3'>
                                        <label htmlFor="name" >Name On Card</label>
                                        <Input className='p-2' />
                                    </div>
                                </div>
                                <button className='bg-[#6E956C] w-full p-4 rounded-xl'>
                                    Continue Payment
                                </button>
                            </div>
                        ) : selectedMethod === 'paypal' ? (
                            <>
                                <div className='flex flex-col gap-4 p-5'>

                                    <div className='bg-[#6E956C] p-5 h-full rounded-xl flex flex-col items-center text-center gap-5'>
                                        <Image
                                            src={'/paypal.svg'}
                                            width={150}
                                            height={150}
                                            alt='paypal'
                                        />

                                        <p>
                                            We are redirecting you to continue your purchase with PayPal
                                            Please click the button below to proceed with your payment.
                                        </p>
                                    </div>


                                    <button className='bg-[#6E956C] w-full p-4 rounded-xl'>
                                        Continue To Paypal
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex flex-col gap-4 p-5'>

                                    <div className='bg-[#6E956C] p-5 h-full rounded-xl flex flex-col items-center text-center gap-5'>
                                        <div className='flex items-center gap-4'>
                                            <Image
                                                src={'/bitcoin.svg'}
                                                width={50}
                                                height={50}
                                                alt='bitcoin'
                                            />

                                            <h1>Bitcoin</h1>
                                        </div>
                                        <p>
                                            We are redirecting you to continue your purchase with Bitcoin
                                            Please click the button below to proceed with your payment.
                                        </p>
                                    </div>


                                    <button className='bg-[#6E956C] w-full p-4 rounded-xl'>
                                        Proceed Payment
                                    </button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FundMe