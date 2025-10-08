import { geGithubImage } from '@/lib/getGithubImage'
import { devLog } from '@/lib/logger'
import Image from 'next/image'
import React from 'react'

export default function ExerciseCard({ contentObj }) {
  devLog('contentObj', contentObj)
  const { id, images, name, primaryMuscles, secondaryMuscles } = contentObj

  // const imageData = await getImages(images[0])
  // const imageSrc = imageData.src

  devLog('images', images)
  const image = images[0]
  const muscles = [...new Set([...primaryMuscles, ...secondaryMuscles])].slice(0, 3)

  devLog('muscles', muscles)

  if (muscles[0] === 'quadriceps') {
    devLog('quadriceps', contentObj)
  }

  return (
    <div className="bg-base-200 flex h-[300px] w-full max-w-md min-w-sm flex-col rounded-lg">
      {/* Header */}
      <div className="flex h-fit w-full items-center">
        {/* Content */}
        <div className="flex flex-1 flex-col justify-center gap-2 p-4">
          <div className="text-md">{name}</div>

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
          <Image
            src={geGithubImage(image)}
            alt={name}
            fill
            sizes="160px"
            className="scale-100 object-cover"
          />
        </div>
      </div>

      {/* Table */}

      <div className="debug h-full"></div>
    </div>
  )
}
