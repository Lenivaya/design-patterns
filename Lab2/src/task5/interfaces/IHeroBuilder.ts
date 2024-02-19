import { IPersonBuilder } from '@/task5/interfaces/IPersonBuilder.js'
import { IHero } from '@/task5/interfaces/IHero.js'

export interface IHeroBuilder extends IPersonBuilder<IHero> {
  setGoodDeeds(goodDeeds: string[]): IPersonBuilder<IHero>
}
