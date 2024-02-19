import { IMoney, ISubtractable, ISummable } from '@/interfaces/index.js'

export abstract class Money
  implements IMoney, ISummable<Money>, ISubtractable<Money>
{
  constructor(
    public readonly currencyName: string,
    private _units: number,
    private _subunits: number
  ) {}

  get units(): number {
    return this._units
  }

  set units(value: number) {
    if (value < 0) throw new RangeError('Units cannot be negative.')
    this._units = value
  }

  get subunits(): number {
    return this._subunits
  }

  set subunits(value: number) {
    if (value < 0 || value >= 100)
      throw new RangeError('Subunits must be between 0 and 99.')
    this._subunits = value
  }

  get decimal(): number {
    return this._units + this._subunits / 100
  }

  setAmount(units: number, subunits: number): void {
    this.units = units
    this.subunits = subunits
  }

  add(other: IMoney): void {
    if (this.currencyName !== other.currencyName)
      throw new Error('Cannot add money with different currencies.')

    let totalUnits = this.units + other.units
    let totalSubunits = this.subunits + other.subunits

    if (totalSubunits >= 100) {
      totalUnits++
      totalSubunits -= 100
    }

    this.units = totalUnits
    this.subunits = totalSubunits
  }

  subtract(other: IMoney): void {
    if (this.currencyName !== other.currencyName)
      throw new Error('Cannot add money with different currencies.')

    let totalUnits = this.units - other.units
    let totalSubunits = this.subunits - other.subunits

    while (totalSubunits < 0) {
      totalUnits--
      totalSubunits += 100
    }

    if (totalSubunits < 0) throw new RangeError('Subunits cannot be negative.')

    this.units = totalUnits
    this.subunits = totalSubunits
  }

  toString(): string {
    return `${this.units}.${this.subunits} ${this.currencyName}`
  }
}

export class UAH extends Money {
  constructor(units: number, subunits: number) {
    super('UAH', units, subunits)
  }
}

export class USD extends Money {
  constructor(units: number, subunits: number) {
    super('USD', units, subunits)
  }
}

export class EUR extends Money {
  constructor(units: number, subunits: number) {
    super('EUR', units, subunits)
  }
}
