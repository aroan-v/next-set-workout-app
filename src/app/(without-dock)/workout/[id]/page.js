// useClient because of the useEffect
import ExerciseCard from '@/components/ExerciseCard'
import MainWrapper from '@/components/MainWrapper'
import PageHeader from '@/components/PageHeader'
import PropTypes from 'prop-types'
import React from 'react'
import { notFound } from 'next/navigation'
import { getExercises } from '@/lib/getExercises'
import WorkoutHero from '@/components/WorkoutHero'
import { devLog } from '@/lib/logger'
import RestTimerContainer from '@/components/RestTimerContainer'
import { workoutRoutines } from '@/data/sampleData'

Page.propTypes = {
  params: PropTypes.object,
}

export default async function Page({ params }) {
  const { id } = await params

  const selectedRoutine = workoutRoutines.find(({ id: routineId }) => id === routineId)

  devLog('selectedRoutine', selectedRoutine)

  if (!selectedRoutine) {
    notFound()
  }

  const rawData = await getExercises(selectedRoutine.exercises)

  devLog('rawData', rawData)

  if (!rawData) {
    notFound()
  }

  const data = rawData.length > 10 ? rawData.slice(0, 5) : rawData

  return (
    <MainWrapper className={'relative'}>
      <PageHeader titleContent={'Workout'} href={'/workout'} />

      {/* Exercise Hero Section */}
      <WorkoutHero className={''} contentObj={selectedRoutine} />

      {/* ExerciseCard Container*/}
      <div className="flex w-full flex-col items-center gap-4 p-4">
        {data?.map((obj, index) => (
          <ExerciseCard key={index} contentObj={obj} />
        ))}
      </div>

      <RestTimerContainer />
    </MainWrapper>
  )
}
