import { cn } from '@/lib/utils'
import { CircleArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ data }) {
  const { id, heroImage, alt = '', foodName, calories, macros, description } = data
  const protein = macros.protein

  return (
    <div className="bg-base-200 flex min-w-75 flex-col rounded-xl">
      {/* Recipe Image */}
      <div
        className={cn(
          'relative aspect-square w-full overflow-clip rounded-xl md:col-span-1',
          // Medium Breakpoint
          'md:h-80'
        )}
      >
        <Image
          src={heroImage}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 412px, 100vw"
        />

        {/* Gradient Overlay */}
        <div className="from-base-300 absolute bottom-0 h-40 w-full bg-gradient-to-t to-transparent" />

        {/* Food Name */}
        <div className="absolute bottom-0 left-1/2 w-4/5 -translate-x-1/2 text-center text-2xl leading-none font-bold text-shadow-lg">
          {foodName}
        </div>
      </div>

      {/* Recipe Content */}
      <div className="flex flex-1 flex-col justify-between space-y-4 p-4">
        <div className="space-y-2 text-center md:text-left">
          {/* Tags */}
          <div className="flex flex-col items-center justify-center gap-1">
            {/* Calories */}
            <div className="text-primary flex items-center gap-1 text-xs leading-tight font-bold">
              <span className="text-foreground font-normal">Calories:</span>
              {calories}
              <span className="text-xs">kCal</span>
            </div>

            {/* Protein */}
            <div className="text-secondary flex items-center gap-1 text-xs leading-tight font-bold">
              <span className="text-foreground font-normal">Protein:</span>
              {protein}
              <span className="">g</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 text-sm">{description}</div>
        </div>

        {/* Action */}
        {id && (
          <Button asChild className={''}>
            <Link href={`/recipes/${id}`}>
              Check recipe
              <CircleArrowRight />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
