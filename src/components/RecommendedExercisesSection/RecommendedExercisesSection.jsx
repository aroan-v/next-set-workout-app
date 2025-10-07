'use client'
import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { devLog } from '@/lib/logger'
import ExerciseCard from './ExerciseCard'

function RecommendedExercisesSection() {
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/exercises')

      if (!res.ok) throw new Error('Failed to fetch exercises!')

      const data = await res.json()
      devLog('data', data)
    }

    fetchData()
  }, [])

  return (
    <SectionWrapper className="bg-base-200 border py-8">
      <ExerciseCard />
    </SectionWrapper>
  )
}

export default RecommendedExercisesSection
