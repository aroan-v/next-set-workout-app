import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        glass:
          'backdrop-blur-sm shadow-base-100 rounded-full border text-lg shadow-md hover:bg-secondary/10  hover:border-secondary active:bg-secondary active:text-secondary-content',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-transparent shadow-xs border-neutral hover:bg-base-300 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 ',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        header:
          'hover:bg-accent/20 hover:text-accent-foreground dark:hover:bg-accent/50 hover:scale-101 active:scale-98',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        card: '',
        sm: 'rounded-md text-xs gap-1.5 px-4 py-2 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        glass: 'h-12 w-50',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
      selected: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      selected: 'false',
    },
    compoundVariants: [
      {
        variant: 'default',
        selected: true,
        class: 'bg-white ring-2 ring-primary/40 ',
      },
      {
        variant: 'glass',
        selected: true,
        class: 'bg-secondary text-secondary-content border-secondary shadow-inner scale-95',
      },
      {
        variant: 'outline',
        selected: true,
        class: 'border-secondary text-secondary-content bg-secondary/10 shadow-inner scale-95',
      },
      {
        variant: 'ghost',
        selected: true,
        class: 'bg-accent text-accent-foreground scale-95',
      },
      {
        variant: 'secondary',
        selected: true,
        class: 'bg-secondary/90 text-secondary-content scale-95',
      },
    ],
  }
)

function Button({ className, variant, size, selected, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, selected, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
