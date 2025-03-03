import React from 'react'
import PlanIconSvg from '@/src/assets/icon/plan-icon.svg'

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
]

function PlanItem({ data }: { data: IMackData }) {
    return (
        <div className='w-1/3  flex flex-col items-center  shadow-(--plan-box) pt-[52px] pb-12 px-[23px] rounded-[13px]'>
            <div className='w-[70px] h-[70px] flex items-center justify-center'>
                <PlanIconSvg />
            </div>
            <h3 className='text-[24px] text-black font-bold leading-7 mt-[13px] mb-2.5'>
                {data.title}
            </h3>
            <p className='text-[18px] text-[#000] leading-[26px] font-medium line-clamp-6 text-center'>
                {data.brief}
            </p>
        </div>
    )
}

export default function Plans() {
    return (
        <div className='mt-40 flex justify-center'>
            <div className='w-full max-w-[1190px] flex flex-col gap-[69px]'>
                <h2 className='h-[68px] text-[48px] text-center tracking-[9.6px] font-bold text-ai-primary'>
                    PLANS
                </h2>
                <div className='flex gap-[84px] items-center justify-between'>
                    {
                        mackData.map((item, index) => (
                            <PlanItem key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
