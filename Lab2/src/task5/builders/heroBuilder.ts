import { PersonBuilder } from '@/task5/builders/personBuilder.js'
import {
  IHero,
  IHeroBuilder,
  IPersonBuilder
} from '@/task5/interfaces/index.js'
import { Hero } from '@/task5/models/hero.js'

export class HeroBuilder extends PersonBuilder<IHero> implements IHeroBuilder {
  private goodDeeds: string[] = []

  setGoodDeeds(goodDeeds: string[]): IPersonBuilder<IHero> {
    this.goodDeeds = goodDeeds
    return this
  }

  build() {
    return new Hero(
      this.height,
      this.stature,
      this.hairColor,
      this.eyeColor,
      this.clothes,
      this.inventory,
      this.goodDeeds
    )
  }
}
