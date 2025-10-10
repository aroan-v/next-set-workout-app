'use client'
import { geGithubImage } from '@/lib/getGithubImage'
import { devLog } from '@/lib/logger'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { ExerciseTable } from './ExerciseTable'
import { CircleChevronDown, CircleChevronUp } from 'lucide-react'
import { Button } from '../ui/button'

function ExerciseCard({ contentObj }) {
  devLog('contentObj', contentObj)
  const { id, images, name, primaryMuscles, secondaryMuscles } = contentObj
  const [isOpen, setIsOpen] = React.useState(false)

  const image = images[0]
  const muscles = [...new Set([...primaryMuscles, ...secondaryMuscles])].slice(0, 3)

  const imageSrc = geGithubImage(image)

  return (
    <div className={cn(`bg-base-200 flex w-full max-w-md min-w-sm flex-col rounded-lg`)}>
      {/* Header Button */}
      <Button
        className={'rounded-lg" flex h-fit w-full items-center'}
        onClick={() => setIsOpen((p) => !p)}
        size={'card'}
        variant={'header'}
      >
        {/* Content */}
        <div className="relative flex h-full flex-1 flex-col justify-center gap-2 p-4">
          {/* Exercise Name */}
          <div className="text-md text-left">{name}</div>

          {/* Number of Sets */}
          <div></div>

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
          <div className="absolute right-2 -bottom-1">
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
          <ExerciseTable />
        </div>
      )}
    </div>
  )
}

export default React.memo(ExerciseCard)

function ImageContainer({ imageSrc, name }) {
  devLog('ImageContainer rendered')

  return (
    <div className="flex h-30 items-center p-1">
      <div className="relative h-full w-40 shrink-0 overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={name} fill sizes="160px" className="object-cover" />
      </div>
    </div>
  )
}
