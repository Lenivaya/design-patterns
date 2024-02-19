import { HeroBuilder, VillainBuilder } from '@/task5/builders/index.js'
import { Director } from '@/task5/director.js'

const heroBuilder = new HeroBuilder()
const villainBuilder = new VillainBuilder()

const director = new Director()

director.buildSuperHero(heroBuilder)
const hero = heroBuilder.build()

director.buildSuperVillain(villainBuilder)
const villain = villainBuilder.build()

console.log(hero)
console.log(villain)
