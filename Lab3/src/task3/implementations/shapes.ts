import { IShape } from '@/task3/interfaces/IShape.js'
import { IRenderer } from '@/task3/interfaces/IRenderer.js'

abstract class Shape implements IShape {
  constructor(
    public color: string,
    public size: number,
    public renderer: IRenderer
  ) {}

  draw() {
    this.renderer.renderShape(this)
  }
}

export class Circle extends Shape {}

export class Square extends Shape {}

export class Triangle extends Shape {}
