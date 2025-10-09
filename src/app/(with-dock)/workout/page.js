'use client'
import DailyChallengeSection from '@/components/DailyChallengeSection'
import MainWrapper from '@/components/MainWrapper'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import SectionWrapper from '@/components/SectionWrapper'
import { Button } from '@/components/ui/button'
import WorkoutRoutinesSection from '@/components/WorkoutRoutinesSection'
import React from 'react'

const levels = ['Beginner', 'Intermediate', 'Advanced', 'Custom']

export default function ExplorePage() {
  const [currentLevel, setCurrentLevel] = React.useState(levels[0])

  return (
    <MainWrapper>
      <PageHeader titleContent={'Workout'} />

      {/* Level Section */}
      <SectionWrapper className="flex gap-2">
        {levels.map((level) => (
          <Button
            key={level}
            size={'lg'}
            onClick={() => setCurrentLevel(level)}
            selected={currentLevel === level}
          >
            {level}
          </Button>
        ))}
      </SectionWrapper>

      {/* Daily Challenge Section */}
      <DailyChallengeSection />

      {/* Workouts Section */}
      <SectionWrapper as="section">
        <SectionHeading
          content={`Let's go Beginner!`}
          subheading={'Explore Different Workout Styles'}
        />

        <WorkoutRoutinesSection />
      </SectionWrapper>
    </MainWrapper>
  )
}
