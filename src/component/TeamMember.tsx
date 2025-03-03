import React from 'react'


interface IMackData {
    cover: string,
    name: string,
    role: string
}
const mackData = [
    {
        cover: "/team-cover.jpg",
        name: "Mack",
        role: "CEO & Founder"
    },
    {
        cover: "/team-cover.jpg",
        name: "Mack",
        role: "CEO & Founder"
    },
    {
        cover: "/team-cover.jpg",
        name: "Mack",
        role: "CEO & Founder"
    },
    {
        cover: "/team-cover.jpg",
        name: "Mack",
        role: "CEO & Founder"
    },
]

function Team({ data }: { data: IMackData }) {
    return (
        <div className='flex flex-col items-center w-1/4 gap-[23px] rounded'>
            <div className='w-full h-[267px] shadow-(--team-box) bg-[#EFEFEF]'>
                <img src={data.cover} className='w-full h-full object-cover object-center' />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-[27px] h-[38px] font-bold text-ai-tertiary'>{data.name}</p>
                <p className='text-[20px] font-normal h-[28px] text-[#AFCD45]'>{data.role}</p>
            </div>
        </div>
    )
}

export default function TeamMember() {
    return (
        <div className='mt-40 flex justify-center'>
            <div className='w-full max-w-[1190px] flex flex-col gap-[69px]'>
                <h2 className='h-[68px] text-[48px] text-center tracking-[9.6px] font-bold text-ai-primary'>
                    TEAM MEMBERS
                </h2>
                <div className='flex gap-[84px] items-center justify-between'>
                    {
                        mackData.map((item, index) => (
                            <Team key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
