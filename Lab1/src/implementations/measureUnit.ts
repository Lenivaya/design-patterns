import { IMeasureUnit, MeasureUnitType } from '@/interfaces/IMeasureUnit.js'

export class MeasureUnit implements IMeasureUnit {
  constructor(
    public measureUnitType: MeasureUnitType,
    public measureUnitName: string
  ) {}
}

export class MeasureUnitPerOne extends MeasureUnit implements IMeasureUnit {
  constructor() {
    super(MeasureUnitType.PerOne, 'PerOne')
  }
}
