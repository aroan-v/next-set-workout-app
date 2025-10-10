import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // ─── Base Layout & Sizing ───────────────────────────────
        'w-full min-w-0 rounded-md py-1 text-center text-base md:text-sm',

        // ─── Colors & Background ────────────────────────────────
        'dark:bg-input/30 border-foreground/20 border bg-transparent file:bg-transparent',
        'text-foreground placeholder:text-muted-foreground file:text-foreground',

        // ─── File Input Styles ──────────────────────────────────
        'file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium',

        // ─── Interactions & Focus States ────────────────────────
        'selection:bg-primary selection:text-primary-foreground shadow-xs transition-[color,box-shadow] outline-none',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',

        // ─── Invalid / Error States ─────────────────────────────
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',

        // ─── Disabled State ─────────────────────────────────────
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',

        className
      )}
      {...props}
    />
  )
}

export { Input }
