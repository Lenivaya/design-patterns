import {
  VectorRenderer,
  RasterRenderer,
  Circle,
  Square,
  Triangle
} from '@/task3/index.js'

const vectorRenderer = new VectorRenderer()
const rasterRenderer = new RasterRenderer()

const figures = [
  new Circle('red', 5, vectorRenderer),
  new Triangle('blue', 6, rasterRenderer),
  new Square('green', 4, vectorRenderer)
]

figures.forEach((figure) => figure.draw())
