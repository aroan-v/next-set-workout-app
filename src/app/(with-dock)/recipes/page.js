import React from 'react'

import { recipeDirectory } from '@/data/sampleData'
import { devLog } from '@/lib/logger'
import SectionWrapper from '@/components/SectionWrapper'
import SectionHeading from '@/components/SectionHeading'
import NavBarSpacer from '@/components/NavBar/NavBarSpacer'
import BreakpointShowcase from '@/components/BreakpointShowcase'
import RecipeCard from '@/components/RecipeComponents/RecipeCard'

export default function RecipesPage() {
  const data = recipeDirectory[0]

  const recipeArray = [...recipeDirectory]
  devLog('RecipeSection - data', data)

  return (
    <SectionWrapper as="section">
      <NavBarSpacer />
      <SectionHeading content={'Featured Recipes'} />

      {/* Recipe Container */}
      <div className="flex gap-4 overflow-scroll">
        {recipeArray.map((data, index) => (
          <RecipeCard key={index} data={data} />
        ))}
      </div>
      <BreakpointShowcase />
    </SectionWrapper>
  )
}
