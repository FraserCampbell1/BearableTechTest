import { getFactorsConfigs } from "../../../data/factorsConfig"
import { Factor } from "../../models/Factor.model"
import { Result } from "../../types/result"
import { UseCase } from "../../types/useCase"

/**
 * @description Gets list of active factors
 *
 * @archUnit useCase
 * @archUnitDesc Defines a business rule e.g. adding an item to a shopping card, in a way that decouples it from external concerns.
 */
export class GetActiveFactorsUseCase implements GetActiveFactorsUseCaseInterface {
  constructor(
    private readonly getAllFactors = getFactorsConfigs,
  ) { }

  public async execute(): GetActiveFactorsUseCaseResult {
    try {
      // bug fix: don't hard-code on: true for all factors, get this from the factor object
      // Filter out to only return factors where on === true
      const factors = this.getAllFactors().map(factor => new Factor({
        id: factor.id,
        name: factor.name,
        on: factor.on,
      })).filter(factor => factor.on === true)

      return {
        success: true,
        value: factors,
      }
    } catch (error) {
      return {
        success: false,
        error: error as Error,
      }
    }
  }
}

export type GetActiveFactorsUseCaseResult = Result<
  Factor[]
>

export type GetActiveFactorsUseCaseInterface = UseCase<void, GetActiveFactorsUseCaseResult>