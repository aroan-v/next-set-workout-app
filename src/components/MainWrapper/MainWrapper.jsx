import { cn } from '@/lib/utils'
import React from 'react'

function MainWrapper({ children, className }) {
  return (
    <main
      className={cn(
        'bg-base-100 relative flex h-full min-h-screen w-full flex-col justify-start gap-8 pt-10 pb-30',
        className
      )}
    >
      {children}
    </main>
  )
}

export default MainWrapper
