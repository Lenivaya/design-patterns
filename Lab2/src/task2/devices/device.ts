import { IDevice } from '@/task2/interfaces/index.js'

export abstract class Device implements IDevice {
  protected constructor(
    public name: string,
    public producer: string,
    public ram: number,
    public storage: number
  ) {}

  work() {
    console.log(`Device ${this.producer} ${this.name} works`)
  }
}
