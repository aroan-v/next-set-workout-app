'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Structure & sizing
        'size-5 shrink-0 rounded-[4px] border shadow-xs outline-none',

        // Base colors
        'border-foreground/30 dark:bg-input/30',

        // Checked state
        'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary',

        // Focus ring
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',

        // Validation
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',

        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',

        // Animation
        'transition-shadow',

        // Peer interactions
        'peer',

        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
