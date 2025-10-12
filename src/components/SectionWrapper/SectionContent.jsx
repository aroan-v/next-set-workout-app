import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionContent({ children, className, ...props }) {
  return (
    <div className={cn('flex gap-2', className)} {...props}>
      {children}
    </div>
  )
}
