export enum MeasureUnitType {
  PerOne,
  Custom
}

export interface IMeasureUnit {
  measureUnitType: MeasureUnitType
  measureUnitName: string
}
