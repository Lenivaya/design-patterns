import { IHero } from '@/task5/interfaces/index.js'

export class Hero implements IHero {
  constructor(
    public height: number,
    public stature: string,
    public hairColor: string,
    public eyeColor: string,
    public clothes: string[] = [],
    public inventory: string[] = [],
    public goodDeeds: string[] = []
  ) {}
}
