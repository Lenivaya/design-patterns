import { IVirus } from '@/task4/interfaces/IVirus.js'
import { cloneString } from '@/lib/utils.js'

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
      cloneString(this.name),
      cloneString(this.type),
      this.children.map((child) => child.clone())
    )
  }
}
