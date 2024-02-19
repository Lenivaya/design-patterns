import { IPerson, IPersonBuilder } from '@/task5/interfaces/index.js'

export abstract class PersonBuilder<TPerson extends IPerson>
  implements IPersonBuilder<TPerson>
{
  protected height: number = 0
  protected stature: string = ''
  protected hairColor: string = ''
  protected eyeColor: string = ''
  protected clothes: string[] = []
  protected inventory: string[] = []

  setHeight(height: number): IPersonBuilder<TPerson> {
    this.height = height
    return this
  }

  setStature(stature: string): IPersonBuilder<TPerson> {
    this.stature = stature
    return this
  }

  setHairColor(hairColor: string): IPersonBuilder<TPerson> {
    this.hairColor = hairColor
    return this
  }

  setEyeColor(eyeColor: string): IPersonBuilder<TPerson> {
    this.eyeColor = eyeColor
    return this
  }

  setClothes(clothes: string[]): IPersonBuilder<TPerson> {
    this.clothes = clothes
    return this
  }

  setInventory(inventory: string[]): IPersonBuilder<TPerson> {
    this.inventory = inventory
    return this
  }

  abstract build(): TPerson
}
