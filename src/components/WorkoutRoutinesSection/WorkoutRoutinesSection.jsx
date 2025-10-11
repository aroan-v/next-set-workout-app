import React from 'react'
import { workoutRoutines } from '@/data/sampleData'
import RoutineCard from './RoutineCard'
import { devLog } from '@/lib/logger'

function WorkoutRoutinesSection() {
  devLog('WorkoutRoutinesSection - workoutRoutines', workoutRoutines)

  return (
    <div className="flex max-w-lg flex-col gap-4 p-3">
      {/* Workout Card */}
      {workoutRoutines.map((obj, index) => (
        <RoutineCard key={index} obj={obj} />
      ))}
    </div>
  )
}

export default WorkoutRoutinesSection
