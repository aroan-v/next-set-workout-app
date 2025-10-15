import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function SectionHeading({ content, subheading, href }) {
  if (!content) {
    return
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-primary text-xl font-bold">{content} </h1>
        {subheading && <p className="text-sm capitalize">{subheading}</p>}
      </div>

      {href && (
        <Button variant={'ghost'} asChild className="flex items-center text-sm">
          <Link href={href}>
            See All
            <ChevronRight />
          </Link>
        </Button>
      )}
    </div>
  )
}

export default SectionHeading
