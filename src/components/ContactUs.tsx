
export default function ContactUs() {
    return (
        <div className='w-full max-w-[1300px] h-[480px] flex justify-center us mx-auto mt-[270px] py-[56px] pr-[70px] pl-[86px] relative'>
            <img src='/us-pos.png' className='w-[424px] h-[402px] object-cover object-center absolute top-1/2 right-[35px] -translate-y-1/2' />
            <div className='flex flex-col w-full justify-center'>
                <h2 className='w-1/3 text-[54px] font-semibold text-black font-mukta leading-[55px]'>
                    Find your best Real Estate
                </h2>
                <p className='w-1/3 text-[22px] font-normal mt-[33px]  mb-[37px] leading-9 text-[#585981]'>
                    We provide a complete service for the sale, purchase or rental of real estate.
                </p>
                <a type='button' className='w-[213px] h-[50px] rounded-[14px] bg-ai-secondary tracking-[3.2px] text-white text-[16px] uppercase font-semibold flex items-center justify-center'>
                    Contact Us
                </a>
            </div>
        </div>
    )
}
