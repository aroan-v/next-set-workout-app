import React from 'react'
import SectionWrapper from '../SectionWrapper'
import RecommendedExerciseCard from './RecommendedExerciseCard'
import SectionHeading from '../SectionHeading'
import SectionContent from '../SectionWrapper/SectionContent'

export const exercises = [
  {
    src: '/images/exercises/squat-exercise.jpg',
    alt: 'Person performing a squat exercise',
    title: 'Squat Exercise',
    minutes: 12,
    kcal: 120,
  },
  {
    src: '/images/exercises/full-body-stretching.jpg',
    alt: 'Person performing a full body stretching',
    title: 'Full Body Stretching',
    minutes: 10,
    kcal: 100,
  },
]

function RecommendedExercisesSection() {
  return (
    <SectionWrapper as="section">
      <SectionHeading content={'Recommendations'} />

      {/* Exercise Cards */}

      <SectionContent>
        {exercises.map((obj) => (
          <RecommendedExerciseCard contentObject={obj} key={obj.title} />
        ))}
      </SectionContent>
    </SectionWrapper>
  )
}

export default RecommendedExercisesSection
