import CareerAfterMBBSRomania from '@/components/abroad-mbbs/romania/careerAfterMBBSAP'
import ClinicalExposureRomania from '@/components/abroad-mbbs/romania/clinicalExposureAP'
import ExploreMoreAbroad from '@/components/abroad-mbbs/romania/exploreMoreMBBSIndia'
import FaqRomania from '@/components/abroad-mbbs/romania/faqMbbs'
import RomaniaHero from '@/components/abroad-mbbs/romania/mbbbHero'
import MbbsAdmissionProcessRomania from '@/components/abroad-mbbs/romania/mbbsAdmissionProcessAP'
import MbbsDurationStructureRomania from '@/components/abroad-mbbs/romania/mbbsDurationStructure'
import MbbsEligibilityRomania from '@/components/abroad-mbbs/romania/mbbsEligibilityAP'
import MbbsFeesRomania from '@/components/abroad-mbbs/romania/mbbsFeesAP'
import StartMBBSJourneyRomania from '@/components/abroad-mbbs/romania/startMBBSJourneyAP'
import TopCityRomania from '@/components/abroad-mbbs/romania/topCitiesAP'
import WhyChooseRomania from '@/components/abroad-mbbs/romania/whyChooseAP'
import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import WhyChooseUs from '@/components/mbbs/why-choose-us'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <RomaniaHero />
            <TopCityRomania />
            <WhyChooseRomania />
            <MbbsDurationStructureRomania />
            <MbbsEligibilityRomania />
            <MbbsAdmissionProcessRomania />
            <MbbsFeesRomania />
            <ClinicalExposureRomania />
            <CareerAfterMBBSRomania />
            <WhyChooseUs />
            <StartMBBSJourneyRomania />
            <ExploreMoreAbroad />
            <FaqRomania />
            <Footer />
        </div>
    )
}

export default page
