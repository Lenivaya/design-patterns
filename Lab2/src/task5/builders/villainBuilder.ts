import { PersonBuilder } from '@/task5/builders/personBuilder.js'
import {
  IPersonBuilder,
  IVillain,
  IVillainBuilder
} from '@/task5/interfaces/index.js'
import { Villain } from '@/task5/models/villain.js'

export class VillainBuilder
  extends PersonBuilder<IVillain>
  implements IVillainBuilder
{
  private badDeeds: string[] = []

  setBadDeeds(badDeeds: string[]): IPersonBuilder<IVillain> {
    this.badDeeds = badDeeds
    return this
  }

  build() {
    return new Villain(
      this.height,
      this.stature,
      this.hairColor,
      this.eyeColor,
      this.clothes,
      this.inventory,
      this.badDeeds
    )
  }
}
