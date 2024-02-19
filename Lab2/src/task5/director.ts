import { IPerson, IPersonBuilder } from '@/task5/interfaces/index.js'
import { HeroBuilder } from '@/task5/builders/heroBuilder.js'
import { VillainBuilder } from '@/task5/builders/index.js'

export class Director {
  buildSuperHero(builder: IPersonBuilder<IPerson>) {
    builder
      .setHeight(190)
      .setStature('robust')
      .setHairColor('brown')
      .setEyeColor('green')
      .setClothes(['armor', 'boots', 'gloves'])
      .setInventory(['sword', 'crossbow'])

    if (builder instanceof HeroBuilder)
      builder.setGoodDeeds(['good', 'really good', 'he is a hero!'])
  }

  buildSuperVillain(builder: IPersonBuilder<IPerson>) {
    builder
      .setHeight(200)
      .setStature('robust')
      .setHairColor('black')
      .setEyeColor('blue')
      .setClothes(['armor', 'boots', 'gloves'])
      .setInventory(['sword', 'crossbow'])

    if (builder instanceof VillainBuilder)
      builder.setBadDeeds(['bad', 'really bad', 'he is a villain!'])
  }
}
