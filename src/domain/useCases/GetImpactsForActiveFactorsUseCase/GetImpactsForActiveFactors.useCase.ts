import { Impact } from "../../models/Impact.model"
import { Outcome } from "../../types/outcome"
import { Result } from "../../types/result"
import { UseCase } from "../../types/useCase"
import { GetActiveFactorsUseCase, GetActiveFactorsUseCaseInterface } from "../GetActiveFactorsUseCase/GetActiveFactors.useCase"

/**
 * @description Get the impact scores for active factors
 *
 * @archUnit useCase
 * @archUnitDesc Defines a business rule e.g. adding an item to a shopping card, in a way that decouples it from external concerns.
 */
export class GetImpactsForActiveFactorsUseCase implements GetImpactsForActiveFactorsUseCaseInterface {
  constructor(
    private readonly getActiveFactorsUseCase: GetActiveFactorsUseCaseInterface = new GetActiveFactorsUseCase(),
  ) { }

  public async execute({ outcome }: GetImpactsForActiveFactorsUseCaseRequest): GetImpactsForActiveFactorsUseCaseResult {
    const factorsResult = await this.getActiveFactorsUseCase.execute()

    if (!factorsResult.success) {
      return {
        success: false,
        error: factorsResult.error,
      }
    }

    // TODO - add logic to get the impact scores for the active factors with bug

    return {
      success: true,
      value: [],
    }
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