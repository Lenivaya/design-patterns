import { IPerson } from '@/task5/interfaces/IPerson.js'

export interface IPersonBuilder<TPerson extends IPerson> {
  setHeight(height: number): IPersonBuilder<TPerson>

  setStature(stature: string): IPersonBuilder<TPerson>

  setHairColor(hairColor: string): IPersonBuilder<TPerson>

  setEyeColor(eyeColor: string): IPersonBuilder<TPerson>

  setClothes(clothes: string[]): IPersonBuilder<TPerson>

  setInventory(inventory: string[]): IPersonBuilder<TPerson>

  build(): TPerson
}
