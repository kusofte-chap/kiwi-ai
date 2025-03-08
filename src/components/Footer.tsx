import React from 'react'
import LogoSvg from '@/src/assets/images/logo.svg'
import FbLogo from '@/src/assets/icon/fb.svg'
import XLogo from '@/src/assets/icon/X.svg'
import InsLogo from '@/src/assets/icon/ins.svg'
import InLogo from '@/src/assets/icon/in.svg'
import RightArrowIcon from '@/src/assets/icon/right-arrow.svg'
import LngIcon from '@/src/assets/icon/lng.svg'
import LanguageDropdown from './LngDropdown'


export default function Footer() {
    return (
        <div className='flex justify-center bg-[#DEF4B370] w-full pt-[110px] pl-[60px] pr-[159px] gap-[60px] mt-[148px] pb-[60px]'>
            <div className='max-w-[1440px]'>
                <div className='flex justify-center gap-12'>
                    <div className='flex-3 flex flex-col'>
                        <div className='flex-shrink-0 flex items-center gap-2'>
                            <div className='w-[60px] h-[51px] flex items-center justify-center'>
                                <LogoSvg />
                            </div>
                            <p className='logo-text'>
                                Kiwi AI
                            </p>
                        </div>
                        <p className='text-[16px] text-[#8F90A6] font-normal leading-[28px] font-LuFa mt-4 mb-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='flex items-center gap-7'>
                            <a
                                href='https://www.facebook.com/'
                                target='_blank'
                                className='w-6 h-6 flex items-center justify-center'
                            >
                                <FbLogo />
                            </a>
                            <a
                                href='https://www.x.com/'
                                target='_blank'
                                className='w-6 h-6 flex items-center justify-center'
                            >
                                <XLogo />
                            </a>
                            <a
                                href='https://www.instagram.com/'
                                target='_blank'
                                className='w-6 h-6 flex items-center justify-center'
                            >
                                <InsLogo />
                            </a>
                            <a href='https://www.linkedin.com/'
                                target='_blank'
                                className='w-6 h-6 flex items-center justify-center'
                            >
                                <InLogo />
                            </a>
                        </div>
                        <p className='text-[#8F90A6] text-[14px] font-noraml leading-[31px] font-LuFa mt-4'>© 2021 . All rights reserved.</p>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='text-[20px] text-[#110229] font-semibold leading-9'>Take a tour</h3>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Features</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Partners</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Pricing</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Product</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Support</p>
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='text-[20px] text-[#110229] font-semibold leading-9'>Our Company</h3>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>About Us</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Agents</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Blog</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Media</p>
                        <p className='text-[16px] font-normal text-[#110229] leading-[48px] font-Lufga'>Contact Us</p>
                    </div>
                    <div className='flex-2 flex flex-col'>
                        <h3 className='text-[20px] text-[#110229] font-semibold leading-9'>Subscribe</h3>
                        <p className='text-[14px]  text-[#8F90A6] leading-[48px] font-normal'>
                            Subscribe to get latest property, blog news from us
                        </p>
                        <div className='flex items-center bg-white rounded-[15px] border-[1.5px] border-[#D0D0E3] px-[15px] py-3 gap-2 mt-2'>
                            <input type='email' placeholder='Email Address'
                                className='flex-1 bg-transparent text-[#110229] text-[16px] border-0 outline-0 placeholder:text-[16px] placeholder:text-[#8F90A6]'
                            />
                            <div className='flex-shrink-0 w-[34px] h-[34px] flex items-center justify-center bg-[#4E9424] rounded-full'>
                                <RightArrowIcon />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <LanguageDropdown />
                </div>
            </div>
        </div>
    )
}