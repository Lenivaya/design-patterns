import { IHero } from '@/task2/interfaces/IHero.js'

export class Hero implements IHero {
  constructor(
    public name: string,
    public inventory: string[] = []
  ) {}
}
