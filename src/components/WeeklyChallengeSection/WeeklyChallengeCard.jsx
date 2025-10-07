import Image from 'next/image'
import React from 'react'

function WeeklyChallengeCard() {
  return (
    <div className="bg-base-200 mx-auto flex h-30 w-100 overflow-clip rounded-xl">
      <div className="flex-1 p-4">
        <h2 className="text-center text-2xl font-medium">Weekly Challenge</h2>
        <p>Plank with Hip Thrust</p>
      </div>
      <div className="relative h-full w-40">
        <Image
          src={'/images/weekly-challenges/weekly-challenge.jpg'}
          className="object-cover"
          fill
          alt=""
        />
      </div>
    </div>
  )
}

export default WeeklyChallengeCard
