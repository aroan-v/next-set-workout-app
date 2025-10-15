'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import RecipeTooltip from './RecipeTooltip'

export default function RecipeStats({
  value,
  unit,
  variant = 'primary',
  tooltipContent,
  className,
  children,
}) {
  const variantClasses = {
    border: {
      primary: 'border-primary/40',
      secondary: 'border-secondary/40',
      accent: 'border-accent/40',
      neutral: 'border-neutral/60',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      neutral: 'text-neutral-content',
    },
    innerCircle: {
      primary: 'border-primary/80',
      secondary: 'border-secondary/80',
      accent: 'border-accent/80',
      neutral: 'border-gray-200',
    },
    outerCircle: {
      primary: 'border-primary/60',
      secondary: 'border-secondary/60',
      accent: 'border-accent/60',
      neutral: 'border-neutral/80',
    },
  }

  const selectedBorder = variantClasses.border[variant] || variantClasses.border.primary
  const selectedColor = variantClasses.color[variant] || variantClasses.color.primary
  const selectedInner = variantClasses.innerCircle[variant] || variantClasses.innerCircle.primary
  const selectedOuter = variantClasses.outerCircle[variant] || variantClasses.outerCircle.primary

  return (
    <div
      className={cn(
        // Base structure classes
        'bg-base-200/60 relative flex aspect-square min-w-30 flex-col items-center justify-center rounded-xl text-center text-2xl leading-tight font-bold sm:text-3xl',

        // Dynamic variant classes
        // selectedBorder,
        selectedColor,

        // Pass-through className and children (for any additional Tailwind classes)
        className
      )}
    >
      <div>
        <CountUp start={0} end={value} duration={2} />
        <span> {unit}</span>
      </div>
      <div className="-mt-1 text-lg">{children}</div>
      <RecipeTooltip color={selectedColor} value={tooltipContent} />

      {/* Border Circle Inner */}
      {/* <div
        className={cn('absolute -z-10 aspect-square w-3/5 rounded-full border-2', selectedInner)}
      ></div> */}

      {/* Border Circle outer */}
      {/* <div
        className={cn('absolute -z-5 aspect-square w-4/5 rounded-full border-2', selectedOuter)}
      ></div> */}
    </div>
  )
}
