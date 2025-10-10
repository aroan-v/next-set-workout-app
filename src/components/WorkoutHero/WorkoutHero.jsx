import { cn } from '@/lib/utils'
import React from 'react'
import WorkoutStats from '../WorkoutStats'
import Image from 'next/image'
import { devLog } from '@/lib/logger'

function WorkoutHero({ contentObj, className }) {
  const { src, name, alt, minutes, kCal, exercises } = contentObj

  const exercisesLength = exercises.length
  devLog('WorkoutHero - name', name)

  return (
    <section
      className={cn('bg-base-200 relative flex h-50 w-full max-w-xl items-end p-6', className)}
    >
      <div className="relative z-20">
        {/* Workout Name */}
        <div className="text-primary text-3xl font-medium">{name}</div>

        {/* Workout Details */}
        <WorkoutStats minutes={minutes} variant="lg" kCal={kCal} exercises={exercisesLength} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/80" />

      {/* Image */}
      <Image src={src} alt={alt} fill className="z-0 object-cover" sizes="576px" />
    </section>
  )
}

export default WorkoutHero
