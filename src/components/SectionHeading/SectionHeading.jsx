import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function SectionHeading({ content, subheading, handleSeeAll }) {
  if (!content) {
    return
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-md text-primary font-medium">{content} </h1>
        {subheading && <p className="text-sm capitalize">{subheading}</p>}
      </div>

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
