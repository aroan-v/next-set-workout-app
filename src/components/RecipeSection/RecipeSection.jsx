import React from 'react'
import SectionWrapper from '../SectionWrapper'
import SectionHeading from '../SectionHeading'
import Image from 'next/image'
import SectionContent from '../SectionWrapper/SectionContent'
import { Button } from '../ui/button'
import { CircleArrowRight } from 'lucide-react'

function RecipeSection() {
  return (
    <SectionWrapper as="section">
      <SectionHeading content={'Recipes'} />
      <SectionContent className={'flex flex-col items-center'}>
        {/* Recipe Image */}
        <div className="relative h-40 w-full overflow-clip rounded-lg">
          <Image
            src={'/images/recipe/protein-packed power bowl.jpg'}
            alt={''}
            fill
            className="object-cover"
          />
        </div>

        {/* Recipe Content */}
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-bold">Protein-packed power bowl</h2>
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

        <Button>
          View Full Recipe
          <CircleArrowRight />
        </Button>
      </SectionContent>
    </SectionWrapper>
  )
}

export default RecipeSection
