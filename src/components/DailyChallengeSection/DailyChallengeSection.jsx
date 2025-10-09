import React from 'react'
import DailyChallengeCard from './DailyChallengeCard'
import { dailyChallengeCardContent } from '@/data/sampleData'
import { cn } from '@/lib/utils'
import { devLog } from '@/lib/logger'

function DailyChallengeSection({ className, contentObj }) {
  const { name, kCal, exercises, minutes, src, alt } = contentObj || dailyChallengeCardContent

  devLog('dailyChallengeSectionSRC', src)

  devLog('DailyChallengeSection - contentObj', contentObj)

  return (
    <section className={cn('bg-accent relative w-screen p-8', className)}>
      <DailyChallengeCard
        name={name}
        minutes={minutes}
        kCal={kCal}
        exercises={exercises}
        src={src}
        alt={alt}
      />
    </section>
  )
}

export default DailyChallengeSection
