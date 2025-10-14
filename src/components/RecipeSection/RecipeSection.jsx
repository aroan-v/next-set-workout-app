import React from 'react'
import SectionWrapper from '../SectionWrapper'
import SectionHeading from '../SectionHeading'
import Image from 'next/image'
import SectionContent from '../SectionWrapper/SectionContent'
import { Button } from '../ui/button'
import { CircleArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Tag from '../Tag'
import Link from 'next/link'

function RecipeSection() {
  const id = 'french-toast'
  return (
    <SectionWrapper as="section">
      <SectionHeading content={'Recipes'} />
      <SectionContent className={'grid items-center md:grid-cols-2'}>
        {/* Recipe Image */}
        <div
          className={cn(
            'relative h-40 w-full overflow-clip rounded-lg border md:col-span-1',

            // Medium Breakpoint
            'h-80'
          )}
        >
          <Image
            src={'/images/recipe/protein-packed power bowl.jpg'}
            alt={''}
            fill
            className="object-cover"
          />
        </div>

        {/* Recipe Content */}
        <div className="space-y-4 p-4">
          <div className="space-y-2 text-center md:text-left">
            {/* Food Name */}
            <h2 className="text-lg font-bold">Protein-packed power bowl</h2>

            <Tag items={['683 kCal', '596 protein']} />

            {/* Description */}
            <div className="space-y-2 text-sm">
              <p>
                A colorful protein-packed power bowl filled with flavorful, meaty grilled satay tofu
                and an array of vibrant veggies on a bed of fluffy quinoa.
              </p>
              <p>
                Completed with a healthy and delicious satay dipping sauce and crushed roasted
                peanuts. Delicious!
              </p>
            </div>
          </div>

          {/* Action */}
          <Button asChild className={''}>
            <Link href={`/recipes/${id}`}>
              Check recipe
              <CircleArrowRight />
            </Link>
          </Button>
        </div>
      </SectionContent>
    </SectionWrapper>
  )
}

export default RecipeSection
