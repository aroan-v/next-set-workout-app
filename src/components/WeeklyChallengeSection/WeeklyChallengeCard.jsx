import Image from 'next/image'
import React from 'react'

import { workoutChallenges } from '@/data/sampleData'
import { devLog } from '@/lib/logger'

function WeeklyChallengeCard() {
  const data = workoutChallenges[0]
  devLog('WeeklyChallengeCard - data', data)

  const { title: name } = data

  return (
    <div className="bg-base-200 mx-auto flex h-30 w-full max-w-sm overflow-clip rounded-xl shadow-lg">
      {/* Title Container */}
      <div className="flex flex-1 flex-col justify-center p-4 text-center">
        <p className="text-lg font-bold sm:text-xl">{name}</p>
      </div>

      {/* Image Container */}
      <div className="relative h-full w-40">
        <Image
          src={'/images/weekly-challenges/weekly-challenge.jpg'}
          className="object-cover"
          fill
          sizes="160px"
          alt=""
        />
      </div>
    </div>
  )
}

export default WeeklyChallengeCard
