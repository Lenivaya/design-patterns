export interface IMoney {
  readonly currencyName: string
  readonly units: number
  readonly subunits: number
  readonly decimal: number

  setAmount(units: number, subunits: number): void
}
