// useClient because of the useEffect
import DailyChallengeSection from '@/components/DailyChallengeSection'
import ExerciseCard from '@/components/ExerciseCard'
import MainWrapper from '@/components/MainWrapper'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'
import SectionWrapper from '@/components/SectionWrapper'
import { workoutRoutines } from '@/data/sampleData'
import { devLog } from '@/lib/logger'
import PropTypes from 'prop-types'
import React, { use } from 'react'
import { notFound } from 'next/navigation'
import { getExercises } from '@/lib/getExercises'
import WorkoutHero from '@/components/WorkoutHero'

Page.propTypes = {
  params: PropTypes.object,
}

export default async function Page({ params }) {
  const { id } = await params
  // const [data, setData] = React.useState(null)

  const selectedRoutine = workoutRoutines.find(({ id: routineId }) => id === routineId)

  devLog('page fired')

  const rawData = await getExercises()

  if (!rawData) {
    notFound()
  }

  const data = rawData.slice(0, 5)

  devLog('slug', id)

  // ===== useClient disabled

  return (
    <MainWrapper>
      <PageHeader titleContent={'Workout'} href={'/workout'} />

      {/* Exercise Hero Section */}
      <WorkoutHero contentObj={selectedRoutine} />

      {/* ExerciseCard */}
      <div className="flex flex-col gap-4 p-4">
        {data?.map((obj, index) => (
          <ExerciseCard key={index} contentObj={obj} />
        ))}
      </div>
    </MainWrapper>
  )
}

// React.useEffect(() => {
//   async function fetchData() {
//     const res = await fetch('/api/exercises')

//     if (!res.ok) throw new Error('Failed to fetch exercises!')

//     const data = await res.json()
//     const slicedData = data.slice(0, 5)

//     devLog('data.slice(0,10', data.slice(0, 15))
//     setData(slicedData)
//   }

//   fetchData()
// }, [])
