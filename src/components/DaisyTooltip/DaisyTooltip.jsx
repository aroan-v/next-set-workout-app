import React from 'react'
import DaisyWrapper from '../DaisyWrapper'
import { CircleQuestionMark } from 'lucide-react'
import { cn } from '@/lib/utils'

function DaisyTooltip({ content, className }) {
  if (!content) {
    return
  }

  return (
    <DaisyWrapper>
      <div className={cn('ds-tooltip ds-tooltip-bottom font-medium', className)} data-tip={content}>
        <button className="rounded-lg">
          <CircleQuestionMark size={'20'} />
        </button>
      </div>
    </DaisyWrapper>
  )
}

export default DaisyTooltip
