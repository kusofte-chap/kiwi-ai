
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
        <div className='flex flex-col items-center w-1/4 max-w-[260px] gap-6'>
            <div className='w-full h-[282px] shadow-(--team-box) bg-[#EFEFEF] rounded overflow-hidden'>
                <img src={data.cover} className='w-full h-full object-cover object-top' />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-[24px] h-[32px] font-bold text-ai-tertiary'>{data.name}</p>
                <p className='text-[16px] font-normal h-[24px] text-[#AFCD45]'>{data.role}</p>
            </div>
        </div>
    )
}

export default function TeamMember() {
    return (
        <div className='mt-40 flex justify-center'>
            <div className='w-full max-w-[1190px] flex flex-col gap-[60px]'>
                <h2 className='h-[68px] text-[38px] text-center tracking-[9.6px] font-medium text-ai-primary'>
                    TEAM MEMBERS
                </h2>
                <div className='flex gap-12 items-center justify-around'>
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
