import { Outcome } from "../types/outcome"
import { Factor } from "./Factor.model"

export type ImpactConstructorArgs = {
  factor: Factor
  outcome: Outcome
  hasLowData: boolean
  with: number
  without: number
}

export class Impact {
  public readonly factor: Factor
  public readonly outcome: Outcome
  public readonly hasLowData: boolean
  public readonly with: number
  public readonly without: number
  public readonly impact: number

  constructor(args: ImpactConstructorArgs) {
    this.factor = args.factor
    this.outcome = args.outcome
    this.hasLowData = args.hasLowData
    this.with = args.with
    this.without = args.without
    this.impact = this.calculateImpact()
  }

  private calculateImpact(): number {
    return ((this.with - this.without) / this.without) * 100
  }
}
