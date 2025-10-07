import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function SectionHeading({ content, handleSeeAll }) {
  if (!content) {
    return
  }

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-md text-primary font-medium">{content} </h1>

      {handleSeeAll && (
        <Button variant={'ghost'} onClick={handleSeeAll} className="flex items-center text-sm">
          See All
          <ChevronRight />
        </Button>
      )}
    </div>
  )
}

export default SectionHeading
