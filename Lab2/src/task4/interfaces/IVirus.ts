import { ICloneable } from '@/task4/interfaces/ICloneable.js'

export interface IVirus extends ICloneable<IVirus> {
  weight: number
  age: number
  name: string
  type: string
  children: IVirus[]
}
