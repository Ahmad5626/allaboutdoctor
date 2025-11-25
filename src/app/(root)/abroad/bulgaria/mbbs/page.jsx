import CareerAfterMBBSBulgaria from '@/components/abroad-mbbs/bulgaria/careerAfterMBBSAP'
import ClinicalExposureBulgaria from '@/components/abroad-mbbs/bulgaria/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/bulgaria/exploreMoreMBBSIndia'
import FaqBulgaria from '@/components/abroad-mbbs/bulgaria/faqMbbs'
import BulgariaHero from '@/components/abroad-mbbs/bulgaria/mbbbHero'
import MbbsAdmissionProcessBulgaria from '@/components/abroad-mbbs/bulgaria/mbbsAdmissionProcessAP'
import MbbsDurationStructureBulgaria from '@/components/abroad-mbbs/bulgaria/mbbsDurationStructure'
import MbbsEligibilityBulgaria from '@/components/abroad-mbbs/bulgaria/mbbsEligibilityAP'
import MbbsFeesBulgaria from '@/components/abroad-mbbs/bulgaria/mbbsFeesAP'
import StartMBBSJourneyBulgaria from '@/components/abroad-mbbs/bulgaria/startMBBSJourneyAP'
import TopCityBulgaria from '@/components/abroad-mbbs/bulgaria/topCitiesAP'
import WhyChooseBulgaria from '@/components/abroad-mbbs/bulgaria/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/neet/why-choose-us'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <BulgariaHero />
            <TopCityBulgaria />
            <WhyChooseBulgaria />
            <MbbsDurationStructureBulgaria />
            <MbbsEligibilityBulgaria />
            <MbbsAdmissionProcessBulgaria />
            <MbbsFeesBulgaria />
            <ClinicalExposureBulgaria />
            <CareerAfterMBBSBulgaria />
            <WhyChooseUs />
            <StartMBBSJourneyBulgaria />
            <ExploreMoreAbroad />
            <FaqBulgaria />
            <Footer/>
        </div>
    )
}

export default page
