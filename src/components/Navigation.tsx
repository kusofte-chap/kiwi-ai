

import React from 'react'
import ArrowDownSvg from '@/src/assets/icon/arrow-down.svg'

const navigation = [
    { name: 'Home', current: false },
    { name: 'Help', current: false },
    { name: 'Tools', current: false },
]

const Triangle = () => {
    return (
        <span className='w-6 h-6 flex items-center justify-center select-none'>
            <ArrowDownSvg />
        </span>
    );
};


function GroupDropdown() {
    return (
        <div className='flex items-center gap-4'>
            {
                navigation.map(item => (
                    <a
                        key={item.name}
                        type='button'
                        className='flex items-center gap-2 decoration-none'
                    >
                        <span className='text-[25px] font-bold tracking-wide text-ai-primary'>{item.name}</span>
                        <Triangle />
                    </a>
                ))
            }
        </div>
    )
}

export default function Navigation() {
    return (
        <div className='flex items-center justify-between px-[86px]'>
            <div className='flex-shrink-0 flex items-center gap-1.5'>
                <img src="/logo.png" alt="logo" className='w-11 h-11 object-center object-cover select-none' />
                <p className='logo-header-text'>
                    Kiwi AI
                </p>
            </div>
            <GroupDropdown />
            <div className='flex-shrink-0 flex items-center gap-12'>
                <button className='text-ai-primary text-[25px] tracking-wide font-bold'>
                    Join us
                </button>
                <button className='w-[178px] h-11 rounded-full bg-ai-primary text-white text-[25px] tracking-wide font-bold'>
                    Sign up
                </button>
            </div>
        </div>
    )
}
