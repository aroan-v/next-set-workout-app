import React from 'react'
import { Table, TableBody } from '@/components/ui/table'
import { produce } from 'immer'
import { devLog } from '@/lib/logger'
import ExerciseHeader from './ExerciseHeader'
import ExerciseRow from './ExerciseRow'

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

export function ExerciseTable() {
  const [state, dispatch] = React.useReducer(reducer, initialSet)

  devLog('state', state)

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
              key={set.id}
              set={set}
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
