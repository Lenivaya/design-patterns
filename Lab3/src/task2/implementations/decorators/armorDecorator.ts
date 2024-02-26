import { HeroDecorator } from '@/task2/index.js'

export class ArmorDecorator extends HeroDecorator {
  inventory = [...this.hero.inventory, 'Armor']
}
