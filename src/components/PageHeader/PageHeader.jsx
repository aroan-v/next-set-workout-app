import React from 'react'
import SectionWrapper from '../SectionWrapper'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { SVGBackIcon } from '../SVGIcons'

function PageHeader({ titleContent, href }) {
  return (
    <SectionWrapper as="header" className="text-accent * flex items-center gap-2 space-y-0">
      {href && (
        <Link className="hover:scale-110" href={href}>
          <SVGBackIcon className={'text-foreground size-5'} />
        </Link>
      )}

      <h1 className="text-xl font-bold">{titleContent}</h1>
    </SectionWrapper>
  )
}

export default PageHeader
