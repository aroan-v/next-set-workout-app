import Image from 'next/image'
import React from 'react'

function WeeklyChallengeCard() {
  return (
    <div className="bg-base-200 mx-auto flex h-30 w-100 overflow-clip rounded-xl shadow-lg">
      <div className="flex flex-1 flex-col justify-center p-4 text-center">
        <h2 className="text-lg font-medium">Weekly Challenge</h2>
        <p className="text-secondary text-xl">Plank with Hip Thrust</p>
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
