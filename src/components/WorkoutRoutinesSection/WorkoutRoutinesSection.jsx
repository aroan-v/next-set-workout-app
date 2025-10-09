import Image from 'next/image'
import React from 'react'
import WorkoutStats from '../WorkoutStats'
import Link from 'next/link'
import { workoutRoutines } from '@/data/sampleData'

function WorkoutRoutinesSection() {
  return (
    <div className="flex max-w-lg flex-col gap-4 p-3">
      {/* Workout Card */}
      {workoutRoutines.map((obj, index) => (
        <Link key={index} href={`/workout/${obj.id}`}>
          <div className="bg-base-200 flex h-[110px] w-full overflow-hidden rounded-xl">
            {/* Content */}
            <div className="my-auto flex-1 p-6">
              <div className="text-lg font-medium">{obj.name}</div>
              <WorkoutStats minutes={obj.minutes} kCal={obj.kCal} exercises={obj.exercises} />
            </div>

            {/* Image Container */}
            <div className="relative h-full w-[150px] overflow-hidden rounded-xl">
              <Image
                src={obj.src}
                alt={obj.alt}
                fill
                className="absolute inset-0 h-full w-full scale-[1.01] object-cover"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default WorkoutRoutinesSection
