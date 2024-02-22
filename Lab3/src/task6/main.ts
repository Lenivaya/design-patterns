import {
  LightElementNode,
  LightTextNode,
  LightElementNodeArguments,
  ILightElementNodeArguments
} from '@/task5/index.js'
import { isSome } from '@/lib/utils.js'
import { readFile, writeFile } from 'fs/promises'

// import { writeHeapSnapshot } from 'v8'

// before using flyweight
//
// try {
//   const bookContents = await readFile('src/task6/pg1513.txt', 'utf-8')
//   const lines = bookContents.split('\n')
//
//   const root = new LightElementNode('div', false, 'block', ['container'])
//
//   lines.forEach((line, idx) => {
//     let element: LightElementNode
//
//     if (idx === 0) {
//       element = new LightElementNode('h1', false, 'block', [])
//     } else if (line.startsWith(' ')) {
//       element = new LightElementNode('blockquote', false, 'block', [])
//     } else if (line.length < 20) {
//       element = new LightElementNode('h2', false, 'block', [])
//     } else {
//       element = new LightElementNode('p', false, 'block', [])
//     }
//
//     const textNode = new LightTextNode(line)
//     element.addChild(textNode)
//     root.addChild(element)
//   })
//
//   const htmlContent = root.outerHTML()
//
//   await writeFile('output.html', htmlContent)
//
//   writeHeapSnapshot()
//
//   console.log('HTML file generated successfully!')
// } catch (error) {
//   console.error('Error:', error)
// }

interface IFlyweight<TFlyweight, TFlyWeightStateArgs> {
  cacheSize: number

  getCacheKey(args: TFlyWeightStateArgs): string

  getFlyweight(args: TFlyWeightStateArgs): TFlyweight
}

class FlyweightLightElementNodeArgumentsFactory
  implements IFlyweight<ILightElementNodeArguments, ILightElementNodeArguments>
{
  private flyweightsCache: Map<string, ILightElementNodeArguments> = new Map()

  constructor(initialFlyweights?: ILightElementNodeArguments[]) {
    if (isSome(initialFlyweights)) {
      for (const initialFlyweight of initialFlyweights) {
        this.flyweightsCache.set(
          this.getCacheKey(initialFlyweight),
          initialFlyweight
        )
      }
    }
  }

  getCacheKey(args: ILightElementNodeArguments): string {
    return `${args.tagName}-${args.selfClosing}-${args.displayType}-${args.classes.join('-')}`
  }

  getFlyweight(args: ILightElementNodeArguments): ILightElementNodeArguments {
    const cacheKey = this.getCacheKey(args)

    if (!this.flyweightsCache.has(cacheKey))
      this.flyweightsCache.set(
        cacheKey,
        new LightElementNodeArguments(
          args.tagName,
          args.selfClosing,
          args.displayType,
          args.classes
        )
      )

    return this.flyweightsCache.get(cacheKey) as ILightElementNodeArguments
  }

  get cacheSize() {
    return this.flyweightsCache.size
  }
}

try {
  const bookContents = await readFile('src/task6/pg1513.txt', 'utf-8')
  const lines = bookContents.split('\n')

  const root = new LightElementNode(
    new LightElementNodeArguments('div', false, 'block', ['container'])
  )

  const argumentsFactory = new FlyweightLightElementNodeArgumentsFactory()

  lines.forEach((line, idx) => {
    let args: LightElementNodeArguments

    if (idx === 0) {
      args = argumentsFactory.getFlyweight({
        tagName: 'h1',
        selfClosing: false,
        displayType: 'block',
        classes: []
      })
    } else if (line.startsWith(' ')) {
      args = argumentsFactory.getFlyweight({
        tagName: 'blockQuote',
        selfClosing: false,
        displayType: 'block',
        classes: []
      })
    } else if (line.trim().length < 20) {
      args = argumentsFactory.getFlyweight({
        tagName: 'h2',
        selfClosing: false,
        displayType: 'block',
        classes: []
      })
    } else {
      args = argumentsFactory.getFlyweight({
        tagName: 'p',
        selfClosing: false,
        displayType: 'block',
        classes: []
      })
    }

    const element = new LightElementNode(args)
    const textNode = new LightTextNode(line)

    element.addChild(textNode)
    root.addChild(element)
  })

  const htmlContent = root.outerHTML()

  // writeHeapSnapshot()

  await writeFile('output.html', htmlContent)
  console.log('HTML file generated successfully!')

  console.log('Cached html node arguments count:', argumentsFactory.cacheSize)
} catch (error) {
  console.error('Error:', error)
}
