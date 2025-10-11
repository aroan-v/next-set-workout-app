/**
 * Converts seconds into a human-readable rest time.
 * - 60s becomes 1 (minute)
 * - 75s becomes "1m 15s"
 * - 45s becomes "45s"
 */
export function formatRestTime(seconds) {
  if (typeof seconds !== 'number' || seconds < 0) return null

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  if (minutes > 0 && remainingSeconds === 0) {
    return `${minutes}m` // pure minute count (e.g., 60 → 1)
  }

  if (minutes > 0 && remainingSeconds > 0) {
    return `${minutes}m ${remainingSeconds}s` // e.g., 75 → "1m 15s"
  }

  return `${remainingSeconds}s` // below 60 seconds
}
