import { cn } from '@/lib/utils'
import React from 'react'

export default function TagContainer({ children, className }) {
  return <div className={cn('flex flex-wrap gap-2', className)}>{children}</div>
}
