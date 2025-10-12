import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <div className="relative w-full py-10">
      {/* Image Container */}
      <Image
        alt="Stylized body shape"
        width={718}
        height={518}
        className="absolute top-1/2 right-0 z-0 h-auto w-3/4 -translate-y-1/2 opacity-20 md:w-3/5 lg:w-1/2 lg:opacity-100"
        src={'/images/hero/hero-1.jpg'}
      />

      {/* Header */}
      <div className="relative z-10 w-[80%] space-y-8 p-6 lg:w-1/2">
        <h1 className="font-inter text-left leading-tight font-bold *:text-shadow-md">
          <span className="text-muted-foreground block text-4xl font-light">Make Your</span>
          <span className="text-primary block text-4xl font-bold">BODY SHAPE</span>
        </h1>

        <p className="leading-tight">
          Being physically active can improve your brain health, help manage weight, reduce the risk
          of disease, strengthen bones and muscles, and improve your ability to do everyday
          activities.
        </p>

        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default HeroSection
