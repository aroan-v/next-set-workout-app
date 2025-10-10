import React from 'react'
import { TableCell, TableRow } from '../ui/table'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'

function ExerciseRow({ set, setNumber, handleInputChange, handleUpdateStatus, className }) {
  const { weight, reps, isDone, id } = set

  return (
    <TableRow className={`${className} overflow-hidden rounded-4xl`}>
      <TableCell className="rounded-l-4xl pl-4 font-medium">{setNumber}</TableCell>

      {/* Weight */}
      <TableCell>
        <Input
          type={'number'}
          value={weight}
          onChange={(e) => handleInputChange({ value: e.target.value, id, category: 'weight' })}
        />
      </TableCell>

      {/* Reps Input */}
      <TableCell>
        <Input
          type={'number'}
          value={reps}
          onChange={(e) => handleInputChange({ value: e.target.value, id, category: 'reps' })}
        />
      </TableCell>

      {/* Status Input */}
      <TableCell className={'rounded-r-4xl pr-4'}>
        <Checkbox checked={isDone} onCheckedChange={() => handleUpdateStatus({ id })} />
      </TableCell>
    </TableRow>
  )
}

export default React.memo(ExerciseRow)
