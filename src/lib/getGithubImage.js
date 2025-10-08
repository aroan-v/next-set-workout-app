export async function getImages(imageUrl) {
  const baseImageUrl = 'https://github.com/yuhonas/free-exercise-db/blob/main/exercises/'

  const fullImageUrl = baseImageUrl + imageUrl

  const res = await fetch(fullImageUrl)
  const data = await res.json()
  return data
}

export const baseImageUrl =
  'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/'

export const geGithubImage = (file) =>
  `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${file}`
