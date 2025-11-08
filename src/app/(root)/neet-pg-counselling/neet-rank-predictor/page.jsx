import Footer from '@/components/Footer'
import Navbar from '@/components/Hedaer'
import RankPredictorHero from '@/components/neet-pg/neet-rank-predictor/neetRankPredictorHero'
import PredictionFactors from '@/components/neet-pg/neet-rank-predictor/predictionFactors'
import RankPredictorBenefits from '@/components/neet-pg/neet-rank-predictor/rankPredictorBenefits'
import SpecializationsEvaluate from '@/components/neet-pg/neet-rank-predictor/specializationsEvaluate'
import StartRankPrediction from '@/components/neet-pg/neet-rank-predictor/startRankPrediction'
import WhyChooseAllAboutDoctor from '@/components/neet-pg/neet-rank-predictor/whyChooseAllAboutDoctor'
import WhyUseRankPredictor from '@/components/neet-pg/neet-rank-predictor/whyUseRankPredictor'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <RankPredictorHero/>
      <RankPredictorBenefits/>
      <PredictionFactors/>
      <SpecializationsEvaluate/>
      <WhyUseRankPredictor/>
      <WhyChooseAllAboutDoctor/>
      <StartRankPrediction/>
      <Footer/>
    </div>
  )
}

export default page
