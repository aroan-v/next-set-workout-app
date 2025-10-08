import { devLog } from '@/lib/logger'
import { Card, CardContent, CardImageContainer, CardTitle } from '../ui/card'
import { SVGDurationIcon, SVGFireIcon } from '../SVGIcons'

export default function ExerciseCard({ contentObject }) {
  devLog(contentObject)
  const { src, alt, title, minutes, kcal } = contentObject

  if (!title) {
    return
  }

  return (
    <Card>
      {/* Image */}
      <CardImageContainer src={src} alt={alt} />

      {/* Content */}
      <CardContent>
        <CardTitle>{title}</CardTitle>

        {/* Stats */}
        <div className="flex justify-between text-xs *:flex *:items-center *:gap-1">
          {/* Duration */}
          <div>
            <SVGDurationIcon className={'size-3'} />
            {minutes} Minutes
          </div>

          {/* Kcal */}
          <div>
            <SVGFireIcon className={'size-3'} />
            {kcal} kCal
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
