import React from 'react'
import PropTypes from 'prop-types'
import { SVGDurationIcon, SVGFireIcon, SVGRunningIcon } from '../SVGIcons'

WorkoutStats.propTypes = {
  minutes: PropTypes.number,
  kCal: PropTypes.number,
  exercises: PropTypes.number,
  variant: PropTypes.string,
}

/**
 * WorkoutStats Component
 * @param {number} duration - Total minutes of workout
 * @param {number} kCal - Calories burned
 * @param {number} exercises - Total number of exercises
 * @param {number} variant - Variants of the text and icons
 */
import { cn } from '@/lib/utils' // Assuming you have this utility for merging classes

// Define the class map outside the component to avoid re-creation on every render
const variantClasses = {
  sm: {
    container: 'text-xs max-w-2xs justify-between',
    icon: 'size-3',
  },
  lg: {
    container: 'text-md gap-4 ',
    icon: 'size-5',
  },
}

function WorkoutStats({ minutes, kCal, exercises, variant = 'sm' }) {
  const { container, icon } = variantClasses[variant] || variantClasses.sm

  return (
    <div className={cn('flex w-full flex-wrap *:flex *:items-center *:gap-1', container)}>
      {minutes && (
        <div>
          {/* Use the dynamic icon size */}
          <SVGDurationIcon className={cn(icon, 'text-white')} />
          {minutes} minutes
        </div>
      )}

      {kCal && (
        <div>
          {/* Use the dynamic icon size */}
          <SVGFireIcon className={cn(icon, 'text-white')} />
          {kCal.toLocaleString()} kCal
        </div>
      )}

      {exercises && (
        <div>
          {/* Use the dynamic icon size */}
          <SVGRunningIcon className={cn(icon, 'text-white')} />
          {exercises} exercises
        </div>
      )}
    </div>
  )
}
export default WorkoutStats
