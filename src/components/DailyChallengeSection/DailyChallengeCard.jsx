import Image from 'next/image'
import { Card, CardFooter, CardImageContainer } from '../ui/card'
import { SVGDurationIcon, SVGFireIcon, SVGRunningIcon } from '../SVGIcons'

export default function DailyChallengeCard({}) {
  return (
    <Card className={'bg-base-100 relative mx-auto h-[200px] w-[320px] shadow-lg'}>
      <CardImageContainer
        src={'/images/workout/functional-training.jpg'}
        alt="Functional training"
      />
      <div className="bg-neutral/90 absolute bottom-0 w-full px-4 py-2">
        {/* Workout Name */}
        <div className="text-primary text-sm font-medium">Functional Training</div>

        {/* Workout Details */}
        <div className="flex justify-between text-xs *:flex *:items-center *:gap-1">
          <div>
            <SVGDurationIcon className={'size-3 text-white'} />
            45 minutes
          </div>
          <div>
            <SVGFireIcon className={'size-3 text-white'} />
            1,250 kCal
          </div>
          <span>
            <SVGRunningIcon className={'size-3 text-white'} />
            45 minutes
          </span>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="bg-base-200 mx-auto flex h-30 w-full max-w-sm overflow-clip rounded-xl shadow-lg">
      {/* Title Container */}
      <div className="flex flex-1 flex-col justify-center p-4 text-center">
        <h2 className="text-lg font-medium">Weekly Challenge</h2>
        <p className="text-secondary text-lg sm:text-xl">Plank with Hip Thrust</p>
      </div>

      {/* Image Container */}
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
