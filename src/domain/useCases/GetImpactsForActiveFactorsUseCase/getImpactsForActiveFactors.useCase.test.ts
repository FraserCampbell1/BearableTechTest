import { OUTCOMES } from '../../types/outcome'
import { GetImpactsForActiveFactorsUseCase } from './GetImpactsForActiveFactors.useCase'

describe(GetImpactsForActiveFactorsUseCase.name, () => {
  let useCase: GetImpactsForActiveFactorsUseCase

  beforeEach(() => {
    useCase = new GetImpactsForActiveFactorsUseCase()
  })

  // TODO - add tests for logic that fails for user to solve bug
  describe('WHEN there is no request', () => {
    it('SHOULD return the expected successful but undefined response', async () => {
      // Arrange
      const request = {
        outcome: OUTCOMES.MOOD,
      }
      const expectedResponse = {
        success: true,
        value: [],
      }

      // Act
      const result = await useCase.execute(request)

      // Assert
      expect(result).toEqual(expectedResponse)
    })
  })
})
