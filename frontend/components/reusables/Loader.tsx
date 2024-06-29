import React from 'react'

type Props = {}

function Loader({ }: Props) {
    return (
        <div className='w-full grid place-content-center p-5'>
            <div className="w-[100px] h-[100px] border-t-2 border-t-[#6E956C] rounded-full animate-spin"></div>
        </div>
    )
}

export default Loader