import DaisyWrapper from '@/components/DaisyWrapper'
import Dock from '@/components/Dock'
import SectionWrapper from '@/components/SectionWrapper'
import WeeklyChallengeSection from '@/components/WeeklyChallengeSection'

export default function HomePage() {
  return (
    <section className="bg-base-100 relative flex min-h-screen w-full flex-col justify-center">
      <WeeklyChallengeSection />
      <Dock />
    </section>
  )
}
