// useClient because of the useEffect
import ExerciseCard from '@/components/ExerciseCard'
import MainWrapper from '@/components/MainWrapper'
import PageHeader from '@/components/PageHeader'
import { workoutRoutines } from '@/data/sampleData'
import PropTypes from 'prop-types'
import React from 'react'
import { notFound } from 'next/navigation'
import { getExercises } from '@/lib/getExercises'
import WorkoutHero from '@/components/WorkoutHero'
import ButtonPreview from '@/components/ButtonPreview'

Page.propTypes = {
  params: PropTypes.object,
}

export default async function Page({ params }) {
  const { id } = await params

  const selectedRoutine = workoutRoutines.find(({ id: routineId }) => id === routineId)

  const rawData = await getExercises()

  if (!rawData) {
    notFound()
  }

  const data = rawData.slice(0, 5)

  return (
    <MainWrapper>
      <PageHeader titleContent={'Workout'} href={'/workout'} />

      {/* Exercise Hero Section */}
      <WorkoutHero contentObj={selectedRoutine} />

      {/* ExerciseCard Container*/}
      <div className="flex w-full flex-col items-center gap-4 p-4">
        {data?.map((obj, index) => (
          <ExerciseCard key={index} contentObj={obj} />
        ))}
      </div>

      {/* Button Showcase */}
      <ButtonPreview />
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
