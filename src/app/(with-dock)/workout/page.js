'use client'
import ButtonPreview from '@/components/ButtonPreview'
import DailyChallengeSection from '@/components/DailyChallengeSection'
import PageHeader from '@/components/PageHeader'
import SectionWrapper from '@/components/SectionWrapper'
import { Button } from '@/components/ui/button'
import WeeklyChallengeSection from '@/components/WeeklyChallengeSection'
import { devLog } from '@/lib/logger'
import React from 'react'

export default function ExplorePage() {
  const levels = ['Beginner', 'Intermediate', 'Advanced']
  const [currentLevel, setCurrentLevel] = React.useState(levels[0])
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/exercises')

      if (!res.ok) throw new Error('Failed to fetch exercises!')

      const data = await res.json()
      devLog('data', data)
    }

    fetchData()
  }, [])

  return (
    <main className="bg-base-100 relative flex h-full min-h-screen w-full flex-col justify-start gap-8 pt-10 pb-30">
      <PageHeader titleContent={'Workout'} />

      {/* Level Section */}
      <SectionWrapper className="flex gap-2">
        {levels.map((level) => (
          <Button
            key={level}
            size={'lg'}
            onClick={() => setCurrentLevel(level)}
            selected={currentLevel === level}
          >
            {level}
          </Button>
        ))}
      </SectionWrapper>

      <DailyChallengeSection />
    </main>
  )
}
