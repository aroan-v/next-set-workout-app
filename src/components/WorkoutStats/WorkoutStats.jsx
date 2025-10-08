import React from 'react'
import PropTypes from 'prop-types'
import { SVGDurationIcon, SVGFireIcon, SVGRunningIcon } from '../SVGIcons'

WorkoutStats.propTypes = {
  minutes: PropTypes.number,
  kCal: PropTypes.number,
  exercises: PropTypes.number,
}

/**
 * WorkoutStats Component
 * @param {number} duration - Total minutes of workout
 * @param {number} kCal - Calories burned
 * @param {number} exercises - Total number of exercises
 */

function WorkoutStats({ minutes, kCal, exercises }) {
  return (
    <div className="flex max-w-2xs flex-wrap justify-between text-xs *:flex *:items-center *:gap-1">
      {minutes && (
        <div>
          <SVGDurationIcon className={'size-3 text-white'} />
          {minutes} minutes
        </div>
      )}

      {kCal && (
        <div>
          <SVGFireIcon className={'size-3 text-white'} />
          {kCal.toLocaleString()} kCal
        </div>
      )}

      {exercises && (
        <div>
          <SVGRunningIcon className={'size-3 text-white'} />
          {exercises} exercises
        </div>
      )}
    </div>
  )
}

export default WorkoutStats
