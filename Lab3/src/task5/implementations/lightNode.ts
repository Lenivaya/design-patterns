import { ILightNode } from '@/task5/interfaces/index.js'

export abstract class LightNode implements ILightNode {
  abstract render(): string
}
