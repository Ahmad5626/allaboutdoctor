import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import EligibilityApply from '@/components/neet-pg/eligibility/eligibilityApply'
import EligibilityAssistance from '@/components/neet-pg/eligibility/eligibilityAssistance'
import EligibilityHero from '@/components/neet-pg/eligibility/eligibilityHero'
import EligibilityRequirements from '@/components/neet-pg/eligibility/eligibilityRequirements'
import ImportantNotes from '@/components/neet-pg/eligibility/importantNotes'
import RequiredDocuments from '@/components/neet-pg/eligibility/requiredDocuments'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <EligibilityHero/>
      <EligibilityApply/>
      <EligibilityRequirements/>
      <RequiredDocuments/>
      <ImportantNotes/>
      <EligibilityAssistance/>
      <Footer/>
    </div>
  )
}

export default page
