import { cn } from '@/lib/utils'
import React from 'react'

export default function TagCategory({ children, className, variant = 'primary', ...props }) {
  const variantClasses = {
    primary: 'bg-primary text-primary-content',
    secondary: 'bg-secondary text-secondary-content',
    accent: 'bg-accent text-accent-content',
    neutral: 'bg-muted-foreground text-muted-foreground-content',
  }

  return (
    <div
      className={cn(
        'absolute -top-2 -right-2 rounded-xs px-2 py-1 text-sm font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
