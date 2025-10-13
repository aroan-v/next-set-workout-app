import React from 'react'
import WeeklyChallengeCard from './WeeklyChallengeCard'
import { Trophy } from 'lucide-react'
import StyledWrapper from '../StyledComponents/StyledWrapper'
import SectionWrapper from '../SectionWrapper'

function WeeklyChallengeSection() {
  return (
    <SectionWrapper className="bg-accent/20 relative flex flex-col items-center space-y-4 rounded-xl p-8 *:px-0">
      {/* Heading */}
      <div className="text-primary z-1 flex items-center gap-2 text-xl font-bold text-shadow-md">
        <Trophy />
        <span className="text-foreground"> {"This Week's Challenge"}</span>
      </div>

      {/* Content */}
      <WeeklyChallengeCard />

      <StyledWrapper />
    </SectionWrapper>
  )
}

export default WeeklyChallengeSection
