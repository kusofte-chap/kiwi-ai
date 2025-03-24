import { Button } from "./ui/button";

export default function ContactUs() {
    return (
        <div className='w-full max-w-[1248px] h-[420px] flex justify-center us mx-auto mt-[168px] py-[56px] pr-[70px] pl-[86px] relative'>
            <img src='/us-pos.png' className='w-[358px] h-[340px] object-cover object-center absolute top-1/2 right-[35px] -translate-y-1/2' />
            <div className='flex flex-col w-full justify-center'>
                <h2 className='w-1/3 text-[46px] mukta-malar-semibold text-black mu leading-[55px]'>
                    Find the best tool you need!
                </h2>
                <p className='w-2/3 text-[20px] font-normal mt-6 mb-8 leading-9 text-[#585981]'>
                    We provide multiple and customized AI tools and services.
                </p>
                <Button type='button' className='w-[200px] h-[48px]  bg-ai-secondary hover:bg-ai-primary tracking-[3.2px] text-white text-[16px] uppercase font-semibold flex items-center justify-center'>
                    Contact Us
                </Button>
            </div>
        </div>
    )
}
