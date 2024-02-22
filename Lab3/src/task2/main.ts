import {
  IHero,
  Hero,
  ArmorDecorator,
  ArtifactDecorator,
  WeaponDecorator
} from '@/task2/index.js'

let hero: IHero = new Hero('Warrior', ['Ring', 'Wolf skin'])
console.log('Hero inventory after creation:\n', hero.inventory)

hero = new ArmorDecorator(hero)
hero = new WeaponDecorator(hero)
console.log(
  'Hero inventory after applying armor and weapon decorators:\n',
  hero.inventory
)

hero = new ArtifactDecorator(hero)
console.log(
  'Hero inventory after applying artifact decorator:\n',
  hero.inventory
)
