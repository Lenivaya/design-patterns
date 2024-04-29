import {
  LightElementNode,
  LightElementNodeArguments,
  LightTextNode
} from '@/implementations/index.js'
import { PageRenderer } from '@/implementations/pageRenderer'

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

pageContainer.addChildren([header, separator, list])

header.addEventListener('click', () => {
  alert('Header clicked')
})
list.addEventListener('click', () => {
  alert('List clicked')
})

const pageRenderer = new PageRenderer(pageContainer, 'LightHTML test')

console.log(pageRenderer.render())
