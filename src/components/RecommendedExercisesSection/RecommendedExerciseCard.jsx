import React from 'react'
import { devLog } from '@/lib/logger'
import { Card, CardContent, CardImageContainer, CardTitle } from '../ui/card'
import { SVGDurationIcon, SVGFireIcon } from '../SVGIcons'
import PropTypes from 'prop-types'

RecommendedExerciseCard.propTypes = {
  contentObject: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    minutes: PropTypes.number,
    kcal: PropTypes.number,
  }),
}

/**
 * ExerciseCard Component
 *
 * Displays a card for a workout exercise including its image, title, duration, and calories burned.
 *
 * @param {Object} props
 * @param {Object} props.contentObject - The object containing exercise details
 * @param {string} [props.contentObject.src] - Image source URL
 * @param {string} [props.contentObject.alt] - Alt text for the image
 * @param {string} [props.contentObject.title] - Title of the exercise
 * @param {number} [props.contentObject.minutes=0] - Duration of the exercise in minutes
 * @param {number} [props.contentObject.kcal=0] - Calories burned during the exercise
 */

export default function RecommendedExerciseCard({ contentObject }) {
  devLog('contentObject', contentObject)

  if (!contentObject) return

  const { src = '', alt = '', title = '', minutes = 0, kcal = 0 } = contentObject

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
