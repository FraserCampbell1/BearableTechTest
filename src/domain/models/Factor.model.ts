export type FactorConstructorArgs = {
  id: string
  name: string
  on: boolean
}

export class Factor {
  public readonly id: string
  public readonly name: string
  public readonly on: boolean

  constructor(args: FactorConstructorArgs) {
    this.id = args.id
    this.name = args.name
    this.on = args.on
  }
}
