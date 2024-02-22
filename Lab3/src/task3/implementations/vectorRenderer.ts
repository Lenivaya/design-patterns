import { IRenderer } from '@/task3/interfaces/IRenderer.js'
import { IShape } from '@/task3/interfaces/IShape.js'

export class VectorRenderer implements IRenderer {
  renderShape(shape: IShape): void {
    console.log(
      `Drawing ${shape.color} ${shape.constructor.name} of size ${shape.size} as vector graphics`
    )
  }
}
