import { IHero } from '@/task2/interfaces/IHero.js'

export abstract class HeroDecorator implements IHero {
  public name: string
  public inventory: string[]

  constructor(protected hero: IHero) {
    this.name = this.hero.name
    this.inventory = this.hero.inventory
  }
}

export class ArmorDecorator extends HeroDecorator {
  inventory = [...this.hero.inventory, 'Armor']
}

export class WeaponDecorator extends HeroDecorator {
  inventory = [...this.hero.inventory, 'Weapon']
}

export class ArtifactDecorator extends HeroDecorator {
  inventory = [...this.hero.inventory, 'Artifact']
}
