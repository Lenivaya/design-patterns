import { IRenderer } from '@/task3/interfaces/IRenderer.js'

export interface IShape {
  color: string
  size: number
  renderer: IRenderer

  draw(): void
}
