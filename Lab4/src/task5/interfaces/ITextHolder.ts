export interface ITextHolder {
  getText(): string

  setText(text: string): ITextHolder

  appendText(text: string): ITextHolder
}
