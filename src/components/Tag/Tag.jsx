import React from 'react'
import { cn } from '@/lib/utils'

function Tag({ items = [], variant = 'primary' }) {
  const variantClasses = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary',
    accent: 'border-accent text-accent',
    neutral: 'border-muted-foreground text-muted-foreground',
  }

  return (
    <>
      {items.map((item, index) => (
        <div
          key={item + index}
          className={cn(
            'w-fit rounded-full border px-2 py-1 text-xs capitalize',
            variantClasses[variant]
          )}
        >
          {item}
        </div>
      ))}
    </>
  )
}

export default Tag
