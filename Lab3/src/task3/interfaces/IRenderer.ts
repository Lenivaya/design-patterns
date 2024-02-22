import { IShape } from '@/task3/interfaces/IShape.js'

export interface IRenderer {
  renderShape(shape: IShape): void
}
