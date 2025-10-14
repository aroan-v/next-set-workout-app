import React from 'react'
import Heading from '../Heading'

const HeadingShowcase = () => {
  return (
    <div className="bg-background text-foreground space-y-10 p-8">
      <h2 className="mb-6 border-b pb-2 text-3xl font-bold">Heading Component Showcase</h2>

      {/* 1. Default Level Showcase (h1 to h6) */}
      <section className="space-y-4">
        <h3 className="mb-4 border-b pb-1 text-xl font-semibold">1. Default Levels</h3>

        {/* Note: The level prop determines the underlying HTML tag AND the default styling */}
        <div className="flex items-baseline justify-between border-b py-2">
          <Heading level="h1">Heading Level 1 (h1)</Heading>
          <span className="text-sm text-gray-500">text-5xl font-extrabold</span>
        </div>

        <div className="flex items-baseline justify-between border-b py-2">
          <Heading level="h2">Heading Level 2 (h2)</Heading>
          <span className="text-sm text-gray-500">text-4xl font-bold border-b</span>
        </div>

        <div className="flex items-baseline justify-between border-b py-2">
          <Heading level="h3">Heading Level 3 (h3)</Heading>
          <span className="text-sm text-gray-500">text-3xl font-semibold</span>
        </div>

        <div className="flex items-baseline justify-between border-b py-2">
          <Heading level="h4">Heading Level 4 (h4)</Heading>
          <span className="text-sm text-gray-500">text-2xl font-medium</span>
        </div>

        <div className="flex items-baseline justify-between border-b py-2">
          <Heading level="h5">Heading Level 5 (h5)</Heading>
          <span className="text-sm text-gray-500">text-xl font-medium</span>
        </div>

        <div className="flex items-baseline justify-between border-b py-2">
          <Heading level="h6">Heading Level 6 (h6)</Heading>
          <span className="text-sm text-gray-500">text-lg font-medium</span>
        </div>
      </section>

      <hr className="my-8" />

      {/* 2. Color Variants Showcase */}
      <section className="space-y-4">
        <h3 className="mb-4 border-b pb-1 text-xl font-semibold">2. Color Variants (Level h3)</h3>

        <Heading level="h3" color="default">
          Default Color (text-foreground)
        </Heading>
        <Heading level="h3" color="primary">
          Primary Color (text-primary)
        </Heading>
        <Heading level="h3" color="secondary">
          Secondary Color (text-secondary)
        </Heading>
        <Heading level="h3" color="accent">
          Accent Color (text-accent)
        </Heading>
        <Heading level="h3" color="destructive">
          Destructive Color (text-error)
        </Heading>
        <Heading level="h3" color="neutral">
          Neutral Color (text-neutral)
        </Heading>
      </section>

      <hr className="my-8" />

      {/* 3. Size and Uppercase Showcase */}
      <section className="space-y-4">
        <h3 className="mb-4 border-b pb-1 text-xl font-semibold">
          3. Size & Uppercase Variants (Level h3)
        </h3>

        {/* Large Size Example (note the compound variant: tracking-tighter) */}
        <Heading level="h3" size="lg" color="primary">
          Extra Large Heading (size="lg")
        </Heading>

        {/* Small Size Example */}
        <Heading level="h3" size="sm" color="secondary">
          Small Heading (size="sm")
        </Heading>

        {/* Extra Small Size Example */}
        <Heading level="h3" size="xs" color="accent">
          Extra Small Heading (size="xs")
        </Heading>

        {/* Uppercase Example */}
        <Heading level="h3" uppercase>
          Uppercase Heading
        </Heading>

        {/* Compound Variant Example */}
        <Heading level="h2" color="primary">
          h2 with primary color (font-extrabold)
        </Heading>
      </section>
    </div>
  )
}

export default HeadingShowcase
