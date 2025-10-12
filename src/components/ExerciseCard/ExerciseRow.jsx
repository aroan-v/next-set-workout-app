import React from 'react'
import { TableCell, TableRow } from '../ui/table'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { devLog } from '@/lib/logger'

function ExerciseRow({ set, setNumber, handleInputChange, handleUpdateStatus, className }) {
  devLog('ExerciseRow - set', set)
  const { weight, reps, isDone, id } = set

  return (
    <TableRow className={`${className} overflow-hidden rounded-xl`}>
      <TableCell className="rounded-l-xl pl-4 font-medium">{setNumber}</TableCell>

      {/* Weight */}
      <TableCell>
        <Input
          type={'number'}
          value={weight || ''}
          onChange={(e) => handleInputChange({ value: e.target.value, id, category: 'weight' })}
        />
      </TableCell>

      {/* Reps Input */}
      <TableCell>
        <Input
          type={'number'}
          value={reps || ''}
          onChange={(e) => handleInputChange({ value: e.target.value, id, category: 'reps' })}
        />
      </TableCell>

      {/* Status Input */}
      <TableCell className={'rounded-r-xl pr-4'}>
        <Checkbox
          checked={isDone}
          onCheckedChange={() => handleUpdateStatus({ id, status: isDone })}
        />
      </TableCell>
    </TableRow>
  )
}

export default React.memo(ExerciseRow)
