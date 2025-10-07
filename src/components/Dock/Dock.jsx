import React from 'react'
import DaisyWrapper from '../DaisyWrapper'
import { Dumbbell, House, UserCog } from 'lucide-react'

function Dock() {
  return (
    <DaisyWrapper>
      <div className="ds-dock bg-neutral h-[80]">
        <button className="ds-dock-active">
          <House size={22} />
          <span className="ds-dock-label">Home</span>
        </button>

        <button>
          <Dumbbell size={22} />
          <span className="ds-dock-label">Workout</span>
        </button>

        <button>
          <UserCog size={22} />
          <span className="ds-dock-label">Profile</span>
        </button>
      </div>
    </DaisyWrapper>
  )
}

export default Dock
