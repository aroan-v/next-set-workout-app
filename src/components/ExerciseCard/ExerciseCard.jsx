import { geGithubImage } from '@/lib/getGithubImage'
import { devLog } from '@/lib/logger'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { ExerciseTable } from './ExerciseTable'

function ExerciseCard({ contentObj }) {
  devLog('contentObj', contentObj)
  const { id, images, name, primaryMuscles, secondaryMuscles } = contentObj
  const [isOpen, setIsOpen] = React.useState(false)

  const image = images[0]
  const muscles = [...new Set([...primaryMuscles, ...secondaryMuscles])].slice(0, 3)

  const imageSrc = geGithubImage(image)

  return (
    <div
      className={cn(
        `bg-base-200 flex w-full max-w-md min-w-sm flex-col overflow-hidden rounded-lg`
      )}
    >
      {/* Header */}
      <button onClick={() => setIsOpen((p) => !p)}>
        <div className="flex h-fit w-full items-center rounded-lg">
          {/* Content */}
          <div className="flex flex-1 flex-col justify-center gap-2 p-4">
            <div className="text-md text-left">{name}</div>

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
          </div>

          {/* Image */}
          <div className="relative h-30 w-40 shrink-0 overflow-hidden rounded-xl">
            <ImageContainer imageSrc={imageSrc} name={name} />
          </div>
        </div>
      </button>

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
  return <Image src={imageSrc} alt={name} fill sizes="160px" className="object-cover" />
}
