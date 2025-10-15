import React from 'react'
import SectionWrapper from '../SectionWrapper'
import RecommendedExerciseCard from './RecommendedExerciseCard'
import SectionHeading from '../SectionHeading'
import SectionContent from '../SectionWrapper/SectionContent'
import { featuredWorkouts } from '@/data/sampleData'
import { devLog } from '@/lib/logger'
import RightSideGradientOverlay from '../RightSideGradientOverlay'
import OverflowContainer from '../RightSideGradientOverlay/OverflowContainer'

function RecommendedExercisesSection() {
  const recommendedWorkouts = [...featuredWorkouts]

  devLog('recommendedWorkouts', recommendedWorkouts)

  return (
    <SectionWrapper as="section" className="*:px-8">
      <SectionHeading content={'Recommended Exercises'} />

      {/* Exercise Cards */}
      <SectionContent className={'relative !pr-0'}>
        <OverflowContainer>
          {recommendedWorkouts.map((obj, index) => (
            <RecommendedExerciseCard contentObject={obj} key={obj.id + index} />
          ))}
        </OverflowContainer>

        {/* Right Side Gradient Over */}
        <RightSideGradientOverlay />
      </SectionContent>
    </SectionWrapper>
  )
}

export default RecommendedExercisesSection
