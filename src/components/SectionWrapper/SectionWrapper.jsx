import React from 'react'
import { cn } from '@/lib/utils'

function SectionWrapper({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component className={cn('space-y-4 *:px-8', className)} {...props}>
      {children}
    </Component>
  )
}

export default SectionWrapper
