import React from 'react'
import DaisyWrapper from '../DaisyWrapper'

function Steps({ viewedCount, totalCount = 3 }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalCount }, (_, i) => (
        <div
          key={i}
          className={`h-2 w-10 rounded-full ${i <= viewedCount ? 'bg-accent' : 'bg-base-200'}`}
        ></div>
      ))}
    </div>
  )
}

export default Steps
