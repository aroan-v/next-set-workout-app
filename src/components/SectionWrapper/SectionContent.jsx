import { cn } from '@/lib/utils'

export default function SectionContent({ children, className, ...props }) {
  return (
    <div className={cn('flex gap-2 overflow-x-scroll', className)} {...props}>
      {children}
    </div>
  )
}
