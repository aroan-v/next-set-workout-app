import Image from 'next/image'
import React from 'react'

const object = {
  id: 'the-spartan-core-challenge',
  title: 'The Spartan Core Challenge',
  durationDays: 7,
  theme: 'Unbreakable Foundation',
  focus: 'Static Core Strength & Stability',
  goal: 'Accumulate the most time in various plank and static hold positions by the end of the week.',
  dailyWorkouts: [
    {
      day: 1,
      workout: 'Plank Hold Mastery: 3 sets of maximum duration standard plank.',
      targetArea: 'Abdominals',
    },
    {
      day: 2,
      workout: 'Side Plank Burn: 3 sets of 30-60 seconds per side (left/right).',
      targetArea: 'Obliques',
    },
    {
      day: 3,
      workout: 'Active Recovery: 10 mins of Cat-Cow, Bird-Dog, and hip bridges.',
      targetArea: 'Low Back/Spine',
    },
    {
      day: 4,
      workout: 'Reverse Plank Time: 3 sets of maximum duration reverse plank hold.',
      targetArea: 'Glutes, Triceps',
    },
    {
      day: 5,
      workout: 'Hollow Hold Hell: 3 sets of 30-second Hollow Hold, resting 15 seconds.',
      targetArea: 'Deep Core',
    },
    {
      day: 6,
      workout:
        'Core Circuit: Plank (60s), Side Plank (L) (30s), Side Plank (R) (30s). Repeat 2 times.',
      targetArea: 'Full Core',
    },
    {
      day: 7,
      workout: 'Rest & Reflect: Quick 5-minute torso stretch.',
      targetArea: 'Mobility',
    },
  ],
}

import { workoutChallenges } from '@/data/sampleData'
import { devLog } from '@/lib/logger'
import { cn } from '@/lib/utils'

function WeeklyChallengeCard() {
  const data = workoutChallenges[0]
  devLog('WeeklyChallengeCard - data', data)

  const { title: name, goal } = data

  return (
    <div className="relative z-10 mx-auto flex w-3/4 max-w-2xl flex-col items-center overflow-clip rounded-lg text-left shadow-lg">
      {/* Image allocation */}
      <div
        className={cn(
          'relative',

          // Mobile
          'w-full',

          // Small breakpoint
          'sm:w-[30%]'
        )}
      >
        {/* Image container */}
        <div
          className={cn(
            'relative mx-auto',

            // Mobile
            // 'top-1/2 left-1/2 w-full -translate-y-1/2',
            // 'left-1/2 w-[70%] -translate-x-1/2',
            'aspect-video w-full',

            // Small breakpoint
            'sm:absolute sm:-left-5'
          )}
        >
          {/* Image Container */}
          <Image
            src={'/images/weekly-challenges/weekly-challenge.jpg'}
            className="object-cover"
            fill
            alt=""
          />
        </div>
      </div>

      {/*Content Container */}
      <div className="bg-accent relative z-10 flex w-full flex-1 flex-col items-center justify-center space-y-1 py-4 text-center">
        <h2 className="text-xl font-bold sm:text-xl">{name}</h2>

        <p className="w-3/4 text-xs leading-tight">{goal}</p>
      </div>
    </div>
  )

  // return (
  //   <div className="bg-accent relative z-10 mx-auto flex w-full max-w-sm flex-col overflow-clip rounded-xl shadow-lg">
  //     <div className="relative h-40 w-full">
  //       {/* Image Container */}
  //       <Image
  //         src={'/images/weekly-challenges/weekly-challenge.jpg'}
  //         className="object-cover"
  //         fill
  //         alt=""
  //       />
  //     </div>

  //     {/*Content Container */}
  //     <div className="relative z-10 flex flex-1 flex-col justify-center space-y-1 p-4 text-center">
  //       <h2 className="text-xl font-bold sm:text-xl">{name}</h2>

  //       <p className="text-xs leading-tight">{goal}</p>
  //     </div>
  //   </div>
  // )
}

export default WeeklyChallengeCard
