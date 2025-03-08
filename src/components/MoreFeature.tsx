import React from 'react'
import FeatureSvg from '@/src/assets/icon/feature-item.svg'

interface IMackData {
    title: string
    brief: string
}

const mackData = [
    {
        title: "Feature #1",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #2",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #3",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #4",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #5",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #6",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #7",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #8",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
    {
        title: "Feature #9",
        brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
    },
]

function FeatureItem({ data, className }: { data: IMackData, className: string }) {
    return (
        <div className={`${className} flex-shrink-0 flex flex-col h-[243px] rounded-[5px] pt-[38px] pb-[29px] pl-[34px] pr-[28px] bg-white shadow-(--feature-box)`}>
            <div className='w-[51px] h-[51px] flex items-center justify-center'>
                <FeatureSvg />
            </div>
            <h3 className='text-[24px] text-[#272824] font-medium leading-7 mt-[18px] mb-3'>
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
        <div className="w-[1248px] h-[1230px] mx-auto bg-[url(/section-5.png)] bg-[position:center] bg-no-repeat mt-[100px]">
            <div className="pt-[230px] pb-[80px] px-[100px] flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col">
                        <h3 className="text-[48px] font-bold text-white">More Features</h3>
                        <p className="text-[18px] font-normal text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-[33px]">
                        <FeatureItem className="w-full" data={mackData[0]} />
                        <FeatureItem className="w-full" data={mackData[1]} />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    <FeatureItem className="w-full" data={mackData[2]} />
                    <FeatureItem className="w-full" data={mackData[3]} />
                    <FeatureItem className="w-full" data={mackData[4]} />
                    <FeatureItem className="w-full" data={mackData[5]} />
                </div>

                <div className="grid grid-cols-4 gap-8">
                    <FeatureItem className="w-full" data={mackData[6]} />
                    <FeatureItem className="w-full" data={mackData[7]} />
                    <FeatureItem className="w-full" data={mackData[8]} />
                    <div className="w-full" />
                </div>
            </div>
        </div>
    )
}
