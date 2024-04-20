import { ILightNode } from '@/task3/interfaces/index.js'

export abstract class LightNode implements ILightNode {
  abstract render(): string

  abstract generateScript(): string
}
