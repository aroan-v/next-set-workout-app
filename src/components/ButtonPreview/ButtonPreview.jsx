'use client'
import { Button } from '@/components/ui/button'
import { LucideFlame, LucideHeart, LucideCheck } from 'lucide-react'

export default function ButtonPreview() {
  const variants = ['default', 'glass', 'destructive', 'outline', 'secondary', 'ghost', 'link']
  const sizes = ['sm', 'default', 'lg', 'glass', 'icon', 'icon-sm', 'icon-lg']

  return (
    <section className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Button Variants Showcase</h1>

      {/*  Variants Preview */}
      <div className="space-y-6">
        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h2 className="text-lg font-semibold capitalize">{variant}</h2>
            <div className="flex flex-wrap items-center gap-3">
              {sizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size.includes('icon') ? (
                    <LucideHeart size={16} />
                  ) : (
                    <>
                      {variant === 'destructive' ? (
                        <LucideFlame className="mr-1" size={16} />
                      ) : (
                        <LucideCheck className="mr-1" size={16} />
                      )}
                      {size}
                    </>
                  )}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
