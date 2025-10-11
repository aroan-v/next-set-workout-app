'use client'
import { getCountdownPercentageString } from '@/lib/getCountdownPercentageString'
import { devLog } from '@/lib/logger'
import { cn } from '@/lib/utils'
import useRestTimerStore from '@/store/useRestTimerStore'
import { format } from 'date-fns'
import React from 'react'

function RestTimerContainer() {
  const [localCountdown, setLocalCountdown] = React.useState(0)
  const restTimer = useRestTimerStore((s) => s.restTimer)
  const resetSignal = useRestTimerStore((s) => s.resetSignal)

  devLog('restTimer', restTimer)
  devLog('resetSignal', resetSignal)
  devLog('localCountdown', localCountdown)

  let isCountdownZero = localCountdown === 0
  const percentage = getCountdownPercentageString(localCountdown, restTimer)

  devLog('calculatePercentageString', getCountdownPercentageString(localCountdown, restTimer))

  const intervalId = React.useRef(null)
  React.useEffect(() => {
    if (resetSignal === 0) return
    if (typeof restTimer !== 'number' || restTimer <= 0) return
    if (intervalId.current) {
      window.clearInterval(intervalId.current)
    }

    setLocalCountdown(restTimer)

    intervalId.current = window.setInterval(() => {
      setLocalCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          return 0
        }

        if (prevCountdown <= 1) {
          // Do nothing
          window.clearInterval(intervalId.current)
          return 0
        }

        return prevCountdown - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalId.current)
  }, [resetSignal, restTimer])

  return (
    <section className="from-accent/40 to-neutral/0 fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center bg-gradient-to-t pt-15 pb-5 shadow-lg">
      {/* Container */}
      <div className="bg-base-300 relative mx-auto my-auto grid h-full w-[85%] grid-cols-3 justify-items-center gap-4 rounded-xl px-4 py-4 shadow-sm">
        {/* Countdown Numbers */}

        <div></div>
        <RestTimer countdown={localCountdown} />
        <div></div>

        {/* Progress Bar */}
        <div className="col-span-full h-2 w-[90%] overflow-hidden rounded-full bg-neutral-900">
          <div
            className={cn('bg-secondary h-full', isCountdownZero && 'bg-neutral-900')}
            style={{
              width: percentage,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default RestTimerContainer

function RestTimer({ countdown, ...props }) {
  const formattedTime = format(new Date(countdown * 1000), 'mm:ss')

  return <div className="text-xl">{countdown ? formattedTime : '00:00'}</div>

  // This will hide all the numbers after the countdown reaches 0
  // return <>{!!countdown && <div>{formattedTime}</div>}</>;
}
