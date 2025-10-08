import React from 'react'
import ArticlesSection from '@/components/ArticlesSection'
import DaisyWrapper from '@/components/DaisyWrapper'
import Dock from '@/components/Dock'
import PageHeader from '@/components/PageHeader'
import RecommendedExercisesSection from '@/components/RecommendedExercisesSection'
import SectionWrapper from '@/components/SectionWrapper'
import WeeklyChallengeSection from '@/components/WeeklyChallengeSection'

export default function HomePage() {
  return (
    <main className="bg-base-100 relative flex h-full min-h-screen w-full flex-col justify-center gap-8 pb-30">
      <PageHeader titleContent={'Home'} />
      <RecommendedExercisesSection />
      <WeeklyChallengeSection />
      <ArticlesSection />
    </main>
  )
}
