import { IVillain } from '@/task5/interfaces/index.js'

export class Villain implements IVillain {
  constructor(
    public height: number,
    public stature: string,
    public hairColor: string,
    public eyeColor: string,
    public clothes: string[] = [],
    public inventory: string[] = [],
    public badDeeds: string[] = []
  ) {}
}
