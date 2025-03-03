import React from 'react'
import Navigation from '@/src/component/Navigation'
import Banner from '../component/Banner'
import TeamMember from '../component/TeamMember'
import ContactUs from '../component/ContactUs'
import Plans from '../component/Plans'
import MoreFeature from '../component/MoreFeature'
import Footer from '../component/Footer'
export default function Page() {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full max-w-[1440px] pt-[60px] pb-10'>
                <Navigation />
                <Banner />
                <TeamMember />
                <ContactUs />
                <Plans />
                <MoreFeature />
            </div>
            <Footer />
        </div>
    )
}

