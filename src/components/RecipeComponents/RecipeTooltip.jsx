'use client'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RecipeTooltip({ color, label, value }) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex hidden cursor-default flex-col items-center gap-1 lg:block">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{label}</span>
              <Info className={cn('text-muted-foreground h-3.5 w-3.5', color)} />
            </div>
            <span className="text-sm"></span>
          </div>
        </TooltipTrigger>

        <TooltipContent
          side="bottom"
          align="center"
          className="max-w-[220px] text-center text-sm leading-snug"
        >
          {value}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
