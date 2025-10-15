import React from 'react'
import SectionWrapper from '../SectionWrapper'
import SectionHeading from '../SectionHeading'
import Image from 'next/image'
import SectionContent from '../SectionWrapper/SectionContent'
import { Button } from '../ui/button'
import { CircleArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { recipeDirectory } from '@/data/sampleData'
import { devLog } from '@/lib/logger'
import RecipeCard from '../RecipeComponents/RecipeCard'

function RecipeSection() {
  const data = recipeDirectory[0]
  const recipeArray = recipeDirectory.slice(1)
  devLog('RecipeSection - data', data)

  const { id, heroImage, alt = '', foodName, calories, macros, description } = data
  const protein = macros.protein

  return (
    <SectionWrapper as="section">
      <SectionHeading content={'Recipes'} href={'/recipes'} />
      <SectionContent>
        <div className="bg-base-200 grid items-center rounded-xl md:grid-cols-2">
          {/* Recipe Image */}
          <div
            className={cn(
              'relative h-40 w-full overflow-clip rounded-lg md:col-span-1',
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
          </div>

          {/* Recipe Content */}
          <div className="flex flex-col space-y-4 p-4">
            <div className="space-y-2 text-center md:text-left">
              {/* Food Name */}
              <div className="text-lg font-bold md:text-3xl">{foodName}</div>

              {/* Tags */}
              <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:justify-start md:gap-4 md:*:text-lg">
                {/* Calories */}
                <div className="text-primary flex items-center gap-1 leading-tight font-bold">
                  <span className="text-foreground font-normal">Calories:</span>
                  {calories}
                  <span className="">kCal</span>
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
            <Button asChild className={''}>
              <Link href={`/recipes/${id}`}>
                Check recipe
                <CircleArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </SectionContent>

      {/* Other recipes */}
      <div className="flex gap-4 overflow-scroll">
        {recipeArray.map((data, index) => (
          <RecipeCard key={index} data={data} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default RecipeSection
