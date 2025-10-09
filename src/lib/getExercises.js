export const getExercises = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json'
  )

  if (!res.ok) throw new Error('Failed to fetch exercises!')
  const data = await res.json()

  return data
}
