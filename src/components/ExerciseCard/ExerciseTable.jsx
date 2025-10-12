import React from 'react'
import { Table, TableBody } from '@/components/ui/table'
import { produce } from 'immer'
import { devLog } from '@/lib/logger'
import ExerciseHeader from './ExerciseHeader'
import ExerciseRow from './ExerciseRow'
import { nanoid } from 'nanoid'
import useRestTimerStore from '@/store/useRestTimerStore'
import ExerciseInstructions from './ExerciseInstructions'

const initialSet = [
  { id: 1, weight: 20, reps: 10, isDone: true },
  { id: 2, weight: 25, reps: 8, isDone: true },
  { id: 3, weight: 30, reps: 6, isDone: true },
]

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case 'update-status': {
        const setObj = draftState.find(({ id }) => id === action.id)

        if (!setObj) {
          return
        }

        // Status toggling logic
        const isDone = setObj.isDone
        setObj.isDone = !isDone
        break
      }

      case 'update-input': {
        const setObj = draftState.find(({ id }) => id === action.id)

        if (!setObj) {
          return
        }

        if (action.category === 'reps') {
          setObj.reps = Number(action.value)
        }

        if (action.category === 'weight') {
          setObj.weight = Number(action.value)
        }

        break
      }
    }
  })
}

function initializeState(initial) {
  devLog('initializeState - initial', initial)

  return Array.from({ length: initial.sets }, (_, i) => ({
    reps: initial.reps,
    isDone: false,
    setNumber: i + 1,
    id: nanoid(),
    weight: 0,
  }))
}

export function ExerciseTable({ isOpen, instructions, sets = 3, reps = 10, restTime }) {
  const [state, dispatch] = React.useReducer(reducer, { sets, reps }, initializeState)
  const setRestTimer = useRestTimerStore((s) => s.setRestTimer)

  devLog('ExerciseTable - state', state)

  const dispatchWrapper = React.useCallback(
    (args) => {
      dispatch(args)
      devLog('ExerciseTable - args', args)

      // Signals the RestTimerContainer to start the countdown
      if (args.type === 'update-status' && args.status === false) {
        devLog('fire zustand')

        if (args.restTime > 0) setRestTimer(args.restTime)
      }
    },
    [setRestTimer]
  )

  const handleUpdateStatus = React.useCallback(
    ({ id, status }) => {
      dispatchWrapper({ type: 'update-status', id, restTime, status })
    },

    [restTime, dispatchWrapper]
  )

  const handleInputChange = React.useCallback(
    ({ id, value, category }) => {
      dispatchWrapper({ type: 'update-input', category, id, value })
    },
    [dispatchWrapper]
  )

  if (!isOpen) {
    return
  }

  return (
    <div className="text-card-foreground bg-base-300 space-y-4 rounded-lg py-4">
      <ExerciseInstructions instructions={instructions} />

      <Table>
        <ExerciseHeader />
        <TableBody>
          {state?.map((set, index) => (
            <ExerciseRow
              key={index}
              set={set}
              setNumber={set.setNumber}
              className={`${index % 2 !== 0 && 'bg-base-200'}`}
              handleInputChange={handleInputChange}
              handleUpdateStatus={handleUpdateStatus}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
