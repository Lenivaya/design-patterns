import { TextDocument, TextEditor } from '@/task5/implementations'

const document = new TextDocument('Hello, World!')
const editor = new TextEditor(document)

console.log(document)
editor.backup()

document
  .setText('Goodbye')
  .appendText(', World')
  .appendText('!!!')
  .appendText('😈')

console.log(document)

editor.undo()
console.log(document)
