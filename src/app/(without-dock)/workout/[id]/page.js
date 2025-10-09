'use client'
import ExerciseCard from '@/components/ExerciseCard'
import { devLog } from '@/lib/logger'
import PropTypes from 'prop-types'
import React, { use } from 'react'

Page.propTypes = {
  params: PropTypes.object,
}

export default function Page({ params }) {
  const { id } = use(params)
  const [data, setData] = React.useState(null)

  devLog('slug', id)

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/exercises')

      if (!res.ok) throw new Error('Failed to fetch exercises!')

      const data = await res.json()
      const slicedData = data.slice(0, 5)

      devLog('data.slice(0,10', data.slice(0, 15))
      setData(slicedData)
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen border">
      My Post: {id}
      {/* ExerciseCard */}
      <div className="flex flex-col gap-4 p-4">
        {data?.map((obj, index) => (
          <ExerciseCard key={index} contentObj={obj} />
        ))}
      </div>
    </div>
  )
}
