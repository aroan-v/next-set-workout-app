import { devLog } from './logger'

export const getExercises = async (exerciseArray) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json'
  )

  if (!res.ok) throw new Error('Failed to fetch exercises!')
  const data = await res.json()

  devLog('getExercises - data', data)
  devLog('getExercises - exerciseArray', exerciseArray)

  if (exerciseArray && exerciseArray.length > 0) {
    const exerciseMap = new Map(data.map((exercise) => [exercise.id, exercise]))

    devLog('exerciseMap', exerciseMap)

    const foundExercises = exerciseArray
      .map(({ id, reps, sets, rest }) => {
        const target = exerciseMap.get(id)

        if (target) {
          return {
            ...target,
            reps,
            sets,
            restTime: rest,
          }
        }

        return target
      })
      .filter((exercise) => exercise !== undefined)

    return foundExercises
  }

  return data
}
