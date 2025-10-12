import React from 'react'
import { TableHead, TableHeader, TableRow } from '../ui/table'

export default function ExerciseHeader() {
  return (
    <TableHeader>
      <TableRow className={'bg-base-200'}>
        <TableHead className="w-[10%] rounded-l-xl pl-4">Sets</TableHead>
        <TableHead className="w-[25%] p-1">Weight</TableHead>
        <TableHead className="w-[25%] p-1">Reps</TableHead>
        <TableHead className="w-[10%] rounded-r-xl pr-4">Status</TableHead>
      </TableRow>
    </TableHeader>
  )
}
