import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva(
  // Base classes: always applied
  'font-sans tracking-tight leading-snug',
  {
    variants: {
      level: {
        h1: 'text-5xl font-extrabold',
        h2: 'text-4xl font-bold border-b pb-2',
        h3: 'text-3xl font-semibold',
        h4: 'text-2xl font-medium',
        h5: 'text-xl font-medium',
        h6: 'text-lg font-medium',
      },
      size: {
        default: '',
        lg: 'text-6xl',
        sm: 'text-base',
        xs: 'text-sm',
      },
      color: {
        default: 'text-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-error',
        accent: 'text-accent',
        neutral: 'text-neutral',
      },
      uppercase: {
        true: 'uppercase',
      },
    },
    defaultVariants: {
      level: 'h1',
      color: 'default',
    },
    compoundVariants: [
      {
        level: 'h2',
        color: 'primary',
        className: 'font-extrabold',
      },
      {
        size: 'lg',
        className: 'tracking-tighter',
      },
    ],
  }
)

export default function Heading({
  className,
  level = 'h1',
  size,
  color,
  uppercase,
  children,
  ...props
}) {
  const Tag = level

  return (
    <Tag
      // Apply classes using cn and headingVariants
      className={cn(headingVariants({ level, size, color, uppercase, className }))}
      {...props}
    >
      {children}
    </Tag>
  )
}

Heading.displayName = 'Heading'

export { headingVariants }
