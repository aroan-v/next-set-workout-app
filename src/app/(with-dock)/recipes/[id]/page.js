import BreakpointShowcase from '@/components/BreakpointShowcase'
import Heading from '@/components/Heading'
import HeadingShowcase from '@/components/HeadingShowcase'
import SectionWrapper from '@/components/SectionWrapper'
import SectionContent from '@/components/SectionWrapper/SectionContent'
import { recipeDirectory } from '@/data/sampleData'
import { devLog } from '@/lib/logger'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function RecipePage({ params }) {
  const { id } = await params
  const selectedFood = recipeDirectory.find(({ id: routineId }) => id === routineId)

  if (!selectedFood) {
    notFound()
  }

  const { heroImage, foodName, description, instructions, ingredients, amount, unit } = selectedFood
  const alt = `An image of ${foodName}`

  devLog('selectedFood', selectedFood)

  return (
    <SectionWrapper className="relative">
      {/* Image container */}

      {/* Hero */}
      <div className="relative h-150 w-full overflow-clip">
        <Image src={heroImage} fill alt={alt} className="object-cover" />

        {/* Gradient Overlay */}
        <div className="from-accent/100 absolute -bottom-10 left-0 h-50 w-full bg-gradient-to-t to-transparent" />
      </div>

      {/* Food Name Container */}
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="absolute -top-15">
          <Heading level="h1" className="text-shadow-lg">
            {foodName}
          </Heading>
        </div>
      </div>

      {/* Content */}
      <SectionContent className={'mx-auto max-w-4xl flex-col pt-10'}>
        <div className="*: flex flex-col gap-8 rounded-lg *:space-y-2 *:p-4 sm:flex-row">
          {/* Food Details */}
          <div className="w-1/2">
            <h2 className="text-xl font-bold">Introduction</h2>
            <p className="text-sm">{description}</p>
          </div>

          {/* Ingredients */}
          <div className="bg-base-200 w-1/2">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <div>
              <ol className="text-sm">
                {ingredients.map(({ food, amount, unit }, index) => (
                  <li className="flex items-center justify-between capitalize" key={index + food}>
                    <span>{food}</span>
                    <span className="mx-2 h-[1px] flex-1 border-b border-dotted border-gray-400" />
                    <span>
                      {amount} {unit}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-2 px-4">
          <h2 className="text-xl font-bold">Instructions</h2>
          <ol className="list-inside list-decimal px-4">
            {instructions.map((item, index) => (
              <li key={index + item}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="debug h-200"></div>
      </SectionContent>

      <HeadingShowcase />
      <BreakpointShowcase />
    </SectionWrapper>
  )
}
