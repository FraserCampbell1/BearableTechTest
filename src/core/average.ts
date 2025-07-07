export const average = (values: number[]) => {
  const sum = values.reduce((a, b) => a + b, 0)
  const avg = sum / values.length || 0
  return avg
}
