'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardFooter, CardImageContainer } from '../ui/card'
import WorkoutStats from '../WorkoutStats'
import { devLog } from '@/lib/logger'

export default function DailyChallengeCard({ name, minutes, kCal, src, alt, exercises }) {
  devLog('src', src)
  return (
    <Card className={'bg-base-100 relative mx-auto h-[200px] w-[320px] shadow-lg'}>
      {src && alt && <CardImageContainer src={src} alt={alt} sizes={'320px'} />}
      <div className="bg-neutral/90 absolute bottom-0 w-full px-4 py-2">
        {/* Workout Name */}
        <div className="text-primary text-sm font-medium">{name}</div>

        {/* Workout Details */}
        <WorkoutStats minutes={minutes} kCal={kCal} exercises={exercises} />
      </div>
    </Card>
  )
}
