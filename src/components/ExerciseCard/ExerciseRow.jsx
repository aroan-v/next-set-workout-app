import { devLog } from '@/lib/logger'
import React from 'react'
import { TableCell, TableRow } from '../ui/table'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'

function ExerciseRow({ set, handleInputChange, handleUpdateStatus, className }) {
  devLog('ExerciseRow rerendered')

  return (
    <TableRow key={set.id} className={`${className} overflow-hidden rounded-4xl`}>
      <TableCell className="rounded-l-4xl pl-4 font-medium">{set.id}</TableCell>

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
      <TableCell className={'rounded-r-4xl pr-4'}>
        <Checkbox checked={set.isDone} onCheckedChange={() => handleUpdateStatus({ id: set.id })} />
      </TableCell>
    </TableRow>
  )
}

export default React.memo(ExerciseRow)
