import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { produce } from 'immer'
import { devLog } from '@/lib/logger'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'

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

function ExerciseRow({ set, handleInputChange, handleUpdateStatus }) {
  devLog('ExerciseRow rerendered')

  return (
    <TableRow key={set.id}>
      <TableCell className="font-medium">{set.id}</TableCell>

      {/* Weight */}
      <TableCell>
        <Input
          type={'number'}
          value={set.weight}
          onChange={(e) =>
            handleInputChange({ value: e.target.value, id: set.id, category: 'weight' })
          }
        />
      </TableCell>

      {/* Reps Input */}
      <TableCell>
        <Input
          type={'number'}
          value={set.reps}
          onChange={(e) =>
            handleInputChange({ value: e.target.value, id: set.id, category: 'reps' })
          }
        />
      </TableCell>

      {/* Status Input */}
      <TableCell>
        <Checkbox checked={set.isDone} onCheckedChange={() => handleUpdateStatus({ id: set.id })} />
      </TableCell>
    </TableRow>
  )
}
const MemoizedExerciseRow = React.memo(ExerciseRow)

function ExerciseHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[10%">Sets</TableHead>
        <TableHead className="w-[40%] p-1">Weight</TableHead>
        <TableHead className="w-[40%] p-1">Reps</TableHead>
        <TableHead className="w-[10%] p-1">Status</TableHead>
      </TableRow>
    </TableHeader>
  )
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
    <div className="bg-card text-card-foreground rounded-lg shadow-sm">
      <Table>
        <ExerciseHeader />

        <TableBody>
          {state?.map((set) => (
            <MemoizedExerciseRow
              key={set.id}
              set={set}
              handleInputChange={handleInputChange}
              handleUpdateStatus={handleUpdateStatus}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
