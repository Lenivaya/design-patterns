import { HeroDecorator } from '@/task2/index.js'

export class WeaponDecorator extends HeroDecorator {
  inventory = [...this.hero.inventory, 'Weapon']
}
