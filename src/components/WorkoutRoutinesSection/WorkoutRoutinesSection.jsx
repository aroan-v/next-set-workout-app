import React from 'react'
import { featuredWorkouts } from '@/data/sampleData'
import RoutineCard from './RoutineCard'
import { devLog } from '@/lib/logger'

function WorkoutRoutinesSection() {
  devLog('WorkoutRoutinesSection - workoutRoutines', featuredWorkouts)

  return (
    <div className="debug mx-auto flex flex-col gap-4 p-3">
      {/* Workout Card */}
      {featuredWorkouts.map((obj, index) => (
        <RoutineCard key={index} obj={obj} />
      ))}
    </div>
  )
}

export default WorkoutRoutinesSection
