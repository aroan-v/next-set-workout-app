import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function RecipeFAQ({ faqItems }) {
  if (!faqItems || faqItems.length <= 0) return null

  return (
    <Accordion type="single" collapsible className="bg-base-200 mx-2 rounded-xl">
      {faqItems.map((item, index) => (
        <AccordionItem className={'border-base-300'} key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="px-4 text-left text-lg">{item.question}</AccordionTrigger>
          <AccordionContent className="px-6 text-base text-balance">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
