import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { devLog } from '@/lib/logger'

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-base-300 hover:shadow-primary/50 flex w-[200px] shrink-0 flex-col rounded-xl transition-all duration-300 hover:scale-101 hover:shadow-md active:scale-98',
        className
      )}
      {...props}
    />
  )
}

function CardImageContainer({ className, orientation, sizes, src, alt, ...props }) {
  if (!src || !alt || !sizes) {
    return
  }

  devLog('src', src)

  return (
    <div
      className={cn(
        'relative aspect-video overflow-clip',
        orientation === 'square' && 'aspect-square',
        className
      )}
      {...props}
    >
      <Image src={src} fill className="rounded-xl object-cover" alt={alt} sizes={sizes} />

      <div className="from-base-200 absolute -bottom-10 h-3/5 w-full bg-gradient-to-t to-transparent" />
    </div>
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 p-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn('text-primary truncate text-sm leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="Smart Supplementing"
      className={cn('text-muted-foreground text-xs', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 flex flex-1 items-end self-end p-3',
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return <div data-slot="card-content" className={cn('space-y-1 p-3', className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-3 py-3 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardImageContainer,
}
