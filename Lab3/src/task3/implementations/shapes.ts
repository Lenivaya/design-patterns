import { IShape } from '@/task3/interfaces/IShape.js'
import { IRenderer } from '@/task3/interfaces/IRenderer.js'

export abstract class Shape implements IShape {
  constructor(
    public color: string,
    public size: number,
    public renderer: IRenderer
  ) {}

  draw() {
    this.renderer.renderShape(this)
  }
}
