import React from 'react'
import ArticlesSection from '@/components/ArticlesSection'
import PageHeader from '@/components/PageHeader'
import RecommendedExercisesSection from '@/components/RecommendedExercisesSection'
import WeeklyChallengeSection from '@/components/WeeklyChallengeSection'
import HeroSection from '@/components/HeroSection'
import RecipeSection from '@/components/RecipeSection'
import BreakpointShowcase from '@/components/BreakpointShowcase'

export default function HomePage() {
  return (
    <main className="bg-base-100 relative mx-auto flex h-full min-h-screen w-full max-w-4xl flex-col gap-12 overflow-clip pb-30">
      <PageHeader titleContent={'Home'} />
      <HeroSection />
      <RecommendedExercisesSection />
      <WeeklyChallengeSection />
      <RecipeSection />
      <ArticlesSection />
      <BreakpointShowcase />
    </main>
  )
}
