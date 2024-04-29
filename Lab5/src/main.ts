import {
  BreadthFirstLightElementNodesIterator,
  DeepFirstLightElementNodesIterator,
  LightElementNode,
  LightElementNodeArguments,
  LightTextNode
} from '@/implementations'
import chalk from 'chalk'

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

// const pageRenderer = new PageRenderer(pageContainer, 'LightHTML test')
// console.log(pageRenderer.render())

// Testing

const showHeader = (text: string) =>
  console.log(`\n\n${chalk.bold.redBright(text)}\n`)

// Testing iterators
console.log('Testing iterators')

showHeader('Breadth first iterator')
for (const node of new BreadthFirstLightElementNodesIterator([
  header,
  separator
])) {
  console.log(node)
}

showHeader('Deep first iterator')
for (const node of new DeepFirstLightElementNodesIterator([list])) {
  console.log(node)
}
