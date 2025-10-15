import React from 'react'
import SectionWrapper from '../SectionWrapper'
import RecommendedExerciseCard from './RecommendedExerciseCard'
import SectionHeading from '../SectionHeading'
import SectionContent from '../SectionWrapper/SectionContent'
import { featuredWorkouts } from '@/data/sampleData'
import { devLog } from '@/lib/logger'

function RecommendedExercisesSection() {
  const recommendedWorkouts = [...featuredWorkouts]

  devLog('recommendedWorkouts', recommendedWorkouts)

  return (
    <SectionWrapper as="section" className="">
      <SectionHeading content={'Recommended Exercises'} />

      {/* Exercise Cards */}

      <SectionContent className={'gap-4 overflow-x-scroll py-4'}>
        {recommendedWorkouts.map((obj, index) => (
          <RecommendedExerciseCard contentObject={obj} key={obj.id + index} />
        ))}
      </SectionContent>
    </SectionWrapper>
  )
}

export default RecommendedExercisesSection
