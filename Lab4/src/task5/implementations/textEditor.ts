import { TextMemento } from '@/task5/implementations/textMemento'
import { TextDocument } from '@/task5/implementations/textDocument'
import { isNone } from '@/lib'

export class TextEditor {
  private history: TextMemento[] = []

  constructor(private document: TextDocument) {}

  public backup(): void {
    this.history.push(this.document.save())
  }

  public undo(): void {
    const memento = this.history.pop()
    if (isNone(memento)) return
    this.document.restore(memento)
  }
}
