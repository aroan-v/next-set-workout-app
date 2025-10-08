import Image from 'next/image'
import React from 'react'
import WorkoutStats from '../WorkoutStats'

function WorkoutRoutinesSection() {
  return (
    <div className="border p-3">
      {/* Workout Card */}
      <div className="bg-base-200 flex h-[110px] w-full border border-red-500">
        {/* Content */}
        <div className="my-auto flex-1 p-4">
          <div className="text-lg font-medium">Upper Body</div>
          <WorkoutStats />
        </div>

        {/* Image Container */}
        <div className="relative h-full w-[150px]">
          <Image src={'/images/workout/routine-1.jpg'} alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default WorkoutRoutinesSection
