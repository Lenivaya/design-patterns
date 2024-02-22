import {
  LightElementNode,
  LightElementNodeArguments,
  LightTextNode
} from '@/task5/implementations/index.js'

// before flyweight pattern
// const separator = new LightElementNode('hr', true)
// const pageContainer = new LightElementNode('div', false, 'block', ['container'])
// const header = new LightElementNode('h1', false, 'block', ['header'])
//
// header.addChild(new LightTextNode('Using LightHTML'))
//
// const list = new LightElementNode('ul', false, 'block', ['list'])
// const items = ['Item 1', 'Item 2', 'Item 3']
// items.forEach((item) => {
//   const listItem = new LightElementNode('li', false, 'block', ['list-item'])
//   listItem.addChild(new LightTextNode(item))
//   list.addChild(listItem)
// })
//
// pageContainer.addChild(header)
// pageContainer.addChild(separator)
// pageContainer.addChild(list)
//
// console.log(pageContainer.render())

const separator = new LightElementNode(
  new LightElementNodeArguments('hr', true)
)
const pageContainer = new LightElementNode(
  new LightElementNodeArguments('div', false, 'block', ['container'])
)
const header = new LightElementNode(
  new LightElementNodeArguments('h1', false, 'block', ['header'])
)

header.addChild(new LightTextNode('Using LightHTML'))

const list = new LightElementNode(
  new LightElementNodeArguments('ul', false, 'block', ['list'])
)
const items = ['Item 1', 'Item 2', 'Item 3']
items.forEach((item) => {
  const listItem = new LightElementNode(
    new LightElementNodeArguments('li', false, 'block', ['list-item'])
  )
  listItem.addChild(new LightTextNode(item))
  list.addChild(listItem)
})

pageContainer.addChild(header)
pageContainer.addChild(separator)
pageContainer.addChild(list)

console.log(pageContainer.render())
