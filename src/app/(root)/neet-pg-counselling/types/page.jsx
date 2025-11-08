import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import CentralCounselling from '@/components/neet-pg/types/centralCounselling'
import CounsellingFocus from '@/components/neet-pg/types/counsellingFocus'
import ExpertGuidance from '@/components/neet-pg/types/expertGuidance'
import PrivateDeemedCounselling from '@/components/neet-pg/types/privateDeemedCounselling'
import QuickComparisonTable from '@/components/neet-pg/types/quickComparisonTable'
import StateCounselling from '@/components/neet-pg/types/stateCounselling'
import TypesHero from '@/components/neet-pg/types/typesHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <TypesHero/>
      <CentralCounselling/>
      <StateCounselling/>
      <PrivateDeemedCounselling/>
      <QuickComparisonTable/>
      <CounsellingFocus/>
      <ExpertGuidance/>
      <Footer/>
    </div>
  )
}

export default page
