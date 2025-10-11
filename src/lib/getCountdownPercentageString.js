export function getCountdownPercentageString(countdown, totalTime) {
  if (typeof countdown !== 'number' || typeof totalTime !== 'number') return '0%'

  if (totalTime <= 0) return '0%'

  const raw = (countdown / totalTime) * 100
  const clamped = Math.max(0, Math.min(raw, 100))

  return `${clamped.toFixed(2)}%`
}
