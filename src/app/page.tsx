
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Plans from '../components/Plans'
import MoreFeature from '../components/MoreFeature'
import Footer from '../components/Footer'
import FQA from '../components/QA'

export default function Page() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-[1248px] mx-auto'>
        <Navigation />
        <Banner />
        <Plans />
        <ContactUs />
        <MoreFeature />
        <FQA />
      </div>
      <Footer />
    </div>
  )
}

