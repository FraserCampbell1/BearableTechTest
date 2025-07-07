export const OUTCOMES = {
  MOOD: 'MOOD',
  SLEEP: 'SLEEP',
  ENERGY: 'ENERGY',
} as const

export type Outcome = (typeof OUTCOMES)[keyof typeof OUTCOMES]