import Heading from '@/components/Heading'
import NutritionFactsSection from '@/components/RecipeComponents/NutritionFactsSection'
import RecipeFAQ from '@/components/RecipeComponents/RecipeFAQ'
import SectionWrapper from '@/components/SectionWrapper'
import SectionContent from '@/components/SectionWrapper/SectionContent'
import { recipeDirectory, recipeFAQ } from '@/data/sampleData'
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

  const { heroImage, foodName, description, instructions, ingredients, amount, macros, calories } =
    selectedFood
  const alt = `An image of ${foodName}`

  devLog('selectedFood', selectedFood)
  const { carbs, fat, protein } = macros

  return (
    <SectionWrapper className="relative">
      {/* Hero */}
      <div className="relative h-150 w-full overflow-clip">
        <Image src={heroImage} fill alt={alt} sizes="100vw" className="object-cover" />

        {/* Gradient Overlay */}
        <div className="from-accent/100 absolute -bottom-10 left-0 h-50 w-full bg-gradient-to-t to-transparent" />
      </div>

      {/* Hero Food Name Container */}
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="absolute -top-15">
          <Heading level="h1" className="text-shadow-lg">
            {foodName}
          </Heading>
        </div>
      </div>

      {/* Content */}
      <SectionContent className={'mx-auto max-w-4xl flex-col gap-4 pt-10 *:space-y-2 *:p-2'}>
        {/* Macro Stats */}
        <div className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Macros for this serving</h2>
          <NutritionFactsSection protein={protein} calories={calories} fat={fat} carbs={carbs} />
        </div>

        {/* Introduction + Ingredients Container */}
        <div className="flex flex-col gap-4 rounded-lg *:rounded-lg *:p-4 sm:flex-row sm:gap-4">
          {/* Food Details */}
          <div className="sm:w-1/2">
            <h2 className="text-xl font-bold">Introduction</h2>
            <p className="text-md">{description}</p>
          </div>

          {/* Ingredients */}
          <div className="bg-base-200 sm:w-1/2">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <div>
              <ol className="text-md">
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
        <div className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Instructions</h2>
          <ol className="list-inside list-decimal px-4">
            {instructions.map((item, index) => (
              <li key={index + item}>{item}</li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
          <RecipeFAQ faqItems={recipeFAQ} />
        </div>
      </SectionContent>
    </SectionWrapper>
  )
}
