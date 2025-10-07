import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { devLog } from '@/lib/logger'

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-base-300 flex w-[200px] shrink-0 flex-col overflow-hidden rounded-xl shadow-lg',
        className
      )}
      {...props}
    />
  )
}

function CardImageContainer({ className, orientation, src, alt, ...props }) {
  if (!src || !alt) {
    return
  }

  devLog('src', src)

  return (
    <div
      className={cn(
        'relative aspect-video',
        orientation === 'square' && 'aspect-square',
        className
      )}
      {...props}
    >
      <Image src={src} fill className="object-cover" alt={alt} />
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
      className={cn('text-primary text-sm leading-none font-semibold', className)}
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
