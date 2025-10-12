import React from 'react'
import WorkoutStats from '../WorkoutStats'
import Link from 'next/link'
import TagContainer from '../Tag/TagContainer'
import Tag from '../Tag'
import ImageContainer from '../ExerciseCard/ImageContainer'
import { Button } from '../ui/button'

export default function RoutineCard({ obj }) {
  const { id, name, exercises, kCal, minutes, src, tags, alt } = obj

  return (
    <Button
      className={'bg-base-200 flex w-full items-center overflow-hidden rounded-lg'}
      asChild
      size={'card'}
      variant={'header'}
    >
      <Link href={`/workout/${id}`}>
        {/* Content */}
        <div className="my-auto flex-1 space-y-2 p-6">
          {/* Routine Name */}
          <div className="font-inter text-left text-lg text-wrap break-words">{name}</div>
          <WorkoutStats minutes={minutes} kCal={kCal} exercises={exercises.length} />

          {/* Tags */}
          <TagContainer className={''}>
            {tags.map(({ color, content }, index) => (
              <Tag key={index} items={[content]} variant={color} />
            ))}
          </TagContainer>
        </div>

        {/* Image Container */}
        {src && alt && <ImageContainer imageSrc={src} alt={alt} />}
        {/* </div> */}
      </Link>
    </Button>
  )
}
