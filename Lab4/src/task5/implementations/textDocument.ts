import { ITextHolder } from '@/task5/interfaces/ITextHolder'
import { TextMemento } from '@/task5/implementations/textMemento'

export class TextDocument implements ITextHolder {
  constructor(private content: string) {}

  public getText(): string {
    return this.content
  }

  setText(text: string): ITextHolder {
    this.content = text
    return this
  }

  appendText(text: string): ITextHolder {
    this.content += text
    return this
  }

  public save(): TextMemento {
    return new TextMemento(this.getText())
  }

  public restore(memento: TextMemento): void {
    this.setText(memento.getState())
  }
}
