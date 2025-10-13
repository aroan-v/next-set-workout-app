import React from 'react'
import SectionWrapper from '../SectionWrapper'
import RecommendedExerciseCard from './RecommendedExerciseCard'
import SectionHeading from '../SectionHeading'
import SectionContent from '../SectionWrapper/SectionContent'
import { workoutRoutines } from '@/data/sampleData'
import { devLog } from '@/lib/logger'

function RecommendedExercisesSection() {
  const recommendedWorkouts = workoutRoutines.filter(({ featured }) => featured)

  devLog('recommendedWorkouts', recommendedWorkouts)

  return (
    <SectionWrapper as="section" className="">
      <SectionHeading content={'Recommendations'} />

      {/* Exercise Cards */}

      <SectionContent className={'gap-4'}>
        {recommendedWorkouts.map((obj, index) => (
          <RecommendedExerciseCard contentObject={obj} key={obj.id + index} />
        ))}
      </SectionContent>
    </SectionWrapper>
  )
}

export default RecommendedExercisesSection
