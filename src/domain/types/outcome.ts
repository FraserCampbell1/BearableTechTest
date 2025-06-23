export const OUTCOMES = {
  MOOD: 'mood',
  SLEEP: 'sleep',
  ENERGY: 'energy',
} as const

export type Outcome = (typeof OUTCOMES)[keyof typeof OUTCOMES]