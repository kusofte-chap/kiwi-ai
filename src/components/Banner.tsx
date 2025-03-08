import React from 'react'
import { Button } from './ui/button'

export default function Banner() {
    return (
        <div className='w-full flex justify-center mt-6'>
            <div className='w-full max-w-[1248px] h-[766.72px] banner relative'>
                <div className='absolute top-[315px] left-6 w-full flex flex-col items-center justify-center'>
                    <h2 className='bannerText'>
                        SLOGAN  SLOGAN
                    </h2>
                    <p className='text-center text-[24px] font-light text-[#134815] mt-9 mb-12'>
                        SLOGAN SLOGAN SLOGAN SLOGAN SLOGAN
                    </p>
                    <Button className='w-[186px] bg-ai-primary hover:bg-ai-secondary py-3 h-14 text-white text-[20px] tracking-wide shadow-(--btn-box)'>
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}
