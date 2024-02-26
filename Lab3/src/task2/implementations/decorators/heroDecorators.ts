import { IHero } from '@/task2/interfaces/IHero.js'

export abstract class HeroDecorator implements IHero {
  public name: string
  public inventory: string[]

  constructor(protected hero: IHero) {
    this.name = this.hero.name
    this.inventory = this.hero.inventory
  }
}
