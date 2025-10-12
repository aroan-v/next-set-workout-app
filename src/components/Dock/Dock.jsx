'use client'
import React from 'react'
import DaisyWrapper from '../DaisyWrapper'
import { useRouter } from 'next/navigation'
import { Dumbbell, House, UserCog } from 'lucide-react'
import { cn } from '@/lib/utils'

function Dock() {
  const router = useRouter()
  const [lastSelected, setLastSelected] = React.useState('home')

  function handleClick({ id }) {
    router.push(`/${id}`)
    setLastSelected(id)
  }

  return (
    <DaisyWrapper>
      <div className="ds-dock bg-neutral h-[80]">
        <button
          onClick={() => handleClick({ id: 'home' })}
          className={cn(lastSelected === 'home' && 'ds-dock-active')}
        >
          <House size={22} />
          <span className="ds-dock-label">Home</span>
        </button>

        <button
          onClick={() => handleClick({ id: 'workout' })}
          className={cn(lastSelected === 'workout' && 'ds-dock-active')}
        >
          <Dumbbell size={22} />
          <span className="ds-dock-label">Workout</span>
        </button>

        <button
          onClick={() => handleClick({ id: 'nutrition' })}
          className={cn(lastSelected === 'Nutrition' && 'ds-dock-active')}
        >
          <UserCog size={22} />
          <span className="ds-dock-label">Nutrition</span>
        </button>
      </div>
    </DaisyWrapper>
  )
}

export default Dock
