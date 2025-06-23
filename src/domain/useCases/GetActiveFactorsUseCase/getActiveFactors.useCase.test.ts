import { GetActiveFactorsUseCase } from './GetActiveFactors.useCase'

describe(GetActiveFactorsUseCase.name, () => {
  describe('WHEN a factor is on', () => {
    it('SHOULD return the factor', async () => {
      // Arrange
      const factorsConfig = [{
        id: '1',
        name: 'Yoga',
        on: true,
      }]
      const expectedResponse = {
        success: true,
        value: factorsConfig,
      }

      // Act
      const result = await new GetActiveFactorsUseCase(factorsConfig).execute()

      // Assert
      expect(result).toEqual(expectedResponse)
    })
  })

  describe('WHEN a factor is off', () => {
    it('SHOULD return an empty array', async () => {
      // Arrange
      const factorsConfig = [{
        id: '1',
        name: 'Yoga',
        on: false,
      }]
      const expectedResponse = {
        success: true,
        value: [],
      }

      // Act
      const result = await new GetActiveFactorsUseCase(factorsConfig).execute()

      // Assert
      expect(result).toEqual(expectedResponse)
    })
  })
})
