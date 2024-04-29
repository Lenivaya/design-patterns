import { ILightNode } from '@/interfaces/index.js'

export abstract class LightNode implements ILightNode {
  abstract render(): string

  abstract generateScript(): string
}
