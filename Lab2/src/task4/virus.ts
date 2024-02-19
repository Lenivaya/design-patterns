import { IVirus } from '@/task4/interfaces/IVirus.js'

export class Virus implements IVirus {
  public constructor(
    public weight: number,
    public age: number,
    public name: string,
    public type: string,
    public children: IVirus[] = []
  ) {}

  clone(): IVirus {
    return new Virus(
      this.weight,
      this.age,
      this.name,
      this.type,
      this.children.map((child) => child.clone())
    )
  }
}
