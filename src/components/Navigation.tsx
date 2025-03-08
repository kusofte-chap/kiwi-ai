

import React from 'react'
import ArrowDownSvg from '@/src/assets/icon/arrow-down.svg'
import { Button } from './ui/button';
import HeaderNavigation from './Header';

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
                    <Button
                        key={item.name}
                        variant='link'
                        className='text-xl font-medium tracking-wide text-ai-secondary capitalize hover:text-ai-primary'
                    >
                        {/* <span className='text-[25px] font-bold tracking-wide text-ai-primary'>{item.name}</span> */}
                        {item.name}
                    </Button>
                ))
            }
        </div>
    )
}

export default function Navigation() {
    return (
        <div className='flex items-center justify-between px-9 h-20'>
            <div className='flex-shrink-0 flex items-center gap-1.5'>
                <img src="/logo.png" alt="logo" className='w-11 h-11 object-center object-cover select-none' />
                <p className='logo-header-text'>
                    Kiwi AI
                </p>
            </div>
            <HeaderNavigation />
            <div className='flex-shrink-0 flex items-center gap-2'>
                <Button
                    variant="ghost"
                    className='text-ai-secondary text-xl tracking-wide font-normal hover:text-ai-secondary'
                >
                    Join us
                </Button>
                <Button
                    className='w-28 h-9 bg-ai-primary text-white text-[18px] tracking-wide font-medium hover:bg-ai-secondary'
                >
                    Sign up
                </Button>
            </div>
        </div>
    )
}
