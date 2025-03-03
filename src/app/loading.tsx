import React from 'react'
import LoadingSvg from "@/src/assets/icon/loading.svg"

export default function Loading() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='animate-spin overflow-hidden'>
                <LoadingSvg />
            </div>
        </div>
    )
}
