import React from 'react'
import FeatureSvg from '@/src/assets/icon/feature-item.svg'

interface IMackData {
    title: string
    brief: string
}

const mackData = [
    {
        title: "Affordable & Accessible",
        brief: "Enjoy the most cost-effective subscription plans compared to other platforms."
    },
    {
        title: "All-in-One AI Toolkit",
        brief: "Access a comprehensive suite: Kiwi Chat, Kiwi API, Kiwi Bypass, Kiwi Knot, and more."
    },
    {
        title: "User-Centric Design",
        brief: "Built by developers who deeply understand user needs for seamless functionality."
    },
    {
        title: "One Platform, Endless Efficiency",
        brief: "Save time with a unified solution for all your AI-powered tasks."
    },
    {
        title: "Tailored for Students",
        brief: "Specially designed tools to support academic success and productivity."
    },
    {
        title: "Easy to Use, Always Supported",
        brief: "Clear guides, active social media, and responsive customer service for a smooth experience."
    },
    {
        title: "Unmatched Capacity",
        brief: "Upload more files with larger storage, catering to diverse user demands."
    }
]

function FeatureItem({ data, className }: { data: IMackData, className: string }) {
    return (
        <div className={`${className} flex-shrink-0 flex flex-col h-[248px] rounded-[5px] pt-[38px] pb-[29px] pl-[34px] pr-[28px] bg-white shadow-(--feature-box)`}>
            <div className='w-[51px] h-[51px] flex items-center justify-center'>
                <FeatureSvg />
            </div>
            <h3 className='text-[24px] text-[#272824] font-medium leading-7 mt-[14px] mb-3'>
                {data.title}
            </h3>
            <p className='text-[16px] text-[#272824] font-normal line-clamp-3'>
                {data.brief}
            </p>
        </div>
    )
}

export default function MoreFeature() {
    return (
        <div className="w-[1248px] h-[1230px] mx-auto bg-[url(/section-5.png)] bg-[position:center] bg-no-repeat mt-[168px]">
            <div className="pt-[200px] pb-[80px] px-[100px] flex flex-col gap-8">
                <div className="grid grid-cols-3 gap-7 items-center">
                    <div className="flex flex-col col-span-2">
                        <h3 className="text-[60px] font-bold text-white">Kiwi</h3>
                        <h3 className="text-[60px] font-bold text-white">We Are The Best Choice</h3>
                        <p className="text-[24px] font-normal text-white">
                            Boost productivity, unlock insights, and innovate smarter with Kiwi AI—your all-in-one suite of intelligent tools. Work faster, achieve more!
                        </p>
                    </div>
                    <div className="grid col-span-1">
                        <FeatureItem className="w-full" data={mackData[0]} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <FeatureItem className="w-full" data={mackData[1]} />
                    <FeatureItem className="w-full" data={mackData[2]} />
                    <FeatureItem className="w-full" data={mackData[3]} />
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <FeatureItem className="w-full" data={mackData[4]} />
                    <FeatureItem className="w-full" data={mackData[5]} />
                    <FeatureItem className="w-full" data={mackData[6]} />
                </div>
            </div>
        </div>
    )
}
