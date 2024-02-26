import {
  LightElementNode,
  LightElementNodeArguments,
  LightTextNode
} from '@/task5/index.js'
import { readFile, writeFile } from 'fs/promises'
import { FlyweightElementNodeArgumentsFactory } from '@/task6/implementations/index.js'

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

try {
  const bookContents = await readFile('src/task6/pg1513.txt', 'utf-8')
  const lines = bookContents.split('\n')

  const root = new LightElementNode(
    new LightElementNodeArguments('div', false, 'block', ['container'])
  )

  const argumentsFactory = new FlyweightElementNodeArgumentsFactory()

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
