
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import TeamMember from '../components/TeamMember'
import ContactUs from '../components/ContactUs'
import Plans from '../components/Plans'
import MoreFeature from '../components/MoreFeature'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-[1248px] mx-auto'>
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

