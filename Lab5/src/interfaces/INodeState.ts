import { LightNode } from '@/implementations'

export interface INodeState {
  node: LightNode

  render(): void

  clear(): void
}
