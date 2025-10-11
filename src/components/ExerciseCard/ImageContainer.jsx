import Image from 'next/image'
import React from 'react'

export default function ImageContainer({ imageSrc, alt }) {
  return (
    <div className="flex h-30 items-center p-1">
      <div className="relative h-full w-40 shrink-0 overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={alt} fill sizes="160px" className="object-cover" />
      </div>
    </div>
  )
}
