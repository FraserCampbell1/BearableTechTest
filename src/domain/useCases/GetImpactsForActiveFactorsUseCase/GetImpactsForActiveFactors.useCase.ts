import { getFactorEntries as _getFactorEntries } from "../../../data/factorEntries"
import { getOutcomeEntries as _getOutcomeEntries } from "../../../data/outcomeEntries"
import { Impact } from "../../models/Impact.model"
import { Outcome } from "../../types/outcome"
import { Result } from "../../types/result"
import { UseCase } from "../../types/useCase"
import { GetActiveFactorsUseCase, GetActiveFactorsUseCaseInterface } from "../GetActiveFactorsUseCase/GetActiveFactors.useCase"
import { average } from "../../../core/average"
import { round } from "../../../core/round"

/**
 * @description Get the impact scores for active factors
 *
 * @archUnit useCase
 * @archUnitDesc Defines a business rule e.g. adding an item to a shopping card, in a way that decouples it from external concerns.
 */
export class GetImpactsForActiveFactorsUseCase implements GetImpactsForActiveFactorsUseCaseInterface {
  constructor(
    private readonly getActiveFactorsUseCase: GetActiveFactorsUseCaseInterface = new GetActiveFactorsUseCase(),
    private readonly getFactorEntries = _getFactorEntries,
    private readonly getOutcomeEntries = _getOutcomeEntries,
  ) { }

  public async execute({ outcome }: GetImpactsForActiveFactorsUseCaseRequest): GetImpactsForActiveFactorsUseCaseResult {
    try {
      const factorsResult = await this.getActiveFactorsUseCase.execute()

    if (!factorsResult.success) {
      return {
        success: false,
        error: factorsResult.error,
      }
    }

    const entriesForOutcome = this.getOutcomeEntries()[outcome] ?? {}
    const entriesForFactors = this.getFactorEntries()

    const impactValues = factorsResult.value.map(factor => {
      // Get array of values that count towards with and without scores
      const { withValues, withoutValues } = this.calculateWithAndWithoutValues(entriesForOutcome, entriesForFactors)

      // Calculate the overall with and without scores
      const scoreWith = this.calculateScore(withValues)
      const scoreWithout = this.calculateScore(withoutValues)

      // We need at least 3 data points for both with and without scores to calculate the impact
      const hasLowData = withValues.length < 3 || withoutValues.length < 3

      return new Impact({
        factor,
        outcome,
        hasLowData,
        with: scoreWith,
        without: scoreWithout,
      })
    })
    

    return {
      success: true,
      value: impactValues,
      }
    } catch (error) {
      return {
        success: false,
        error: error as Error,
      }
    }
  }

  /**
   * @description Put the outcome score for each day/time into two arrays with and without
   * 
   * @param outcomeEntries - outcome entry data keyed by date
   * @param factorEntries - data for a single factor keyed by date
   * @returns an object with two arrays: with and without values
   */
  private calculateWithAndWithoutValues(
    outcomeEntries: Record<string, any>,
    factorEntries: Record<string, any>,
  ) {
    const withValues: number[] = []
    const withoutValues: number[] = []

    for (const dateKey in outcomeEntries) {
      // If no factor was recorded on the date the outcome was recorded
      // include the overall outcome score in the without factor values
      if (!factorEntries[dateKey]) {
        const value = outcomeEntries[dateKey]?.overall
        if (value !== undefined) {
          withoutValues.push(value)
        }
        continue
      }

      // Put the outcome scores that occurred before the factor into the without factor values
      // and the scores that occurred on or after the same time as the factor into the with factor values
      const outcomeData = outcomeEntries[dateKey]?.entryData || {}
      const factorData = factorEntries[dateKey]?.cumulativeData || {}
      const { occurred, notOccurred } = this.groupByOccurrence(outcomeData, factorData)

      if (occurred.length > 0) {
        const value = average(occurred)
        if (value !== undefined) {
          withValues.push(value)
        }
      }
      if (notOccurred.length > 0) {
        const value = average(notOccurred)
        if (value !== undefined) {
          withoutValues.push(value)
        }
      }
    }

    return {
      withValues,
      withoutValues,
    }
  }

  /**
   * @description Put the outcome scores into two arrays: occurred and notOccurred for a single day
   * It considers whether the factor occurred before or after the outcome, if multiple entries for energy and factor could have different occurrences
   * 
   * @param outcomeData - outcome value keyed by time it was recorded for a day
   * @param factorData - factor occurred keyed by time period it was recorded for a day
   * @returns an object with two arrays: occurred and notOccurred
   */
  private groupByOccurrence(
    outcomeData: Record<string, any>,
    factorData: Record<string, any>,
  ): { occurred: number[]; notOccurred: number[] } {
    const occurred: number[] = []
    const notOccurred: number[] = []
  
    if (factorData[0] === undefined) {
      factorData[0] = false
    }
  
    const outcomeTimes = Object.keys(outcomeData)
      .map(val => parseInt(val, 10))
      .filter(val => !isNaN(val))
      .sort((a, b) => a - b)
    const factorTimes = Object.keys(factorData)
      .map(val => parseInt(val, 10))
      .filter(val => !isNaN(val))
      .sort((a, b) => a - b)
  
    for (let i = 0; i < outcomeTimes.length; i++) {
      const outcomeTime = outcomeTimes[i]
      const score = outcomeData[outcomeTime]
      let isOccurred = false
  
      // Skip the iteration if the score is undefined
      if (score === undefined || score === null) {
        continue
      }
  
      // Determine if a score occurred by checking the comparator from the start of the day up to the effectTime
      for (let j = 0; j < factorTimes.length; j++) {
        const factorTime = factorTimes[j]
        const nextFactorTime = factorTimes[j + 1] || Infinity
  
        // Check if the current comparator time is relevant for the current score
        if (outcomeTime >= factorTime && outcomeTime < nextFactorTime) {
          if (factorData[factorTime]) {
            isOccurred = true
          }
          break // Stop checking once the relevant time segment is found
        }
      }
  
      if (isOccurred) {
        occurred.push(score)
      } else {
        notOccurred.push(score)
      }
    }
  
    return { occurred, notOccurred }
  }

  /**
   * @description Calculate the score by taking the average
   * 
   * @param values array of values to average
   * @returns average of values rounded to 1 decimal place
   */
  private calculateScore = (values: number[]): number => {
    if (values.length === 0) {
      return 0
    }
    return round(average(values), 1)
  }
}

export type GetImpactsForActiveFactorsUseCaseRequest = {
  outcome: Outcome
}

export type GetImpactsForActiveFactorsUseCaseResult = Result<
  Impact[]
>

export type GetImpactsForActiveFactorsUseCaseInterface = UseCase<
  GetImpactsForActiveFactorsUseCaseRequest,
  GetImpactsForActiveFactorsUseCaseResult
>