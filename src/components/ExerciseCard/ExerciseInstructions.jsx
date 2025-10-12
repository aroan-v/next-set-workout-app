import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ExerciseInstructions({ instructions }) {
  if (!instructions || instructions.length <= 0) return
  return (
    <Accordion type="single" collapsible className="bg-base-200 mx-2 rounded-xl">
      <AccordionItem className={''} value="item-1">
        <AccordionTrigger className={'px-4'}>Workout Instructions</AccordionTrigger>
        <AccordionContent className="px-6 text-balance">
          <ol className="flex list-inside list-decimal flex-col gap-2">
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
