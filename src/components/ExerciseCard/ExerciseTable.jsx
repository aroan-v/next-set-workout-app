import React from 'react'
import { Table, TableBody } from '@/components/ui/table'
import { produce } from 'immer'
import { devLog } from '@/lib/logger'
import ExerciseHeader from './ExerciseHeader'
import ExerciseRow from './ExerciseRow'
import { nanoid } from 'nanoid'

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

        setObj.isDone = !setObj.isDone
        break
      }

      case 'update-input': {
        const setObj = draftState.find(({ id }) => id === action.id)

        if (!setObj) {
          return
        }

        if (action.category === 'reps') {
          setObj.reps = action.value
        }

        if (action.category === 'weight') {
          setObj.weight = action.value
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
  }))
}

export function ExerciseTable({ sets = 3, reps = 10, restTime }) {
  const [state, dispatch] = React.useReducer(reducer, { sets, reps }, initializeState)

  devLog('ExerciseTable - state', state)

  const handleUpdateStatus = React.useCallback(({ id }) => {
    dispatch({ type: 'update-status', id })
  }, [])

  const handleInputChange = React.useCallback(({ id, value, category }) => {
    dispatch({ type: 'update-input', category, id, value })
  }, [])

  return (
    <div className="text-card-foreground rounded-lg">
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
