import React from 'react'

export default function OverflowContainer({ children }) {
  return <div className="flex gap-4 overflow-x-scroll py-4 pr-[75px]">{children}</div>
}
