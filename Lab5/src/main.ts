import {
  AddChildCommand,
  AddClassCommand,
  BreadthFirstLightElementNodesIterator,
  DeepFirstLightElementNodesIterator,
  LightElementNode,
  LightElementNodeArguments,
  LightTextNode,
  PageRenderer,
  LightElementNodeWithLoggingOfSteps
} from '@/implementations'
import { IUndoableCommand } from '@/interfaces'
import chalk from 'chalk'

const separator = new LightElementNode(
  new LightElementNodeArguments('hr', true)
)
const pageContainer = new LightElementNode(
  new LightElementNodeArguments('div', false, 'block', ['container'])
)
const headerArgs = new LightElementNodeArguments('h1', false, 'block', [
  'header'
])
const header = new LightElementNode(headerArgs)

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

// Testing commands
const commands: IUndoableCommand[] = [
  new AddClassCommand(headerArgs, 'class-added-with-command'),
  new AddChildCommand(
    header,
    new LightTextNode('New text node added with command')
  )
]

showHeader('Header before running commands:')
console.log(header)

showHeader('Header after running commands:')
commands.forEach((command) => command.execute())
console.log(header)

showHeader('Header after undoing commands:')
commands.forEach((command) => command.undo())
console.log(header)

// Testing template method
// (hooks must show output on different steps of element creation)
showHeader('Testing template method:')
const someElementWithLogging = new LightElementNodeWithLoggingOfSteps(
  new LightElementNodeArguments('div', false, 'block', ['testing-element'])
)
someElementWithLogging.render()
