import { GetActiveFactorsUseCaseInterface, GetActiveFactorsUseCaseResult } from "./GetActiveFactors.useCase"

export const MockGetActiveFactorsUseCase =
  (): jest.Mocked<GetActiveFactorsUseCaseInterface> => ({
    execute: jest.fn(
      async (): GetActiveFactorsUseCaseResult => {
        return {
          success: true,
          value: [],
        }
      },
    ),
  })