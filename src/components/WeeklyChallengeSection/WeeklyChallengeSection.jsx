import React from 'react'
import WeeklyChallengeCard from './WeeklyChallengeCard'

function WeeklyChallengeSection() {
  return (
    <section className="bg-secondary relative flex w-screen flex-col items-center p-8">
      <div>Weekly Challenge</div>
      <WeeklyChallengeCard />
    </section>
  )
}

export default WeeklyChallengeSection
