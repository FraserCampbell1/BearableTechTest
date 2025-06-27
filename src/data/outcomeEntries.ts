import { Outcome, OUTCOMES } from "../domain/types/outcome"

/**
 * This is mock data for energy entries which is similar to the data used in the Bearable app.
 * 
 * entryData - this is the time the energy was recorded and the energy score out of 10
 * timePeriodData - this links up the time entry to the time period it belongs to
 * overall - this is the average energy score for the day
 */
export const getOutcomeEntries = (): Partial<Record<Outcome, any>> => ({
  [OUTCOMES.ENERGY]: {
    "20250101": {
      entryData: {
        1047: 6,
        2203: 9,
      },
      overall: 7.5,
    },
    "20250102": {
      entryData: {
        1036: 8,
        2212: 5,
      },
      overall: 6.5,
    },
    "20250103": {
      entryData: {
        1002: 2,
      },
      overall: 2,
    },
    "20250104": {
      entryData: {
        956: 6,
        2222: 6,
      },
      overall: 6,
    },
    "20250105": {
      entryData: {
        1008: 8,
        1433: 5,
        2228: 10,
      },
      overall: 7.67,
    },
    "20250106": {
      entryData: {
        1104: 5,
        2228: 6,
      },
      overall: 5.5,
    },
  }
})