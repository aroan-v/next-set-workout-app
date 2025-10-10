'use client'
import { geGithubImage } from '@/lib/getGithubImage'
import { devLog } from '@/lib/logger'
import { cn } from '@/lib/utils'
import React from 'react'
import { ExerciseTable } from './ExerciseTable'
import { CircleChevronDown, CircleChevronUp, Clock, Dumbbell } from 'lucide-react'
import { Button } from '../ui/button'
import ImageContainer from './ImageContainer'

function ExerciseCard({ contentObj }) {
  devLog('contentObj', contentObj)
  const { id, images, name, primaryMuscles, secondaryMuscles, restTime, sets, reps } = contentObj
  const [isOpen, setIsOpen] = React.useState(false)

  const image = images[0]
  const muscles = [...new Set([...primaryMuscles, ...secondaryMuscles])].slice(0, 3)

  const imageSrc = geGithubImage(image)

  return (
    <div className={cn(`bg-base-200 flex w-full max-w-md min-w-sm flex-col rounded-lg`)}>
      {/* Header Button */}
      <Button
        className={'flex w-full items-center overflow-hidden rounded-lg'}
        onClick={() => setIsOpen((p) => !p)}
        size={'card'}
        variant={'header'}
      >
        {/* Content */}
        <div className="relative flex h-full min-h-30 flex-1 flex-col justify-center gap-1 p-4">
          {/* Exercise Name */}
          <div className="text-md text-left text-wrap break-words">{name}</div>

          {/* Number of Sets */}
          <div className="text-card-foreground/60 flex gap-2 text-left *:flex *:items-center *:gap-1">
            <div className="">
              <Dumbbell /> {sets} sets
            </div>

            <div className="">
              <Clock /> Rest Timer: {restTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {muscles.map((muscle, index) => (
              <div
                className="text-primary w-fit gap-2 rounded-full border px-2 py-1 text-xs capitalize"
                key={muscle + index}
              >
                {muscle}
              </div>
            ))}
          </div>

          {/* Chevron Icon */}
          <div className="absolute right-0 bottom-2">
            {!isOpen && <CircleChevronDown className="size-4" />}
            {isOpen && <CircleChevronUp className="size-4" />}
          </div>
        </div>

        {/* Image */}
        <ImageContainer imageSrc={imageSrc} name={name} />
      </Button>

      {/* Table */}
      {isOpen && (
        <div className="bg-base-300 py-4">
          <ExerciseTable sets={sets} reps={reps} restTime={restTime} />
        </div>
      )}
    </div>
  )
}

export default React.memo(ExerciseCard)
