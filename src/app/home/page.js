import DaisyWrapper from '@/components/DaisyWrapper'
import Dock from '@/components/Dock'
import RecommendedExercisesSection from '@/components/RecommendedExercisesSection'
import SectionWrapper from '@/components/SectionWrapper'
import WeeklyChallengeSection from '@/components/WeeklyChallengeSection'

export default function HomePage() {
  return (
    <section className="bg-base-100 relative flex h-full min-h-screen w-full flex-col justify-center gap-8">
      <RecommendedExercisesSection />
      <WeeklyChallengeSection />

      <Dock />
    </section>
  )
}
