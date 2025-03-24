import PlanIconSvg from '@/src/assets/icon/plan-icon.svg'

interface IMackData {
    title: string
    brief: string
    items: string[]
}

const mackData = [
    {
        title: "Free",
        brief: "free",
        items: [
            "2Knot folders",
            "Upload 10 documents",
            "File size 20mb",
            "Features • Create 2 notes",
            "Ask the Al 100 times",
            "gpt4o-mini model",
        ]
    },
    {
        title: "Premium",
        brief: "$48 HKD/month",
        items: [
            "$48 HKD/month",
            "10 Knot folders",
            "Upload 50 documents",
            "File size 40mb",
            "Create 10 notes",
            "Ask Al 300 times",
            "Augmented Vector",
            "gpt4, Claude model, etc",
        ]
    },
    {
        title: "Ultimate",
        brief: "$98HKD/month",
        items: [
            "$98HKD/month",
            "Unlimited Knot folders",
            "Unlimited documents",
            "File size 40mb",
            "Unlimited notes",
            "Unlimited Al queries",
        ]
    },
]

function PlanItem({ data }: { data: IMackData }) {
    return (
        <div className='feature-card w-1/3  flex flex-col shadow-(--plan-box) pt-[52px] pb-14 px-[23px] rounded-[10px]'>
            <div className='w-full flex flex-col items-center mb-4 gap-2.5'>
                <div className='w-[70px] h-[70px] flex items-center justify-center'>
                    <PlanIconSvg />
                </div>
                <h3 className='text-[24px] text-black font-bold leading-7 tracking-tighter'>
                    {data.title}
                </h3>
                {/* <p className='text-[20px] text-[#000] font-medium line-clamp-6 text-center'>
                    {data.brief}
                </p> */}
            </div>
            <ul className='list-disc mx-6 h-[168px]'>
                {data.items.map((item, index) => (
                    <li key={index}>
                        <p className='text-[16px] text-[#282828] leading-[26px] font-normal'>
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Plans() {
    return (
        <div className='mt-32 flex justify-center'>
            <div className='w-full max-w-[1190px] flex flex-col gap-[69px]'>
                <h2 className='h-[68px] text-[40px] text-center tracking-[2px] font-medium text-ai-primary'>
                    Subscription Plans
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
