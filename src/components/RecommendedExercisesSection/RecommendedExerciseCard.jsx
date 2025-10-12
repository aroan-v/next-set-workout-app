import React from 'react'
import { devLog } from '@/lib/logger'
import PropTypes from 'prop-types'
import { Card, CardContent, CardImageContainer, CardTitle } from '../ui/card'
import Link from 'next/link'
import WorkoutStats from '../WorkoutStats'
import TagCategory from '../Tag/TagCategory'

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

  const { src = '', alt = '', name = '', minutes = 0, id, kCal, category } = contentObject

  if (!name) {
    return
  }

  return (
    <Link className="" href={`/workout/${id}`}>
      <Card className={'relative w-[200px]'}>
        {/* Image */}
        <CardImageContainer src={src} alt={alt} sizes={'200px'} />

        {/* Content */}
        <CardContent>
          <CardTitle>{name}</CardTitle>

          {/* Stats */}
          <WorkoutStats minutes={minutes} kCal={kCal} />

          {/* Tag */}
          <TagCategory variant="accent">{category}</TagCategory>
        </CardContent>
      </Card>
    </Link>
  )
}
