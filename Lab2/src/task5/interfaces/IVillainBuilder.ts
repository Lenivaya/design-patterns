import { IPersonBuilder } from '@/task5/interfaces/IPersonBuilder.js'
import { IVillain } from '@/task5/interfaces/IVillain.js'

export interface IVillainBuilder extends IPersonBuilder<IVillain> {
  setBadDeeds(badDeeds: string[]): IPersonBuilder<IVillain>
}
