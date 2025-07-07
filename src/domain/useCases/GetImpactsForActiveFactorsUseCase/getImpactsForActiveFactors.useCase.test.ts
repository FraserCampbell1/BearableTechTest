import { Factor } from '../../models/Factor.model'
import { Impact } from '../../models/Impact.model'
import { OUTCOMES } from '../../types/outcome'
import { MockGetActiveFactorsUseCase } from '../GetActiveFactorsUseCase/getActiveFactors.useCase.mock'
import { GetImpactsForActiveFactorsUseCase } from './GetImpactsForActiveFactors.useCase'

describe(GetImpactsForActiveFactorsUseCase.name, () => {
  let useCase: GetImpactsForActiveFactorsUseCase

  const mockGetActiveFactorsUseCase = MockGetActiveFactorsUseCase()
  const mockGetFactorEntries = jest.fn().mockReturnValue({})
  const mockGetOutcomeEntries = jest.fn().mockReturnValue({})

  const lowEnergyEntry = {
    entryData: {
      1400: 2,
    },
    timePeriodData: {
      0: undefined,
      600: undefined,
      1200: 2,
      1800: undefined,
    },
    overall: 2,
  }
  const highEnergyEntry = {
    entryData: {
      1400: 8,
    },
    timePeriodData: {
      0: undefined,
      600: undefined,
      1200: 8,
      1800: undefined,
    },
    overall: 8,
  }
  const allDayFactorEntry = {
    timePeriodData: {
      0: true,
      600: true,
      1200: true,
      1800: true,
    },
    cumulativeData: {
      0: true,
      600: true,
      1200: true,
      1800: true,
    },
    earliest: 0,
    occurred: true,
  }
  const morningFactorEntry = {
    timePeriodData: {
      0: false,
      600: true,
      1200: false,
      1800: false,
    },
    cumulativeData: {
      0: false,
      600: true,
      1200: true,
      1800: true,
    },
    earliest: 600,
    occurred: true,
  }
  const eveningFactorEntry = {
    timePeriodData: {
      0: false,
      600: false,
      1200: false,
      1800: true,
    },
    cumulativeData: {
      0: false,
      600: false,
      1200: false,
      1800: true,
    },
    earliest: 1800,
    occurred: true,
  }

  beforeEach(() => {
    jest.clearAllMocks()

    useCase = new GetImpactsForActiveFactorsUseCase(
      mockGetActiveFactorsUseCase,
      mockGetFactorEntries,
      mockGetOutcomeEntries,
    )
  })

  describe('WHEN active factors returns an error', () => {
    let error: Error

    beforeEach(() => {
      error = new Error('Error getting active factors')
      mockGetActiveFactorsUseCase.execute = jest.fn().mockReturnValue({
        success: false,
        error,
      })
    })

    it('SHOULD return the expected error response', async () => {
      // Arrange
      const request = {
        outcome: OUTCOMES.ENERGY,
      }
      const expectedResponse = {
        success: false,
        error,
      }

      // Act
      const result = await useCase.execute(request)

      // Assert
      expect(result).toEqual(expectedResponse)
    })
  })

  describe('WHEN active factors returns no factors', () => {
    beforeEach(() => {
      mockGetActiveFactorsUseCase.execute = jest.fn().mockReturnValue({
        success: true,
        value: [],
      })
    })

    it('SHOULD return the expected successful but undefined response', async () => {
      // Arrange
      const request = {
        outcome: OUTCOMES.ENERGY,
      }
      const expectedResponse = {
        success: true,
        value: [],
      }

      // Act
      const result = await useCase.execute(request)

      // Assert
      expect(result).toEqual(expectedResponse)
      expect(mockGetActiveFactorsUseCase.execute).toHaveBeenCalledWith()
    })
  })

  describe('WHEN active factors returns factors', () => {
    let factor: Factor

    beforeEach(() => {
      factor = new Factor({ id: 'factor-1', name: 'Factor 1', on: true })

      mockGetActiveFactorsUseCase.execute = jest.fn().mockReturnValue({
        success: true,
        value: [factor],
      })
    })

    describe('AND there are no outcome entries', () => {
      beforeEach(() => {
        mockGetOutcomeEntries.mockReturnValue({})
        mockGetFactorEntries.mockReturnValue({
          '20250101': {
            [factor.id]: {
              timePeriodData: {
                0: false,
                600: true,
                1200: false,
                1800: false,
              },
              cumulativeData: {
                0: false,
                600: true,
                1200: true,
                1800: true,
              },
              earliest: 600,
              occurred: true,
            },
          },
        })
      })

      it('SHOULD return the impact with low data, with score and without score as 0', async () => {
        // Arrange
        const request = {
          outcome: OUTCOMES.ENERGY,
        }
        const expectedResponse = {
          success: true,
          value: [
            new Impact({
              factor,
              outcome: OUTCOMES.ENERGY,
              hasLowData: true,
              with: 0,
              without: 0,
            }),
          ],
        }

        // Act
        const result = await useCase.execute(request)

        // Assert
        expect(result).toEqual(expectedResponse)
      })
    })

    describe('AND there are no factor entries', () => {
      beforeEach(() => {
        mockGetFactorEntries.mockReturnValue({})
        mockGetOutcomeEntries.mockReturnValue({
          [OUTCOMES.ENERGY]: {
            '20250101': {
              entryData: {
                1000: 6,
              },
              timePeriodData: {
                0: undefined,
                600: 6,
                1200: undefined,
                1800: undefined,
              },
              overall: 6,
            },
          },
        })
      })

      it('SHOULD return the impact with low data, with score and without score as 0', async () => {
        // Arrange
        const request = {
          outcome: OUTCOMES.ENERGY,
        }
        const expectedResponse = {
          success: true,
          value: [
            new Impact({
              factor,
              outcome: OUTCOMES.ENERGY,
              hasLowData: true,
              with: 0,
              without: 6,
            }),
          ],
        }

        // Act
        const result = await useCase.execute(request)

        // Assert
        expect(result).toEqual(expectedResponse)
      })
    })

    describe('AND there are enough all day entries', () => {
      beforeEach(() => {
        mockGetOutcomeEntries.mockReturnValue({
          [OUTCOMES.ENERGY]: {
            '20250101': lowEnergyEntry,
            '20250102': lowEnergyEntry,
            '20250103': lowEnergyEntry,
            '20250104': highEnergyEntry,
            '20250105': highEnergyEntry,
            '20250106': highEnergyEntry,
          },
        })

        mockGetFactorEntries.mockReturnValue({
          '20250104': {
            [factor.id]: allDayFactorEntry,
          },
          '20250105': {
            [factor.id]: allDayFactorEntry,
          },
          '20250106': {
            [factor.id]: allDayFactorEntry,
          },
        })
      })

      it('SHOULD return the impact without low data, with score as 8 and without score as 2', async () => {
        // Arrange
        const request = {
          outcome: OUTCOMES.ENERGY,
        }
        const expectedResponse = {
          success: true,
          value: [
            new Impact({
              factor,
              outcome: OUTCOMES.ENERGY,
              hasLowData: false,
              with: 8,
              without: 2,
            }),
          ],
        }

        // Act
        const result = await useCase.execute(request)

        // Assert
        expect(result).toEqual(expectedResponse)
      })
    })

    describe('AND there are entries for the time period with energy entry before the factor', () => {
      beforeEach(() => {
        mockGetOutcomeEntries.mockReturnValue({
          [OUTCOMES.ENERGY]: {
            '20250101': lowEnergyEntry,
            '20250102': lowEnergyEntry,
            '20250103': lowEnergyEntry,
            '20250104': highEnergyEntry,
            '20250105': highEnergyEntry,
            '20250106': highEnergyEntry,
          },
        })

        mockGetFactorEntries.mockReturnValue({
          '20250104': {
            [factor.id]: morningFactorEntry,
          },
          '20250105': {
            [factor.id]: morningFactorEntry,
          },
          '20250106': {
            [factor.id]: morningFactorEntry,
          },
        })
      })

      it('SHOULD return the impact without low data, with score as 8 and without score as 2', async () => {
        // Arrange
        const request = {
          outcome: OUTCOMES.ENERGY,
        }
        const expectedResponse = {
          success: true,
          value: [
            new Impact({
              factor,
              outcome: OUTCOMES.ENERGY,
              hasLowData: false,
              with: 8,
              without: 2,
            }),
          ],
        }

        // Act
        const result = await useCase.execute(request)

        // Assert
        expect(result).toEqual(expectedResponse)
      })
    })

    describe('AND there are entries for the time period with energy entry after the factor', () => {
      beforeEach(() => {
        mockGetOutcomeEntries.mockReturnValue({
          [OUTCOMES.ENERGY]: {
            '20250101': lowEnergyEntry,
            '20250102': lowEnergyEntry,
            '20250103': lowEnergyEntry,
            '20250104': highEnergyEntry,
            '20250105': highEnergyEntry,
            '20250106': highEnergyEntry,
          },
        })

        mockGetFactorEntries.mockReturnValue({
          '20250104': {
            [factor.id]: eveningFactorEntry,
          },
          '20250105': {
            [factor.id]: eveningFactorEntry,
          },
          '20250106': {
            [factor.id]: eveningFactorEntry,
          },
        })
      })

      it('SHOULD return the impact with low data, with score as 0 and without score as 5', async () => {
        // Arrange
        const request = {
          outcome: OUTCOMES.ENERGY,
        }
        const expectedResponse = {
          success: true,
          value: [
            new Impact({
              factor,
              outcome: OUTCOMES.ENERGY,
              hasLowData: true,
              with: 0,
              without: 5,
            }),
          ],
        }

        // Act
        const result = await useCase.execute(request)

        // Assert
        expect(result).toEqual(expectedResponse)
      })
    })
  })
})
