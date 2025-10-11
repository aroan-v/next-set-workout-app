'use client'
import { geGithubImage } from '@/lib/getGithubImage'
import { devLog } from '@/lib/logger'
import { cn } from '@/lib/utils'
import React from 'react'
import { ExerciseTable } from './ExerciseTable'
import { CircleChevronDown, CircleChevronUp, Clock, Dumbbell } from 'lucide-react'
import { Button } from '../ui/button'
import { formatRestTime } from '@/lib/formatRestTime'
import ImageContainer from './ImageContainer'
import Tag from '../Tag'
import TagContainer from '../Tag/TagContainer'

function ExerciseCard({ contentObj }) {
  devLog('contentObj', contentObj)
  const { id, images, name, primaryMuscles, secondaryMuscles, restTime, sets, reps } = contentObj
  const [isOpen, setIsOpen] = React.useState(false)
  const [isWorkoutDone, setIsWorkoutDone] = React.useState(false)

  const image = images[0]
  const muscles = [...new Set([...primaryMuscles, ...secondaryMuscles])].slice(0, 3)

  const imageSrc = geGithubImage(image)

  return (
    <div
      className={cn(
        `bg-base-200 border-neutral flex w-full max-w-md min-w-sm flex-col rounded-lg border-2`,
        isWorkoutDone && 'opacity-70'
      )}
    >
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
          <div className="text-card-foreground/60 flex gap-2 text-left text-xs *:flex *:items-center *:gap-1">
            <div className="">
              <Dumbbell /> {sets} sets
            </div>

            <div className="">
              <Clock /> Rest Timer: {formatRestTime(restTime)}
            </div>
          </div>

          {/* Tags */}
          <TagContainer>
            <Tag items={muscles} />
          </TagContainer>

          {/* Chevron Icon */}
          <div className="absolute right-0 bottom-2">
            {!isOpen && <CircleChevronDown className="size-4" />}
            {isOpen && <CircleChevronUp className="size-4" />}
          </div>
        </div>

        {/* Image */}
        {imageSrc && <ImageContainer imageSrc={imageSrc} alt={name} />}
      </Button>

      {/* Table */}
      <ExerciseTable
        setIsWorkoutDone={setIsWorkoutDone}
        sets={sets}
        reps={reps}
        restTime={restTime}
        isOpen={isOpen}
      />
    </div>
  )
}

export default React.memo(ExerciseCard)
