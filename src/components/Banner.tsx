import React from 'react'

export default function Banner() {
    return (
        <div className='w-full flex justify-center mt-[76px]'>
            <div className='w-full max-w-[1340px] h-[680px] banner relative flex items-center justify-center'>
                <div className='absolute top-[70px] left-[16px] z-10 w-[182px]'>
                    <img src='/pos-1.png' className='object-content object-center' />
                </div>
                <div className='absolute top-[70px] left-[-68px] z-11 w-[280px]'>
                    <img src='/pos-2.png' className='object-content object-center w-full h-full' />
                </div>
                <div className='absolute bottom-[-40px] right-0 z-10 w-[346px]'>
                    <img src='/pos-3.png' className='object-content object-center w-full h-full' />
                </div>
                <div className='absolute bottom-[164px] right-[66px] z-11 w-[130px]'>
                    <img src='/pos-4.png' className='object-content object-center w-full' />
                </div>
                <div className='absolute bottom-[-110px] right-[-36px] z-12 w-[346px]'>
                    <img src='/pos-5.png' className='object-cover object-center w-full h-full' />
                </div>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <h2 className='text-[100px] font-normal tracking-[1px] text-ai-primary drop-shadow-[-7px_10px_20px_rgba(0, 0, 0, 0.10)]'>
                        SLOGAN SLOGAN
                    </h2>
                    <p className='text-[25px] font-light tracking-tight mt-[38px] mb-[29px] text-ai-primary'>
                        SLOGAN SLOGAN SLOGAN SLOGAN SLOGAN
                    </p>
                    <a type='button' className='w-[220px] h-[62px] flex items-center justify-center text-white shadow-(--btn-box) rounded-full bg-ai-secondary text-[30px] font-bold'>
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}
