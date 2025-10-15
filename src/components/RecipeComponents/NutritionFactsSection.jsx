import React from 'react'
import RecipeStats from './RecipeStats'
import DaisyTooltip from '../DaisyTooltip'
import { macroTooltips } from '@/data/sampleData'

export default function NutritionFactsSection({ calories, protein, fat, carbs }) {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
      {calories && (
        <RecipeStats
          value={calories}
          tooltipContent={macroTooltips.calories}
          variant="primary"
          unit={'kcal'}
        >
          calories
        </RecipeStats>
      )}

      <DaisyTooltip />
      {protein && (
        <RecipeStats
          value={protein}
          tooltipContent={macroTooltips.protein}
          variant="secondary"
          unit={'g'}
        >
          protein
        </RecipeStats>
      )}

      {fat && (
        <RecipeStats value={fat} variant="accent" tooltipContent={macroTooltips.fats} unit={'g'}>
          fats
        </RecipeStats>
      )}

      {carbs && (
        <RecipeStats
          value={carbs}
          variant="neutral"
          tooltipContent={macroTooltips.carbs}
          unit={'g'}
        >
          carbs
        </RecipeStats>
      )}
    </div>
  )
}
