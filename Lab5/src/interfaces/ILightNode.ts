import { ILightElementNodeRenderResult } from '@/interfaces'

export interface ILightNode {
  render(): ILightElementNodeRenderResult

  generateScript(): string
}
