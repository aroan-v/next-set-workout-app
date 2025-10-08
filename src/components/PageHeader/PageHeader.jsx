import React from 'react'
import SectionWrapper from '../SectionWrapper'

function PageHeader({ titleContent }) {
  return (
    <SectionWrapper as="header" className="">
      <h1 className="text-accent text-2xl font-bold">{titleContent}</h1>
    </SectionWrapper>
  )
}

export default PageHeader
